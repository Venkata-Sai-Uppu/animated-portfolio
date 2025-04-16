import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Data arrays
const skillsData = [
  { skill: 'Python', value: 90 },
  { skill: 'JavaScript', value: 85 },
  { skill: 'SQL', value: 80 },
  { skill: 'React', value: 88 },
  { skill: 'Tableau', value: 92 },
  { skill: 'Power BI', value: 87 },
  { skill: 'Machine Learning', value: 85 }
];
const projectImpactData = [
  { name: 'Customer Satisfaction', value: 30 },
  { name: 'Prediction Accuracy', value: 25 },
  { name: 'ETL Efficiency', value: 45 }
];
const experienceImpact = [
  { name: 'ETL & Preprocessing', value: 30 },
  { name: 'Model Accuracy', value: 20 },
  { name: 'Visualization Impact', value: 25 },
  { name: 'Automation Efficiency', value: 35 }
];
const timelineData = [
  { year: 'Jun 2024 – Jan 2025', role: '🔥 Data Scientist – Navasal', desc: 'Engineered Spark ETL pipelines (+30% efficiency), deployed ML models in SageMaker, and cut prediction error by 20%.' },
  { year: 'Jan 2024 – Nov 2024', role: '🚀 Data Analyst – University of Cincinnati', desc: 'Built dynamic dashboards, defined KPIs to boost outcomes by 13%, and led data-driven strategy sessions.' },
  { year: 'Jun 2022 – Jul 2023', role: '💡 Data Analyst – L&T Mind Tree', desc: 'Analyzed 1M+ records, created 10+ high-impact dashboards, improving decision speed by 25%.' }
];
const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'];

// Navbar
function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">VSPortfolio</span>
        <div className="space-x-6 text-gray-300 hidden md:flex">
          {['About','Skills','Projects','Experience','Education','Contact'].map(sec => (
            <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-white uppercase tracking-wider text-sm">{sec}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero
function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-center px-6 pt-24">
      <motion.h1 initial={{ opacity: 0, scale:0.8 }} animate={{ opacity: 1, scale:1 }} transition={{ duration: 1 }} className="text-6xl font-extrabold text-white mb-4">
        Venkata Sai Uppu
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-gray-400 max-w-3xl">
        Data Analyst & Data Scientist with 3+ years driving insights, automating workflows, and crafting scalable ML solutions. Let’s build data-driven success! 🏆
      </motion.p>
      <div className="mt-8">
        <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold">Contact Me</a>
      </div>
    </section>
  );
}

// Skills
function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Skills Mastery</h2>
      <div className="max-w-xl mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={skillsData} outerRadius={120}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0,100]} />
            <Radar dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
            <Tooltip wrapperStyle={{ backgroundColor: '#1F2937', borderRadius: 4 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

// Projects
function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Project Showcase</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={projectImpactData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                {projectImpactData.map((entry, idx) => (
                  <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip wrapperStyle={{ backgroundColor: '#1F2937', borderRadius: 4 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
          <img src="/assets/dashboard.png" alt="Analytics Dashboard" className="rounded-lg shadow-lg object-cover w-full h-64" />
          <img src="/assets/visualization.png" alt="Data Visualization" className="rounded-lg shadow-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>
  );
}

// Experience
function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Journey</h2>
      <div className="max-w-2xl mx-auto mb-12">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={experienceImpact} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis />
            <Tooltip wrapperStyle={{ backgroundColor: '#1F2937', borderRadius: 4 }} />
            <Bar dataKey="value" fill="#F59E0B" barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="container mx-auto px-4 space-y-8">
        {timelineData.map((item, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
            <span className="text-sm text-gray-400">{item.year}</span>
            <p className="mt-3 text-gray-300 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Education
function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Academic Credentials</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">M.S. in Information Technology</h3>
          <p className="mt-2 text-gray-400">University of Cincinnati</p>
          <p className="mt-1 text-gray-300">Track: Cybersecurity, Data Analytics</p>
          <p className="mt-1 text-gray-300">GPA: 4.0</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white">B.S. in Computer Science</h3>
          <p className="mt-2 text-gray-400">VR Siddhartha, India</p>
          <p className="mt-1 text-gray-300">Concentration: Database Management & Data Security</p>
