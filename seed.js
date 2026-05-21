const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const menuItems = [
  {
    name: "Classic Lobster Thermidor",
    description: "Creamy cognac sauce, gruyere crust, herb-infused butter.",
    image_url: "/images/custom/menu_lobster_thermidor_1777327128991.png",
    price: 245,
    category: "Signature Dishes",
    dietary: ["Gluten-Free Option"],
    tag: "Signature",
    is_tall: true,
    is_wide: false
  },
  {
    name: "Signature Seafood Platter",
    description: "King crab, oysters, jumbo shrimp, calamari, mussels.",
    image_url: "/images/custom/menu_seafood_tower_platter_1777327161161.png",
    price: 480,
    category: "Sharing Platters",
    tag: "Sharing",
    is_tall: false,
    is_wide: false
  },
  {
    name: "Alaskan King Crab Legs",
    description: "Steamed Alaskan king crab with drawn butter and lemon.",
    image_url: "/images/custom/menu_alaskan_king_crab.png",
    price: 310,
    category: "Market Fresh",
    dietary: ["Gluten-Free"],
    tag: "Premium"
  },
  {
    name: "Mediterranean Sea Bass",
    description: "Whole-roasted with sea salt and citrus.",
    image_url: "/images/custom/menu_seabass_mediterranean_1777327177113.png",
    price: 185,
    category: "Main Courses",
    dietary: ["Gluten-Free"],
    tag: "Market Fresh"
  },
  {
    name: "Finest Selection of Oysters",
    description: "Freshly shucked daily with signature mignonette.",
    image_url: "/images/custom/menu_fresh_oysters_platter_1777327192111.png",
    price: 120,
    category: "Appetizers",
    dietary: ["Gluten-Free"],
    tag: "Appetizer",
    is_wide: true
  },
  {
    name: "Grilled Tiger Prawns",
    description: "Garlic-lemon infusion, signature spice rub.",
    image_url: "/images/custom/menu_tiger_prawns_grilled_1777327142301.png",
    price: 165,
    category: "Main Courses",
    dietary: ["Spicy"],
    tag: "House Favourite"
  },
  {
    name: "Crispy Calamari Fritti",
    description: "Lightly battered squid rings with spicy marinara sauce.",
    image_url: "/images/custom/menu_calamari_fritti.png",
    price: 75,
    category: "Appetizers",
    tag: "Classic"
  },
  {
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata, balsamic glaze, fresh basil, extra virgin olive oil.",
    image_url: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    price: 85,
    category: "Soups & Salads",
    dietary: ["Vegetarian"],
    tag: "Fresh"
  },
  {
    name: "Belgian Chocolate Fondant",
    description: "Warm chocolate cake with molten center, vanilla bean gelato.",
    image_url: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    price: 55,
    category: "Desserts",
    dietary: ["Vegetarian"],
    tag: "Sweet"
  },
  {
    name: "Classic Mint Mojito",
    description: "Fresh mint, lime juice, sparkling water, splash of cane syrup.",
    image_url: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    price: 35,
    category: "Beverages",
    tag: "Refreshing"
  },
  {
    name: "Passion Fruit Fusion",
    description: "Tropical passion fruit, orange zest, pomegranate seeds.",
    image_url: "/images/custom/menu_passion_fruit_fusion.png",
    price: 38,
    category: "Beverages",
    tag: "Exotic"
  }
];

const dailyCatch = [
  {
    name: "Alaskan King Crab",
    origin: "Bering Sea",
    description: "Premium clusters, naturally sweet and tender.",
    image_url: "/images/custom/menu_alaskan_king_crab.png",
    price: 310,
  },
  {
    name: "Mediterranean Sea Bass",
    origin: "Greece",
    description: "Whole-roasted with sea salt, citrus, and herbs.",
    image_url: "/images/custom/menu_seabass_mediterranean_1777327177113.png",
    price: 185,
  },
  {
    name: "Bluefin Tuna",
    origin: "Local Waters",
    description: "Sustainably caught, served as carpaccio or grilled.",
    image_url: "https://images.pexels.com/photos/3296395/pexels-photo-3296395.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
    price: 145,
  },
];

async function seed() {
  console.log("Seeding menu_items...");
  const { error: err1 } = await supabase.from('menu_items').insert(menuItems);
  if (err1) console.error("Error seeding menu:", err1);
  else console.log("Menu items seeded.");

  console.log("Seeding daily_catch...");
  const { error: err2 } = await supabase.from('daily_catch').insert(dailyCatch);
  if (err2) console.error("Error seeding daily catch:", err2);
  else console.log("Daily catch seeded.");
}

seed();
