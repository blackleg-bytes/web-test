import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Logo } from "../icons/Logo";
import { LogoText } from "../icons/LogoText";
import { StoreLogo } from "../icons/StoreLogo";
import { Home } from "../icons/Home";
import { Sell } from "../icons/Sell";
import { Products } from "../icons/Products";
import { Experiences } from "../icons/Experiences";
import { Services } from "../icons/Services";
import { Bookings } from "../icons/Bookings";
import { Memberships } from "../icons/Memberships";
import { Bundles } from "../icons/Bundles";
import { CustomOffers } from "../icons/CustomeOffers";
import { Customers } from "../icons/Customers";
import { Payouts } from "../icons/Payouts";
import { Analytics } from "../icons/Annalytics";
import { Settings } from "../icons/Settings";
import { SignOut } from "../icons/SignnOut";

type MenuItem = {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  active?: boolean;
  submenu?: {
    icon: React.ComponentType<any>;
    label: string;
    href?: string;
    active?: boolean;
  }[];
  expandable?: boolean;
};

const menuItems: MenuItem[] = [
  { icon: Home, label: "Home", href: "#" },
  {
    icon: Sell,
    label: "Sell",
    submenu: [
      { icon: Products, label: "Products", href: "#" },
      { icon: Experiences, label: "Experiences", href: "#" },
      { icon: Services, label: "Services", href: "#" },
      { icon: Bookings, label: "Bookings", href: "#", active: true },
      { icon: Memberships, label: "Memberships", href: "#" },
      { icon: Bundles, label: "Bundles", href: "#" },
      { icon: CustomOffers, label: "Custom offers", href: "#" },
    ],
  },
  { icon: Customers, label: "Customers", href: "#", expandable: true },
  { icon: Payouts, label: "Payouts", href: "#", expandable: true },
  { icon: Analytics, label: "Analytics", href: "#" },
  //   { icon: Settings, label: "Settings", href: "#" },
];

export default function Sidebar({
  mobileSidebarOpen,
  setMobileSidebarOpen,
}: {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("Sell");
  const toggleMenu = (menu: string) => {
    setExpandedMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <>
      {/* desktop sidebar */}
      <div className="hidden md:flex w-60 bg-[#F9FAFC] border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="pt-6 px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Logo />
            </div>
            <span className="font-bold text-lg">
              <LogoText />
            </span>
          </div>
        </div>

        {/* Store selector */}
        <div className="px-4 pt-4 pb-2">
          <button className="w-full flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              <StoreLogo />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-sm">The Dune Preserve</p>
              <p className="text-xs text-gray-500">View store</p>
            </div>
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isExpanded = expandedMenu === item.label;
              const hasSubmenu = !!item.submenu;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => hasSubmenu && toggleMenu(item.label)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                    ${
                      item.active
                        ? "bg-[#E8F5FF] text-[#072AC8]"
                        : "text-[#2D3035] hover:bg-[#E8F5FF]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.label}</span>

                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {!hasSubmenu && item.expandable && (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {hasSubmenu && isExpanded && (
                    <div className="mt-1 ml-4 space-y-1">
                      {item.submenu!.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <button
                            key={sub.label}
                            type="button"
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm 
                            ${
                              sub.active
                                ? "bg-[#E8F5FF] text-[#072AC8]"
                                : "text-[#2D3035] hover:bg-[#E8F5FF]"
                            }`}
                          >
                            <SubIcon className="w-5 h-5" />
                            <span className="flex-1 text-left">
                              {sub.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Sign out */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium">
            <SignOut className="w-5 h-5" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Mobile drawer sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileSidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileSidebarOpen(false)}
        />
        {/* panel */}
        <div className="relative z-50 w-64 h-full bg-[#F9FAFC] border-r border-gray-200 flex flex-col">
          {/* you can reuse the same sidebar content here */}
          {/* Logo */}
          <div className="pt-6 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Logo />
              </div>
              <span className="font-bold text-lg">
                <LogoText />
              </span>
            </div>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* rest of sidebar (store selector, menu, sign out) exactly as in desktop */}
        </div>
      </div>
    </>
  );
}
