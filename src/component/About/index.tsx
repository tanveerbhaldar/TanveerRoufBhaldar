import React from 'react';
import { 
  Trophy, 
  Target, 
  HardHat, 
  Map, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

export default function About() {
  return (
    <div className="font-poppins min-h-screen bg-[#F8FAFC] text-[#1E293B] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
            Professional Profile
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Side: The Narrative */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Engineering sustainable infrastructure with <span className="text-blue-600">precision</span> and structural integrity.
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 8 years of experience in the civil engineering landscape, I specialize 
              in bridging the gap between complex architectural visions and ground-level 
              execution. My approach combines advanced structural analysis with a deep 
              commitment to environmental sustainability and site safety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mission Focused</h4>
                  <p className="text-sm text-slate-500 mt-1">Delivering robust solutions for high-density urban developments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Quality Driven</h4>
                  <p className="text-sm text-slate-500 mt-1">Strict adherence to IS codes and international safety standards.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Technical DNA Bento Grid */}
          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Experience Card */}
              <div className="col-span-2 bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center gap-6 group hover:border-blue-200 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Trophy size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">08+</p>
                  <p className="text-sm font-medium text-slate-500">Years of Field Expertise</p>
                </div>
              </div>

              {/* Projects Card */}
              <div className="bg-slate-900 p-6 rounded-[2.5rem] text-white">
                <HardHat className="text-blue-400 mb-4" size={28} />
                <p className="text-2xl font-bold italic">50+</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Projects Completed</p>
              </div>

              {/* Location/Scope Card */}
              <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <Map className="text-emerald-500 mb-4" size={28} />
                <p className="text-2xl font-bold text-slate-900">Tier-1</p>
                <p className="text-xs text-slate-500 font-medium mt-1">City Developments</p>
              </div>

              {/* Collaboration Card */}
              <div className="col-span-2 bg-blue-600 p-6 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-80">Collaborated with</p>
                    <p className="text-xl font-bold">Top 10 Global Firms</p>
                  </div>
                  <Users size={40} className="opacity-20 group-hover:scale-125 transition-transform" />
                </div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]"></div>
              </div>

            </div>
          </div>

        </div>

        {/* Professional Philosophy Footer */}
        <div className="mt-16 p-8 bg-white rounded-3xl border border-slate-200 border-dashed flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-bold text-lg text-slate-900">The Structural Philosophy</h4>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              "Great engineering isn't just about how a building stands, but how it serves 
              the community and the environment for generations to come."
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors text-sm">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}