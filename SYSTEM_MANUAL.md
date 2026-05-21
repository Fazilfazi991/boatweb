# Boat Seafood Restaurant - System Manual

This document provides a comprehensive overview of the digital systems powering the Boat Seafood Restaurant platform. It is designed to help owners, administrators, and kitchen staff understand how the system components interact and how to operate them on a daily basis.

---

## 1. Customer Ordering Flow (Front-End)

Customers visiting the website can view the real-time menu and place orders directly to the kitchen.
- **Dynamic Menu:** The main Menu page (`/menu`) and the Fresh Catch page dynamically pull data from the secure database. Only items marked as "Active" by the Admin are displayed.
- **Cart & Checkout:** Customers can add items to their cart. Clicking "Order Online" opens the cart drawer where they can review their selection.
- **Order Submission:** When an order is submitted, it is tagged with a "Table Number" (if scanning a QR code) or "Takeaway". The order is then securely pushed to the database with a "Pending" status, instantly alerting the kitchen.

---

## 2. Kitchen Display System (KDS)

The KDS is a specialized, live-updating dashboard specifically engineered for the back-of-house (kitchen) staff to manage incoming orders seamlessly.

- **Access URL:** `www.yourdomain.com/kitchen`
- **User Interface:** Features a high-contrast, dark-mode design optimized for visibility in a bright, fast-paced kitchen environment.
- **Live Feed & Audio Alarm:** 
  - The dashboard is connected to the database via real-time WebSockets.
  - The moment a new "Pending" order is submitted by a customer, it appears on the screen without needing to refresh the page.
  - A **continuous audio alarm** immediately begins ringing and looping to ensure the kitchen staff does not miss the order.
- **Order Details:** Each order card displays:
  - Table Number or Takeaway status.
  - The exact timestamp the order was received.
  - A unique, hash-based Order ID.
  - A clear list of the requested items and their quantities.
- **Order Fulfillment:**
  - Once the food is prepared, the chef clicks the prominent `Complete Order` button.
  - This action silences the alarm, removes the order from the active queue, and marks it as "Completed" in the database for historical record-keeping.
  - The "Silence Alarm" button can also be used to temporarily mute the beep without completing the order.

---

## 3. Administrator Dashboard & CMS

The Admin Dashboard is the central hub for the restaurant owner to monitor sales, manage the menu, and track the kitchen's progress.

- **Access URL:** `www.yourdomain.com/admin`
- **Security:** The dashboard is protected behind an authentication wall requiring an admin email and password.
- **Overview Page:** 
  - Displays high-level analytics, including Total Revenue, Total Orders, and the number of Pending Orders.
  - Features a silent "Live Feed" mirror of the Kitchen Display System. This allows management to see what orders the kitchen is currently working on without the audio alarm interfering with office work.
- **Menu Management (`/admin/menu`):**
  - A built-in Content Management System (CMS) where the admin can Add, Edit, or Remove dishes from the menu.
  - Changes made here instantly update the public-facing website.
- **Daily Catch Management (`/admin/daily-catch`):**
  - Allows the admin to update the fresh seafood availability daily.
  - Features quick toggles to mark specific catches as "Available" or "Sold Out", ensuring customers are only ordering what is currently in stock.

---

## 4. Technical Infrastructure & Database

The platform relies on a modern, decoupled architecture powered by **Next.js** and **Supabase**.

- **Supabase PostgreSQL:** The core database housing the `orders`, `menu_items`, and `daily_catch` tables.
- **Row Level Security (RLS):** Stringent database policies protect your data. Anonymous customers are only granted permission to `INSERT` new orders and `SELECT` active menu items, while only authenticated administrators can `UPDATE` or `DELETE` records.
- **Real-time WebSockets:** Both the Admin and Kitchen dashboards subscribe to database changes (`postgres_changes`), meaning the moment an order is inserted or completed, all connected screens update synchronously in less than a second.
- **State Management:** The customer cart state is managed via React Context, ensuring the cart count in the navigation bar matches the cart drawer drawer universally across the site.

---

*This manual reflects the system's capabilities as of its initial deployment. Future analytics and historical order tracking modules will build upon this stable foundation.*
