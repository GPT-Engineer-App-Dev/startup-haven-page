import { Home, Zap, BarChart2, HeadphonesIcon, Users } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Zap className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <HeadphonesIcon className="h-4 w-4" />,
    page: <Index />,
  },
];
