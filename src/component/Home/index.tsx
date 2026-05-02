import React from 'react';
import {
    Settings,
    MapPin,
    Mail,
    Link as LinkIcon,
    Calendar,
    ShieldCheck,
    Layers,
    Zap,
    Clock,
    ChevronRight,
    Briefcase
} from 'lucide-react';
import { personalInfo, skills } from '../../constants';
import About from '../About';
import Project from '../Projects';

export default function Home() {
    return (
        <>
            <div className="font-poppins min-h-screen bg-[#F8FAFC] text-[#1E293B] p-4 md:p-8">
                <div className="max-w-6xl mx-auto space-y-6">

                    {/* Header Section */}
                    <header className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
                        {/* Cover Accent - More architectural blue */}
                        <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500" />

                        <div className="px-6 pb-6 pt-2">
                            <div className="relative flex flex-col md:flex-row md:items-end -mt-12 gap-6 md:gap-4">
                                {/* Avatar with Ring */}
                                <div className="relative group">
                                    <div className="h-32 w-32 rounded-2xl bg-white ring-4 ring-emerald-500 shadow-xl">
                                        <img
                                            src={personalInfo.image}
                                            alt="Profile"
                                            className="h-full w-full rounded-2xl object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 left-24 bg-blue-600 rounded-full p-1.5 border-2 border-white">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                </div>

                                {/* Name & Title */}
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h1 className="font-poppins text-2xl md:text-3xl font-bold tracking-tight text-slate-900 rounded-full">{personalInfo.name}</h1>
                                        <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] uppercase font-bold border border-emerald-100">
                                            Licensed PE
                                        </span>
                                    </div>
                                    <p className="text-slate-500 font-medium">Senior Civil Engineer & Site Lead</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                className='w-5 h-5'
                                                src="/images/logo/location-pin.svg"
                                                alt="location"
                                            />
                                            {personalInfo.address.country}, {personalInfo.address.city}, {personalInfo.address.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                className='w-5 h-5'
                                                src="/images/logo/gmail.svg"
                                                alt="gmail"
                                            />
                                            {personalInfo.email}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <img
                                                className='w-5 h-5'
                                                src="/images/logo/instagram.svg"
                                                alt=""
                                            />
                                            {personalInfo.insta}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2">
                                    {/* <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 transition-colors border border-slate-200 text-sm font-semibold text-slate-700">
                                    <Settings size={18} />
                                    Settings
                                </button> */}
                                    <button className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-200 text-sm font-semibold text-white active:scale-95">
                                        Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-12 gap-6">

                        {/* Left Column: Stats & Skills Mapping */}
                        <div className="col-span-12 lg:col-span-5 space-y-6">

                            {/* Stats Summary */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                                        <Zap size={20} />
                                    </div>
                                    <p className="font-jetbrain text-2xl font-bold text-slate-900">12</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Active Sites</p>
                                </div>
                                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                                    <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3">
                                        <Briefcase size={20} />
                                    </div>
                                    <p className="font-jetbrain text-2xl font-bold text-slate-900">08+</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Years Exp.</p>
                                </div>
                            </div>

                            {/* All Skills Categories */}
                            <div className="space-y-4">
                                {skills.map((skillGroup, index) => (
                                    <div key={index} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                            {skillGroup.category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Project Activity */}
                        <div className="col-span-12 lg:col-span-7 space-y-6">
                            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                    <h3 className="font-bold text-lg flex items-center gap-2 text-slate-800">
                                        <Clock className="text-blue-500" size={20} />
                                        Project Timeline
                                    </h3>
                                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center">
                                        View Log <ChevronRight size={16} />
                                    </button>
                                </div>

                                <div className="divide-y divide-slate-100">
                                    {[
                                        { title: 'Structural Safety Audit Completed', time: '1 hour ago', meta: 'Green Valley Bridge', color: 'bg-emerald-500' },
                                        { title: 'New Blueprint Uploaded', time: '5 hours ago', meta: 'CAD-Central-Plaza-V4', color: 'bg-blue-500' },
                                        { title: 'Material Strength Report Issued', time: 'Yesterday', meta: 'Phase 2 Concrete Test', color: 'bg-amber-500' },
                                        { title: 'Site Inspection: Sector 7', time: '2 days ago', meta: 'Foundation Check', color: 'bg-slate-400' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="p-6 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-start gap-4">
                                                <div className={`mt-1.5 h-2 w-2 rounded-full ${item.color} shrink-0`} />
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-sm text-slate-400 mt-1">{item.meta}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-[11px] font-normal text-slate-400 uppercase">
                                                            <Calendar size={12} color='blue' />
                                                            {item.time}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <About />
            <Project />
        </>
    );
}