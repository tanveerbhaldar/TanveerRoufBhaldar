import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ExternalLink,
    //   Github, 
    Layers,
    Calendar,
    CircleDot,
    ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../../constants';
import { DropdownOption } from '../../common/Dropdown/Dropdown.types';
import Dropdown from '../../common/Dropdown/Dropdown';

const typeOption: DropdownOption[] = [
    { label: "All", value: "All" },
    { label: "Residential", value: "Residential" },
    { label: "Infrastructure", value: "Infrastructure" },
    { label: "Urban Planning", value: "Urban Planning" },
    { label: "Transportation", value: "Transportation" },
    { label: "Industrial", value: "Industrial" },
    { label: "Energy", value: "Energy" },
    { label: "Commercial", value: "Commercial" },
    { label: "Environmental", value: "Environmental" },
    { label: "Hydraulic", value: "Hydraulic" },
    { label: "Institutional", value: "Institutional" }
];

export default function Project() {

    const [projectType, setType] = useState("Residential");

    const FilteredArray = projectType === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === projectType);

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] p-6 md:p-12 font-poppins">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-3">
                        <h2 className="text-indigo-600 font-bold tracking-[0.25em] uppercase text-xs">
                            Portfolio
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Featured <span className="text-slate-400">Projects</span>
                        </h1>
                        <div className="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
                    </div>
                    <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed font-medium">
                        Bridging complex architectural visions with ground-level execution through precision and structural integrity.
                    </p>
                </div>
                <div className="flex items-center justify-end pb-5">
                    <Dropdown
                        options={typeOption}
                        value={projectType}
                        onChange={(value) => setType(value as string)}
                        placeholder='search property type'
                        width={240}
                    />
                </div>
                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 md:gap-10">
                    {FilteredArray.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Float Badge */}
                                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-slate-100">
                                    <CircleDot size={12} className={project.status === 'Completed' ? 'text-emerald-500' : 'text-amber-500'} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{project.status}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white text-slate-400 transition-all duration-300">
                                        <ArrowUpRight size={22} />
                                    </div>
                                </div>

                                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-indigo-50/50 text-indigo-700 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-600 transition-colors">
                                            <Calendar size={16} />
                                            <span className="text-xs font-semibold">2026</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-600 transition-colors">
                                            <Layers size={16} />
                                            <span className="text-xs font-semibold">Tier-1</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                                            <ExternalLink size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                {/* <div className="mt-20 flex justify-center">
                    <button className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                        View All Projects
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div> */}
            </div>
        </div>
    );
}