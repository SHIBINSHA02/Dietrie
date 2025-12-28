// nextjs_deve/app/_components/SideMenu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  Apple,
  Users,
  Calendar,
  BookOpen,
  Settings,
  HelpCircle,
  ChevronRight,
  Utensils,
  Target,
  TrendingUp,
  LucideIcon
} from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  to: string;
  badge?: string;
}

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: Home, to: "/home" },
    { id: "dashboard", label: "Dashboard", icon: TrendingUp, to: "/dashboard" },
    { id: "meal-plans", label: "Meal Plans", icon: Utensils, to: "/meals", badge: "3" },
    { id: "nutrition", label: "Nutrition Tracking", icon: Apple, to: "/track" },
    { id: "goals", label: "Health Goals", icon: Target, to: "/goals" },
    { id: "appointments", label: "Appointments", icon: Calendar, to: "/appointments", badge: "2" },
    { id: "nutritionists", label: "Find Nutritionists", icon: Users, to: "/nutritionists" },
    { id: "profile", label: "Profile", icon: User, to: "/profile" },
    { id: "resources", label: "Resources", icon: BookOpen, to: "/resources" },
  ];

  const bottomMenuItems: MenuItem[] = [
    { id: "settings", label: "Settings", icon: Settings, to: "/settings" },
    { id: "help", label: "Help & Support", icon: HelpCircle, to: "/help" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 left-4 z-[60] p-3 bg-green-600 text-white rounded-2xl shadow-xl hover:bg-green-700 active:scale-95 transition"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
     <aside
            className={`
                bg-white shadow-2xl 
                
                    lg:sticky lg:top-0
    w-full top-0 left-0
                h-screen z-50
                 sm:w-[55vw] md:w-[35vw] lg:w-[15vw]
                transition-transform duration-300 mb-7 rounded-b-2xl 
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
            >

        {/* Header */}
        <div className="p-6 border-b-green-200 border-b bg-white/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <Apple className="text-white" size={26} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Dietrie</h2>
              <p className="text-sm text-gray-600">Nutrition Connect</p>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="p-4 border-b border-green-200 rounded-4xl bg-white sticky top-[84px] z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="text-gray-600" />
            </div>
            <div className="flex-1">
              <p className=" text-gray-600">S SHIBINSHA</p>
              <p className="text-sm text-green-600 font-medium">Premium Member</p>
            </div>
            <ChevronRight className="text-gray-400" size={18} />
          </div>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.to}
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-[15px]
                  ${active
                    ? "bg-green-100  shadow-lg shadow-green-200 border border-green-200"
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-700"}`}
              >
                <Icon size={20} />
                <span className="flex-1 font-medium">{item.label}</span>

                {item.badge && (
                  <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Menu */}
        <div className="border-t-green-200 border-t p-3 space-y-1">
          {bottomMenuItems.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${active
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100 hover:text-green-700"}`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Upgrade */}
        <div className="m-3 mb-4 p-4 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl text-white shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={20} />
            <span className="font-semibold">Go Pro</span>
          </div>
          <p className="text-sm opacity-90 mb-3">
            Unlock advanced nutrition tracking & personalized plans.
          </p>
          <button className="w-full bg-white text-green-700 py-2 rounded-xl font-semibold hover:bg-gray-50 transition">
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
