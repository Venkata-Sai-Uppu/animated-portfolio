import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const skillsData = [
  { name: 'Python', value: 90 },
  { name: 'JavaScript', value: 85 },
  { name: 'SQL', value: 80 },
  { name: 'React', value: 85 },
  { name: 'Node.js', value: 75 },
  { name: 'Tableau', value: 85 },
  { name: 'Power BI', value: 80 },
  { name: 'Data Analysis', value: 90 },
  { name: 'Machine Learning', value: 82 },
];

const projectImpactData = [
  { name: 'Customer Satisfaction', value: 30 },
  { name: 'Prediction Accuracy', value: 25 },
  { name: 'ETL Efficiency', value: 45 },
];

const experienceImpact = [
  { name: 'ETL & Preprocessing', value: 30 },
  { name: 'Model Accuracy', value: 15 },
  { name: 'Visualization Impact', value: 20 },
  { name: 'Automation Efficiency', value: 35 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-600 text-white p-6">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold mb-2">
          Venkata Sai Uppu
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-xl">
          Data Analyst | Data Engineer | Information Technology Master's Graduate
        </motion.p>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I am a Data Analyst with 3+ years of experience leveraging Python, Tableau, and SQL to deliver impactful insights and streamline decision-making processes.
            With a Master’s in Information Technology (University of Cincinnati, GPA: 4.0) and a Bachelor’s in Computer Science (VR Siddhartha, GPA: 3.4),
            I specialize in data visualization, predictive modeling, and process automation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Project Impact</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={projectImpactData} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {projectImpactData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience Impact Visualization</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={experienceImpact}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc pl-5">
            <li>Career Essentials in Data Analysis by Microsoft</li>
            <li>Data Analyst Bootcamp by Alex</li>
            <li>Advanced Python – Coursera</li>
            <li>ISO Certified Data Science Certification</li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-6 mt-12 text-center">
        <p>© 2024 Venkata Sai Uppu. All rights reserved.</p>
        <div className="mt-2">
          <a href="mailto:venkatasaiuppu9@gmail.com" className="mr-4 underline">Email</a>
          <a href="https://www.linkedin.com/in/venkata-sai-uppu/" className="mr-4 underline">LinkedIn</a>
          <a href="https://github.com/Venkata-Sai-Uppu" className="underline">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
