
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const skillsData = [
  { name: 'Python', value: 90 },
  { name: 'JavaScript', value: 85 },
  { name: 'SQL', value: 80 },
  { name: 'React', value: 75 },
  { name: 'Node.js', value: 70 },
  { name: 'Tableau', value: 85 },
  { name: 'Power BI', value: 80 },
  { name: 'Data Analysis', value: 88 },
  { name: 'Machine Learning', value: 75 },
];

const projectImpactData = [
  { name: 'Customer Satisfaction', value: 30 },
  { name: 'Product Awareness', value: 15 },
  { name: 'Data Processing Efficiency', value: 50 },
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
          Data Analyst | Software Developer | Computer Engineering Graduate
        </motion.p>
      </header>

      <main className="container mx-auto p-6">
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
      </main>

      <footer className="bg-blue-600 text-white p-6 mt-12">
        <p>© 2024 Venkata Sai Uppu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
