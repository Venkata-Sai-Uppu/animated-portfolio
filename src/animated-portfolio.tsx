// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';


const skillsData = [
  { subject: 'Python', A: 90 },
  { subject: 'JavaScript', A: 85 },
  { subject: 'SQL', A: 80 },
  { subject: 'React', A: 85 },
  { subject: 'Node.js', A: 75 },
  { subject: 'Tableau', A: 85 },
  { subject: 'Power BI', A: 80 },
  { subject: 'ML', A: 82 },
];

const projectImpactData = [
  { name: 'Customer Sat.', value: 30 },
  { name: 'Pred. Acc.',    value: 25 },
  { name: 'ETL Eff.',      value: 45 },
];

const experienceImpact = [
  { name: 'ETL & Prep',   value: 30 },
  { name: 'Model Acc.',   value: 15 },
  { name: 'Viz Impact',   value: 20 },
  { name: 'Automation',   value: 35 },
];

const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728'];

export default function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => void setMounted(true), []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* NAVBAR */}
      <Nav />

      {/* HERO */}
      <header className="pt-24 text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={mounted ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Venkata Sai Uppu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-gray-300"
        >
          Data Analyst & Scientist | MS Information Technology, UC • GPA 4.0
        </motion.p>
      </header>

      <main className="space-y-32 py-16">

        {/* SKILLS RADAR */}
        <section id="skills" className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills Snapshot</h2>
          <div className="w-full h-96">
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" stroke="#aaa" />
                <PolarRadiusAxis angle={30} domain={[0,100]} />
                <Radar name="Proficiency" dataKey="A" stroke="#ff7f0e" fill="#ff7f0e" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* PROJECTS WITH IMAGES + PIE */}
        <section id="projects" className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Key Projects</h2>
            <p className="text-gray-300">
              • Customer Segmentation Analysis: ↑30% satisfaction via K-Means & insights.  
              <br/>
              • Business Trade Analytics: Python + Matplotlib tools driving actionable financial insights.  
              <br/>
              • Heart Disease Prediction: RF + SVM tuned with GA/PSO, achieving 90% accuracy.
            </p>
            <div className="flex gap-4">
              <img src={DataImg1} alt="Customer Segmentation Visualization" className="w-1/2 rounded shadow-lg" />
              <img src={DataImg2} alt="Trade Analytics Chart" className="w-1/2 rounded shadow-lg" />
            </div>
          </div>
          <div className="w-full h-96 bg-gray-800 rounded-lg shadow-inner p-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Project Impact Breakdown</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={projectImpactData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#2ca02c"
                  dataKey="value"
                  label
                >
                  {projectImpactData.map((_, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* EXPERIENCE BAR */}
        <section id="experience" className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Experience Highlights</h2>
          <div className="bg-gray-800 rounded-lg p-8 mb-12 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Data Scientist – Navasal</h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                <li>ETL pipelines in Spark: +30% throughput & +15% accuracy</li>
                <li>Deployed ML models on SageMaker; reduced error 20%, sped inference 25%</li>
                <li>Hyperparameter tuning with Optuna for top-tier model performance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Analyst – University of Cincinnati</h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                <li>Designed interactive dashboards: 13% KPI improvement</li>
                <li>Led cross-functional teams to define & track key metrics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Analyst – L&T Mind Tree</h3>
              <ul className="mt-2 list-disc list-inside text-gray-300">
                <li>Analyzed 1M+ records, boosting efficiency 25%</li>
                <li>Built 10+ dashboards in Tableau to monitor critical KPIs</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <BarChart data={experienceImpact} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#d62728" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Academic Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold">M.S. Information Technology</h3>
              <p className="text-gray-400 mt-2">University of Cincinnati • Track: Cybersecurity, Data Analytics • GPA: 4.0</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold">B.S. Computer Science</h3>
              <p className="text-gray-400 mt-2">VR Siddhartha • Focus: Database Management & Security • GPA: 3.4</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch</h2>
          <form className="bg-gray-800 p-6 rounded-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </section>

      </main>

      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        © 2024 Venkata Sai Uppu • 
        <a href="mailto:venkatasaiuppu9@gmail.com" className="underline ml-2">venkatasaiuppu9@gmail.com</a> • 
        <a href="https://github.com/Venkata-Sai-Uppu" className="underline mx-2">GitHub</a>
        <a href="https://linkedin.com/in/venkata-sai-uppu" className="underline">LinkedIn</a>
      </footer>
    </div>
  );
}
