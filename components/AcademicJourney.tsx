"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function AcademicJourney() {
  const stages = [
    {
      id: "01",
      title: "Class 10 Foundation",
      desc: "Early profile building and comprehensive academic roadmap planning.",
    },
    {
      id: "02",
      title: "Class 11–12 Prep",
      desc: "Standardized testing, extracurriculars, and university shortlisting.",
    },
    {
      id: "03",
      title: "Bachelor's Abroad",
      desc: "Application execution, personal essays, and admission strategy.",
    },
    {
      id: "04",
      title: "IELTS / GRE Prep",
      desc: "Targeted coaching to achieve required test scores for top universities.",
    },
    {
      id: "05",
      title: "Master's Abroad",
      desc: "Specialized positioning and statement of purpose for advanced degrees.",
    },
    {
      id: "06",
      title: "Research & Pubs",
      desc: "End-to-end guidance for publishing in international journals.",
    },
    {
      id: "07",
      title: "Fully Funded PhD",
      desc: "Research proposal refinement and professor outreach strategy.",
    },
    {
      id: "08",
      title: "Global Career",
      desc: "Post-study work strategies, networking, and professional growth.",
    },
  ];





  return (
    <section className="py-24 bg-white w-full overflow-hidden relative" id="journey">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-start mb-4"
          >
            <SectionLabel>Journey</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] tracking-tight max-w-3xl"
          >
            Know What To Do At Every Stage Of Your Study Abroad Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-neutral-700 leading-relaxed max-w-xl mt-6"
          >
            Navigate every stage of your academic growth with our comprehensive mentorship roadmap, designed for long-term success.
          </motion.p>
        </div>

        {/* Desktop Single Line Alternating Layout */}
        <div className="hidden lg:block max-w-[1200px] mx-auto relative py-20">
          
          {/* Continuous Straight Line */}
          <div className="absolute top-1/2 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] h-[2px] bg-neutral-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-8 gap-0">
            {stages.map((stage, i) => {
              const isTop = i % 2 === 0;
              return (
                <div key={stage.id} className="relative flex justify-center h-[360px] group">
                  
                  {/* Progress Line (Hover effect connecting to next point) */}
                  {i < stages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-[2px] bg-blue-500 -translate-y-1/2 z-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  )}

                  {/* Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full border-[3px] border-neutral-300 bg-white shadow-sm transition-all duration-300 z-20 group-hover:scale-125 group-hover:border-blue-500 group-hover:bg-white group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
                  
                  {/* Vertical Connector */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[30px] bg-neutral-200 transition-colors duration-300 group-hover:bg-blue-500/40 ${isTop ? 'bottom-1/2' : 'top-1/2'}`} />
                  
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: isTop ? 15 : -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`absolute left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-2xl p-5 border border-neutral-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 z-10 group-hover:border-blue-500/30 group-hover:shadow-[0_8px_30px_-6px_rgba(59,130,246,0.12)] ${
                      isTop ? 'bottom-[calc(50%+30px)]' : 'top-[calc(50%+30px)]'
                    }`}
                  >
                    <div className="flex flex-col gap-2 items-center text-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 group-hover:text-blue-500">
                        Phase {stage.id}
                      </span>
                      <h3 className="text-[14px] font-semibold text-neutral-900 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden w-full overflow-hidden pt-8 pl-4">
          <div className="relative flex flex-col gap-8 max-w-sm mx-auto">
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative w-full group pl-10">
                {/* Mobile Dot */}
                <div className="absolute left-[11px] top-[30px] w-[10px] h-[10px] rounded-full bg-neutral-200 group-hover:bg-blue-500 z-10 transition-colors" />

                {/* Mobile Line Segment (hide on last item) */}
                {i < stages.length - 1 && (
                  <div className="absolute left-[15px] top-[36px] bottom-[-40px] w-px border-l-2 border-dashed border-neutral-300 z-0" />
                )}

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 w-full bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                      Phase {stage.id}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
