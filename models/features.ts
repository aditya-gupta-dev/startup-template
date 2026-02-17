export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const features: Feature[] = [
  {
    id: "inventory",
    icon: "📦",
    title: "Inventory Management",
    description: "Real-time tracking of ingredients, stock levels, and supplier orders. Never run out of critical items with intelligent reorder alerts.",
    highlight: true,
  },
  {
    id: "orders",
    icon: "🍽️",
    title: "Smart Order Management",
    description: "Streamline kitchen operations with automated order routing, real-time status updates, and seamless customer communication.",
  },
  {
    id: "pos",
    icon: "💳",
    title: "Modern POS System",
    description: "Lightning-fast transactions, multiple payment methods, and detailed sales analytics all in one integrated solution.",
    highlight: true,
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Advanced Analytics",
    description: "Comprehensive insights into sales trends, customer behavior, peak hours, and profitability metrics in real-time dashboards.",
  },
  {
    id: "staff",
    icon: "👥",
    title: "Staff Management",
    description: "Schedule shifts, track performance metrics, manage payroll, and keep your team synchronized across all locations.",
  },
  {
    id: "reservations",
    icon: "📅",
    title: "Reservation System",
    description: "Online booking, table management, customer preferences, and automated reminders to reduce no-shows and maximize capacity.",
    highlight: true,
  },
];

export const dashboardPlaceholder = {
  imagePath: "/dashboard-screenshot.png",
  altText: "Restaurant Management System Dashboard",
  caption: "Complete visibility into your restaurant operations",
};

export const heroContent = {
  title: "Restaurant Management Simplified",
  subtitle: "Streamline operations, boost efficiency, and delight your customers with our all-in-one platform",
  cta: "Start Your Free Trial",
  ctaSecondary: "Watch Demo",
};

export const companyInfo = {
  name: "RestaurantOS",
  tagline: "The modern operating system for restaurants",
};
