import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Monitor, 
  Server, 
  Database, 
  CloudCog, 
  Wrench,
  Code2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
 
  const skillsData = PORTFOLIO_DATA?.skills || [];
  const [activeCategory, setActiveCategory] = useState<string>('All');

  
  const categories = [
    'All', 
    'Frontend', 
    'Backend', 
    'Database', 
    'DevOps & Tools'
  ];

  
  const getCategoryIcon = (category: string = '') => {
    const cat = category.toLowerCase();
    if (cat.includes('frontend')) return <Monitor className="w-4 h-4 text-[#60A5FA]" />;
    if (cat.includes('backend')) return <Server className="w-4 h-4 text-[#4ADE80]" />;
    if (cat.includes('database')) return <Database className="w-4 h-4 text-[#A78BFA]" />;
    if (cat.includes('devops') || cat.includes('tool')) return <CloudCog className="w-4 h-4 text-[#FB923C]" />;
    if (cat.includes('quality') || cat.includes('performance')) return <Code2 className="w-4 h-4 text-[#60A5FA]" />;
    return <Wrench className="w-4 h-4 text-[#D9FF3D]" />;
  };

  // 4. Warna Progress Bar (Anti Error)
  const getProgressColor = (category: string = '') => {
    const cat = category.toLowerCase();
    if (cat.includes('frontend')) return 'bg-[#60A5FA]';
    if (cat.includes('backend')) return 'bg-[#4ADE80]';
    if (cat.includes('database')) return 'bg-[#A78BFA]';
    if (cat.includes('devops') || cat.includes('tool')) return 'bg-[#FB923C]';
    return 'bg-[#D9FF3D]';
  };

  // 5. Filter Data yang Aman
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter((s) => s?.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0E0E10] border-y border-[#232326] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-[#232326] pb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#D9FF3D] mb-2 flex items-center gap-2">
              <span>// SKILL FULLSTACK SAYA </span>
              <span className="text-[#3F3F46]">·</span>
              <span className="text-[#A1A1AA]">VERIFIED SKILLS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight">
             KEAHLIHAN SAYA 
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-body">
          Menguasai beberapa  bahasa pemograman dan beberapa mengusai cara mengelola sebuah database dan menggunakan tools devops juga
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer border flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-[#D9FF3D] text-[#0A0A0B] border-[#D9FF3D] font-bold shadow-[0_0_15px_rgba(217,255,61,0.2)]'
                  : 'bg-[#121214] text-[#A1A1AA] border-[#232326] hover:text-[#F4F4F5] hover:border-[#3F3F46]'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              {cat === 'All' ? 'Semua Keahlian' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            // 6. Ekstrak data dengan nilai default agar tidak error (Anti Undefined)
            const skillName = skill?.name || 'Keahlian Tanpa Nama';
            const skillCategory = skill?.category || 'Umum';
            const skillProficiency = skill?.proficiency || 0; // Default 0% jika kosong
            const skillProof = skill?.proof || 'Belum ada bukti implementasi yang ditambahkan.';

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#121214] border border-[#232326] hover:border-[#3F3F46] transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl"
              >
                <div>
                  {/* Header: Category Icon & Score */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#18181B] border border-[#232326]">
                      {getCategoryIcon(skillCategory)}
                      <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                        {skillCategory}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-bold text-[#F4F4F5]">
                      {skillProficiency}%
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-display font-bold text-lg text-[#F4F4F5] mb-3 group-hover:text-[#D9FF3D] transition-colors">
                    {skillName}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-[#18181B] rounded-full overflow-hidden mb-5">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skillCategory)}`}
                      style={{ width: `${skillProficiency}%` }}
                    />
                  </div>
                </div>

                {/* Concrete Proof Box */}
                <div className="p-3 rounded-xl bg-[#0A0A0B] border border-[#232326] text-xs font-mono group-hover:border-[#3F3F46] transition-colors">
                  <div className="text-[9px] text-[#71717A] uppercase mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" />
                    Bukti Implementasi:
                  </div>
                  <div className="text-[#E4E4E7] text-[11px] leading-relaxed line-clamp-2">
                    {skillProof}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-[#71717A] font-mono text-sm border border-dashed border-[#232326] rounded-2xl">
            Belum ada data keahlian untuk kategori ini.
          </div>
        )}

      </div>
    </section>
  );
};