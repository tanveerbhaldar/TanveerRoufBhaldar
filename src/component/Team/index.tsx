import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MoreHorizontal, 
  ShieldCheck, 
  UserPlus, 
  ExternalLink,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../../constants';

export default function Team() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-8 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Our Team</h1>
            <p className="text-slate-500 text-sm font-medium">Manage permissions and collaborate with your workforce.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <UserPlus size={20} />
            Invite Member
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Total Members', val: '24' },
            { label: 'Active Now', val: '18' },
            { label: 'Departments', val: '06' },
            { label: 'Open Roles', val: '03' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900 mt-1">{stat.val}</p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] border border-slate-200 p-6 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Actions */}
              <div className="flex justify-between items-start mb-6">
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  member.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {member.status}
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-[2rem] object-cover border-4 border-slate-50 group-hover:border-indigo-100 transition-colors" 
                  />
                  {member.status === 'Active' && (
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4">{member.name}</h3>
                <p className="text-indigo-600 text-sm font-semibold">{member.role}</p>
                <div className="flex items-center gap-1.5 mt-2 text-slate-400">
                  <ShieldCheck size={14} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">{member.department}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact Actions */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-50">
                <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all text-xs font-bold">
                  <Mail size={16} />
                  Email
                </button>
                <button className="flex items-center justify-center gap-2 py-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all text-xs font-bold">
                  <Phone size={16} />
                  Call
                </button>
              </div>

              {/* Social/External Links (Reveals on Hover) */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-indigo-600 p-4 flex justify-center gap-6">
                {/* <button className="text-white hover:scale-125 transition-transform"><Github size={18} /></button>
                <button className="text-white hover:scale-125 transition-transform"><Twitter size={18} /></button> */}
                <button className="text-white hover:scale-125 transition-transform"><ExternalLink size={18} /></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}