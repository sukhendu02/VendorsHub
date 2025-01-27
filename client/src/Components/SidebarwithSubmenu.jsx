import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Settings,
  ChevronLeft,
  Menu,
  Package,
  ChevronDown,
  Tags,
  BoxesIcon
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { 
      icon: Package, 
      label: 'Products', 
      path: '/products',
      submenu: [
        { label: 'All Products', path: '/products' },
        { label: 'Categories', path: '/products/categories' },
        { label: 'Inventory', path: '/products/inventory' }
      ]
    },
    { icon: ShoppingCart, label: 'Orders', path: '/orders' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const location = useLocation();
  
    const toggleSubmenu = (label) => {
      setOpenSubmenu(openSubmenu === label ? null : label);
    };
  
    const isActive = (path) => location.pathname === path;
    const isSubmenuActive = (submenuItems) => 
      submenuItems?.some(item => location.pathname === item.path);
  return(
    <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} relative`}>
    <button 
      onClick={() => setCollapsed(!collapsed)}
      className="absolute -right-3 top-10 bg-indigo-600 p-1 rounded-full text-white md:block hidden"
    >
      {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
    </button>

    <div className="p-4">
      <h1 className={`text-2xl font-bold mb-8 ${collapsed ? 'hidden' : 'block'}`}>
        VendorHub
      </h1>
    </div>
    <nav className="mt-8">
                  <button
                    onClick={() => !collapsed && toggleSubmenu(item.label)}
                    className={`w-full flex items-center px-4 py-3 transition-colors ${
                      isMenuActive 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <item.icon size={24} />
                    {!collapsed && (
                      <>
                        <span className="ml-4 flex-1 text-left">{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                 </>
                    )}
                  </button>
                  {!collapsed && isOpen && (
                    <div className="bg-gray-800">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`flex items-center pl-12 py-2 text-sm transition-colors ${
                            isActive(subItem.path)
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon size={24} />
                  <span className={`ml-4 ${collapsed ? 'hidden' : 'block'}`}>
                    {item.label}
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      </div>
  );

}