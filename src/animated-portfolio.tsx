import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar,
  PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
// Data
const skillsData = [
  { skill: 'Python', value: 90 },
  { skill: 'JavaScript', value: 85 },
  { skill: 'SQL', value: 80 },
  { skill: 'React', value: 85 },
  { skill: 'Tableau', value: 85 },
  { skill: 'Power BI', value: 80 },
  { skill: 'Machine Learning', value: 82 }
];
const projectImpactData = [
  { name: 'Customer Satisfaction', value: 30 },
  { name: 'Prediction Accuracy', value: 25 },
  { name: 'ETL Efficiency', value: 45 }
];
const experienceImpact = [
  { name: 'ETL & Preprocessing', value: 30 },
  { name: 'Model Accuracy', value: 15 },
  { name: 'Visualization Impact', value: 20 },
  { name: 'Automation Efficiency', value: 35 }
];
const timelineData = [
  { year: '2024–2025', role: 'Data Scientist – Navasal', desc: 'Built ETL pipelines, deployed ML models, optimized hyperparameters with Optuna.' },
  { year: '2024', role: 'Data Analyst – University of Cincinnati', desc: 'Developed dashboards, defined KPIs, improved outcomes by 13%.' },
  { year: '2022–2023', role: 'Data Analyst – L&T Mind Tree', desc: 'Analyzed 1M+ records, built 10+ dashboards, improved efficiency by 25%.' }
];
const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'];

// Components
function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 bg-opacity-75 backdrop-blur z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">VSU Portfolio</span>
        <div className="space-x-6 text-gray-200">
          {['About','Skills','Projects','Experience','Contact'].map(sec => (
            <a href={`#${sec.toLowerCase()}`} className="hover:text-white" key={sec}>{sec}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl text-white font-extrabold mb-4">Venkata Sai Uppu</h1>
        <p className="text-xl text-gray-300">Data Analyst & Data Scientist</p>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          3+ years of driving data-driven decisions with Python, SQL, and BI tools. Streamlining processes, deriving insights, and building scalable ML solutions.
        </p>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-8">Skills Analysis</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={skillsData} outerRadius={120}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" stroke="#94A3B8" />
            <PolarRadiusAxis angle={30} domain={[0,100]} />
            <Radar dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.7} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Project Impact</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={projectImpactData} cx="50%" cy="50%" outerRadius={100} fill="#10B981" dataKey="value" label>
              {projectImpactData.map((entry, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Experience Impact</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={experienceImpact} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#94A3B8" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-16 space-y-8">
          {timelineData.map(({year, role, desc}) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-lg text-gray-200"
            >
              <h3 className="text-2xl font-semibold">{role}</h3>
              <span className="text-sm text-gray-400">{year}</span>
              <p className="mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl text-white font-bold text-center mb-8">Get in Touch</h2>
        <form className="space-y-6">
          {['name','email','message'].map(field => (
            <div key={field}>
              <label htmlFor={field} className="block text-gray-300 mb-2 capitalize">{field}</label>
              {field === 'message' ? (
                <textarea id={field} rows={4}
                  onChange={e => setForm({...form, [field]: e.target.value})}
                  className="w-full p-3 rounded bg-gray-700 text-gray-200" />
              ) : (
                <input id={field} type={field==='email'?'email':'text'}
                  onChange={e => setForm({...form, [field]: e.target.value})}
                  className="w-full p-3 rounded bg-gray-700 text-gray-200" />
              )}
            </div>
          ))}
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-center text-gray-400">
      <p>© 2024 Venkata Sai Uppu</p>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
