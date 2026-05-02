import React, { useState } from 'react';
import {
    Building2,
    LayoutDashboard,
    HardHat,
    Map,
    Bell,
    HelpCircle,
    Menu,
    X,
    User,
    User2,
    UsersRound
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface Prop {
    activePage?: string;
}

const NAV_ITEMS = [
    { name: 'Home', icon: LayoutDashboard, id: 'dashboard', href:'/' },
    { name: 'Projects', icon: Building2, id: 'projects', href:'/admin/project' },
    { name: 'Properties', icon: Map, id: 'properties', href:'/admin/properties' },
    { name: 'Team', icon: UsersRound, id: 'team', href:'/admin/team' },
];

export default function Navbar({ activePage = 'dashboard' }: Prop) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full relative">
            {/* Main Navbar */}
            <nav className="w-full h-20 px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden p-2 text-gray-400 hover:text-black"
                >
                    <Menu size={24} />
                </button>

                {/* Center: Desktop Tabs */}
                <div className="hidden w-full md:flex items-center justify-center gap-10 p-1.5 rounded-xl">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={`
                                    flex px-4 py-2 text-sm font-medium hover:text-indigo-600 hover:bg-indigo-50/50
                                    rounded-lg transition-all ${(activePage === item.name) ? `text-indigo-600 bg-indigo-50/50` : `text-slate-600`}
                                `}
                        >
                            <item.icon size={22} strokeWidth={1.5}/>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* Right: Actions & Mobile Toggle */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="flex items-center pr-2 md:pr-4 gap-1">
                        <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                            <HelpCircle size={22} />
                        </button>
                        <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-500 relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar (Overlay) */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        className="absolute left-0 top-0 h-full w-72 bg-[#0B0F1A] border-r border-gray-800 p-6 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <Building2 className="text-blue-500" size={28} />
                                <span className="text-lg font-bold text-white">BuildFlow</span>
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-2 flex-1">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 ml-2">Main Menu</p>
                            {NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.href}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id
                                        ? 'bg-blue-600/10 text-blue-500'
                                        : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span className="font-medium">{item.name}</span>
                                </NavLink>
                            ))}
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-800">
                            <div className="flex items-center gap-3 px-2">
                                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                    AU
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Admin User</p>
                                    <p className="text-xs text-gray-500">Sign Out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}