import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

// Sample data
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
const areaData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 95 }
];
const timelineData = [
  { year: 'Jun 2024 – Jan 2025', role: '🔥 Data Scientist – Navasal', desc: 'Engineered end-to-end ETL pipelines in Spark (+30% efficiency), deployed scalable ML models in SageMaker, and slashed prediction error by 20% with Optuna.' },
  { year: 'Jan 2024 – Nov 2024', role: '🚀 Data Analyst – University of Cincinnati', desc: 'Architected interactive dashboards in Tableau & Python, defined KPIs to boost project outcomes by 13%, and drove data-driven strategies.' },
  { year: 'Jun 2022 – Jul 2023', role: '💡 Data Analyst – L&T Mind Tree', desc: 'Analyzed 1M+ records to fuel decision-making (+25% project efficiency) and delivered 10+ high-fidelity dashboards.' }
];
const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'];

// Components
function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-blur z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white">Venkata Sai Uppu Portfolio</span>
        <div className="space-x-6 text-gray-300">
          {['About','Skills','Projects','Experience','Education','Contact'].map(sec => (
            <a href={`#${sec.toLowerCase()}`} className="hover:text-white" key={sec}>{sec}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-center px-6">
      <motion.h1 initial={{ opacity: 0, scale:0.8 }} animate={{ opacity: 1, scale:1 }} transition={{ duration: 1 }} className="text-6xl font-extrabold text-white mb-4">
        Venkata Sai Uppu
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-gray-400 max-w-2xl">
        Data Analyst & Data Scientist with 3+ years driving insights, automating workflows, and crafting scalable ML solutions. Let’s build data-driven success! 🏆
      </motion.p>
      <div className="mt-8 flex space-x-4">
        <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold">Contact Me</a>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Skills Mastery</h2>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={skillsData} outerRadius={140}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
            <PolarRadiusAxis angle={30} domain={[0,100]} />
            <Radar name="Proficiency" dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
            <Legend verticalAlign="top" iconType="circle" />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Project Showcase</h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie data={projectImpactData} cx="50%" cy="50%" innerRadius={60} outerRadius={120} fill="#10B981" dataKey="value" label>
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
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Journey</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={experienceImpact} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#F59E0B" barSize={20} radius={[10,10,0,0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-16 space-y-10">
          {timelineData.map(({year, role, desc}, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg text-gray-200"
            >
              <h3 className="text-2xl font-semibold">{role}</h3>
              <span className="text-sm text-gray-400">{year}</span>
              <p className="mt-4 text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Academic Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-gray-200">
            <h3 className="text-2xl font-semibold">M.S. in Information Technology</h3>
            <p className="mt-2 text-gray-400">University of Cincinnati</p>
            <p className="mt-1">Track: Cybersecurity, Data Analytics</p>
            <p className="mt-1">GPA: 4.0</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-gray-200">
            <h3 className="text-2xl font-semibold">B.S. in Computer Science</h3>
            <p className="mt-2 text-gray-400">VR Siddhartha, India</p>
            <p className="mt-1">Concentration: Database Management & Data Security</p>
            <p className="mt-1">GPA: 3.4</p>
          </div>
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
        <h2 className="text-4xl font-bold text-white text-center mb-8">Let’s Connect</h2>
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
    <footer className="bg-gray-900 py-6 text-center text-gray-500">
      <p>© 2024 Venkata Sai Uppu | Cincinnati, OH | +1 (513) 410-8634</p>
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
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
