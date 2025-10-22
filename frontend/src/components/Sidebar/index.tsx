import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  CircleDollarSign,
  Carrot,
  Menu,
} from "lucide-react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    {
      icon: CircleDollarSign,
      label: "Menu Principal",
      path: "/menu",
    },
    {
      icon: Carrot,
      label: "Posts",
      path: "/posts",
    },
  ];

  return (
    <div
      className={cn(
        "relative h-screen bg-gray-800 text-white border-r border-gray-100 transition-all duration-300 fixed z-10",
        collapsed ? "w-16" : "w-64" //64 original
      )}
    >
      {/* Topo com logo e botão de colapsar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            {/* <img src={Logo} alt="logo-market-pay" className='h-10 rounded-l-md' /> */}
            <div>
              <span className="text-xl font-bold text-white">Pop</span>
              <span className="text-xl font-bold text-green-500">News</span>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-[#3a4044] cursor-pointer"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </div>

      {/* Navegação */}
      <nav className="p-4 space-y-2">
        {items.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={index}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left cursor-pointer",
                isActive
                  ? "bg-green-500 text-white"
                  : "text-white hover:text-white hover:bg-cyan-500",
                collapsed && "justify-center px-2"
              )}
              onClick={() => navigate(item.path)}
            >
              <item.icon
                className={cn("w-5 h-5", !collapsed && "mr-3")}
              />
              {!collapsed && item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}