export interface MenuItem {
  id: string;
  tag: string;
  name: string;
  description: string;
  image: string;
  tall?: boolean;
  wide?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "whole-lobster",
    tag: "Signature",
    name: "Classic Lobster\nThermidor",
    description: "Creamy cognac sauce, gruyere crust, herb-infused butter.",
    image: "/images/custom/menu_lobster_thermidor_1777327128991.png",
    tall: true,
  },
  {
    id: "grand-plateau",
    tag: "Sharing",
    name: "Signature Seafood\nPlatter",
    description: "King crab, oysters, jumbo shrimp, calamari.",
    image: "/images/custom/menu_seafood_tower_platter_1777327161161.png",
  },
  {
    id: "king-crab",
    tag: "Premium",
    name: "King Crab Legs",
    description: "Steamed Alaskan king crab with drawn butter and lemon.",
    image: "https://images.pexels.com/photos/8991667/pexels-photo-8991667.jpeg?auto=compress&cs=tinysrgb&w=800&q=80",
  },
  {
    id: "sea-bass",
    tag: "Market Fresh",
    name: "Mediterranean\nSea Bass",
    description: "Whole-roasted with sea salt and citrus.",
    image: "/images/custom/menu_seabass_mediterranean_1777327177113.png",
  },
  {
    id: "oysters",
    tag: "Appetizer",
    name: "Finest Selection\nof Oysters",
    description: "Freshly shucked daily with signature mignonette.",
    image: "/images/custom/menu_fresh_oysters_platter_1777327192111.png",
    wide: true,
  },
  {
    id: "tiger-prawn",
    tag: "House Favourite",
    name: "Grilled Tiger\nPrawns",
    description: "Garlic-lemon infusion, signature spice rub.",
    image: "/images/custom/menu_tiger_prawns_grilled_1777327142301.png",
  },
];
