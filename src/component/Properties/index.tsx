import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Maximize2,
  BedDouble,
  Bath,
  Search,
  SlidersHorizontal,
  MoreVertical,
  ArrowUpRight,
  Home
} from 'lucide-react';
import { PROPERTIES } from '../../constants';


export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-poppins">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Property Inventory</h1>
            <p className="text-slate-500 text-sm">Manage and track your real estate assets</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Home size={18} />
            Add Property
          </button>
        </div>

        {/* Filter Bar */}
        <div className="max-w-200 flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              placeholder="Search by name or location..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-semibold text-slate-600 hover:bg-slate-50 transition-all">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${property.status === 'Available' ? 'bg-emerald-500/90 text-white' :
                      property.status === 'Leased' ? 'bg-slate-800/90 text-white' : 'bg-amber-500/90 text-white'
                    }`}>
                    {property.status}
                  </span>
                </div>
                {/* <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl text-slate-600 hover:text-indigo-600 transition-colors">
                  <MoreVertical size={18} />
                </button> */}
              </div>

              {/* Details Area */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-400 mt-1">
                      <MapPin size={14} />
                      <span className="text-xs font-medium">{property.location}</span>
                    </div>
                  </div>
                  <p className="text-lg font-black text-indigo-600">{property.price}</p>
                </div>

                <div className="flex items-center justify-between py-4 border-y border-slate-50 my-4">
                  <div className="flex items-center gap-2">
                    <Maximize2 size={16} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">{property.size}</span>
                  </div>
                  {property.beds > 0 && (
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-slate-400" />
                      <span className="text-xs font-bold text-slate-600">{property.beds} Bed</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Bath size={16} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-600">{property.baths} Bath</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {property.type}
                  </span>
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors group/btn">
                    Details
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}