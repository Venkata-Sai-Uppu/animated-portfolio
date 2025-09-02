import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';

// Corrected data based on the resume
const skillsData = [
  { skill: 'Python', value: 95 }, // Python is used for ML, API dev, etc.
  { skill: 'SQL', value: 90 }, // Found in multiple roles
  { skill: 'Azure Ecosystem', value: 85 }, // Mentioned throughout the resume
  { skill: 'GIS & ArcPy', value: 80 }, // Specific focus area
  { skill: 'Machine Learning', value: 90 }, // Core to all Data Scientist roles
  { skill: 'Data Visualization', value: 85 }, // Power BI, Tableau, etc.
  { skill: 'API Development', value: 88 } // Flask, FastAPI, RESTful APIs
];

const projectImpactData = [
  { name: 'NLP & ML Model Accuracy', value: 25 },
  { name: 'ETL/Workflow Efficiency', value: 40 },
  { name: 'Cost/Revenue Impact', value: 10 }
];

const experienceImpact = [
  { name: 'Customer Lifetime Value Prediction', value: 90 },
  { name: 'NLP & Sentiment Analysis', value: 85 },
  { name: 'Fraud Detection Models', value: 80 },
  { name: 'Customer Segmentation & Risk Analysis', value: 75 }
];

const timelineData = [
  { 
    year: 'Jan 2025 – Present', 
    role: '🔥 Data Scientist | Western & Southern Financial Group', 
    desc: 'Designed and deployed customer lifetime value prediction models using XGBoost and random forests, operationalizing them via FastAPI. Maintained ETL pipelines with Python, SQL, and Azure Databricks, improving data refresh efficiency by 40%.',
    tags: ['Python', 'Azure', 'FastAPI', 'XGBoost', 'Power BI']
  },
  { 
    year: 'Apr 2024 – Dec 2024', 
    role: '🚀 Data Scientist | Sodexo', 
    desc: 'Created an NLP pipeline for sentiment analysis using Transformer models, improving classification accuracy by 25%. Automated operational reporting pipelines and developed Tableau dashboards to track KPIs, contributing to a 10% cost reduction.',
    tags: ['NLP', 'Transformers', 'Python', 'SQL', 'Tableau']
  },
  { 
    year: 'Oct 2022 – Jul 2023', 
    role: '💡 Data Scientist | ICICI Prudential Life Insurance', 
    desc: 'Built classification models for policy decisions, applied Bayesian logic for fraud detection, and fine-tuned language models to detect fraud indicators in text claims using PyTorch.',
    tags: ['PyTorch', 'Bayesian Logic', 'Machine Learning', 'NLP']
  },
  {
    year: 'Apr 2021 – Sep 2022',
    role: '📈 Data Analyst | American Express',
    desc: 'Built an OpenAI GPT-powered tool for summarizing customer feedback. Managed SQL and Hive queries and developed Python scripts for customer segmentation and risk analysis models. Supported spatial data analysis for marketing strategies.',
    tags: ['OpenAI GPT', 'Python', 'SQL', 'GIS']
  }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#3B82F6'];

// Components
function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950 bg-opacity-80 backdrop-blur z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">Venkata Sai Uppu</a>
        <div className="hidden md:flex space-x-6 text-gray-400 font-medium">
          {['About', 'Skills', 'Experience', 'Education', 'Projects'].map(sec => (
            <a href={`#${sec.toLowerCase()}`} className="hover:text-white transition-colors" key={sec}>{sec}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-center px-6 pt-20">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
        Venkata Sai Uppu
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
        Data Scientist & Data Engineer with **4+ years** of experience designing scalable data pipelines, automating ETL workflows, and delivering actionable business insights.
      </motion.p>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex space-x-4">
        <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-transform transform hover:scale-105">Get in Touch</a>
        <a href="Venkata-Sai-Data Scientist-1.docx" download className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-700 transition-colors">Download Resume</a>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
            <ul className="space-y-2 text-lg text-gray-300 list-disc list-inside">
              <li>**Data Engineering & ETL:** SQL, Azure Data Factory, Databricks, Apache Spark, Snowflake</li>
              <li>**Programming:** Python (pandas, numpy, Flask/FastAPI), R, SQL scripting</li>
              <li>**Cloud Platforms:** Microsoft Azure (Data Lake, Synapse Analytics, DevOps)</li>
              <li>**GIS & Geospatial:** ESRI ArcGIS Pro, ArcPy, ArcGIS API for Python</li>
              <li>**ML & Statistics:** A/B Testing, Causal Inference, Regression Analysis, Experimental Design</li>
              <li>**Visualization:** Power BI, Tableau, ArcGIS Dashboards</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={skillsData} outerRadius={140}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="skill" stroke="#9CA3AF" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Proficiency" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Professional Journey</h2>
        <div className="relative mt-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 hidden md:block"></div>
          {timelineData.map(({ year, role, desc, tags }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 mb-8 md:w-5/12 ${idx % 2 === 0 ? 'md:left-0' : 'md:left-auto md:ml-auto'}`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 hidden md:block top-1/2 -mt-2.5"></div>
              <h3 className="text-2xl font-semibold text-white">{role}</h3>
              <span className="text-sm text-gray-400">{year}</span>
              <p className="mt-4 text-gray-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Academic Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.5 }} className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">Master’s in Information Technology</h3>
            <p className="mt-2 text-gray-400">University of Cincinnati, USA</p>
            <p className="mt-1 text-gray-500">Aug 2023 - May 2025</p>
            <p className="mt-4 text-gray-300">**Project: LLM-Powered Legal Document QA System**</p>
            <ul className="mt-2 text-gray-400 list-disc list-inside">
              <li>Built a GenAI chatbot using Llama-2 and LangChain.</li>
              <li>Utilized FAISS for document vector indexing and retrieval.</li>
              <li>Deployed via FastAPI on Azure VM with Docker.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true, amount: 0.5 }} className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">Bachelor's Degree</h3>
            <p className="mt-2 text-gray-400">Bangalore, India</p>
            <p className="mt-1 text-gray-500">Oct 2022 - Jul 2023</p>
            <p className="mt-4 text-gray-300">*(Note: The resume only provides data for the master's degree. This is a placeholder section to make the layout consistent.)*</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Project Impact</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.5 }}>
            <h3 className="text-2xl font-bold text-white mb-4">Key Achievements at a Glance</h3>
            <p className="text-lg text-gray-300 mb-4">
              The visualizations below highlight the tangible impact of my work, from improving data processing efficiency to enhancing model accuracy.
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={projectImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#10B981" barSize={40} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.5 }}>
            <h3 className="text-2xl font-bold text-white mb-4">Project Focus Areas</h3>
            <p className="text-lg text-gray-300 mb-4">
              My experience spans a wide range of data-centric projects, from predictive analytics to natural language processing.
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie data={experienceImpact} cx="50%" cy="50%" innerRadius={60} outerRadius={120} dataKey="value" label>
                  {experienceImpact.map((entry, idx) => (
                    <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" iconType="square" />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${form.name}! I'll be in touch.`);
    // Here you would add a real API call to send the form data
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Let’s Connect</h2>
        <p className="text-center text-lg text-gray-400 mb-8">Feel free to reach out via the form below or connect with me directly.</p>
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input type="text" id="name" value={form.name} onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input type="email" id="email" value={form.email} onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea id="message" rows={4} value={form.message} onChange={handleChange} required className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-semibold transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 py-6 text-center text-gray-500 border-t border-gray-800">
      <p>© 2024 Venkata Sai Uppu | venkatasaiuppu9@gmail.com | 513-410-8634</p>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
