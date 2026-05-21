"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { TrendingUp, Utensils, DollarSign, Clock, Check, AlertCircle, RefreshCw, BellOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Order {
  id: string;
  table: string;
  items: { name: string; quantity: number }[];
  total: number;
  timestamp: string;
  status: 'pending' | 'completed';
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    revenue: 0,
    pendingOrdersCount: 0,
  });

  const [orders, setOrders] = useState<Order[]>([]);

  const loadData = async () => {
    const { data: allOrders } = await supabase.from("orders").select("*").order('timestamp', { ascending: false });
    
    if (allOrders) {
      const total = allOrders.reduce((acc, order) => acc + Number(order.total || 0), 0);
      const pendingList = allOrders.filter(o => o.status === 'pending');
      
      setStats({
        totalOrders: allOrders.length,
        revenue: total,
        pendingOrdersCount: pendingList.length,
      });

      setOrders(pendingList);
    }
  };

  useEffect(() => {
    loadData();
    
    const subscription = supabase
      .channel('orders_channel_admin')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
        loadData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const completeOrder = async (id: string) => {
    await supabase.from('orders').update({ status: 'completed' }).eq('id', id);
    loadData();
  };

  const clearAll = async () => {
    if (confirm("Are you sure you want to clear all pending orders?")) {
      await supabase.from('orders').delete().eq('status', 'pending');
      loadData();
    }
  };


  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Overview</h1>
        <p className="text-gray-500">Welcome to your restaurant dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-navy">AED {stats.revenue}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
            <Utensils size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Orders</p>
            <p className="text-2xl font-bold text-navy">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Pending Orders</p>
            <p className="text-2xl font-bold text-navy">{stats.pendingOrdersCount}</p>
          </div>
        </div>
      </div>
      
      {/* Live Order Feed */}
      <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <h2 className="text-[10px] tracking-[4px] uppercase font-bold text-red-500">Live Feed</h2>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-navy">Active Orders</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={loadData}
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-600 px-4 py-2 rounded-lg transition-all"
            >
              <RefreshCw size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Refresh</span>
            </button>
            <button 
              onClick={clearAll}
              className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg transition-all"
            >
              <AlertCircle size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Clear All</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {orders.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full h-40 flex flex-col items-center justify-center text-gray-400"
              >
                <Utensils size={40} className="mb-4 opacity-20" />
                <p className="font-playfair text-xl italic text-gray-400">No active orders right now.</p>
              </motion.div>
            ) : (
              orders.map((order) => (
                <motion.div
                  key={order.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="p-5 border-b border-gray-100 bg-white flex justify-between items-start">
                    <div>
                      <div className="text-[9px] tracking-[2px] uppercase text-gray-500 font-bold mb-1">Table</div>
                      <div className="text-2xl font-playfair font-bold text-navy">{order.table}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1.5 text-gray-400 mb-1">
                        <Clock size={12} />
                        <span className="text-[10px] font-bold">
                          {new Date(order.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="text-[10px] text-gray-400">#{order.id.slice(0,8)}</div>
                    </div>
                  </div>

                  <div className="p-5 flex-grow flex flex-col gap-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <span className="bg-navy text-white min-w-[24px] h-6 rounded flex items-center justify-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <span className="text-sm font-medium text-navy/80">{item.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-white border-t border-gray-100">
                    <button 
                      onClick={() => completeOrder(order.id)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all font-bold text-xs uppercase tracking-wider shadow-sm"
                    >
                      <Check size={16} />
                      Complete Order
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
