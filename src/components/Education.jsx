import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    location: 'Punjab, India',
    period: "Since Aug '23",
    grade: 'CGPA: 7.5',
    coursework: [
      'Data Structures & Algorithms',
      'OOPS',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    institution: 'Indian Institute of Technology, Madras',
    degree: 'Bachelor of Science - Data Science and Applications',
    location: 'Tamil Nadu, India',
    period: "Since Aug '23",
    grade: 'CGPA: 6.65',
    coursework: [
      'Data Science',
      'Machine Learning',
      'Statistics',
      'Programming',
    ],
  },
  {
    institution: 'DAV Public School',
    degree: 'Intermediate (12th)',
    location: 'Rajrappa Project, Jharkhand',
    period: "Apr '21 - Mar '22",
    grade: 'Percentage: 82.8%',
    coursework: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#0a0f1e]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">03 / Education</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Academic Journey
        </h2>

        <div className="grid gap-12">
          {educationData.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-outlined p-12 md:p-16 group relative"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity">
                <span className="text-6xl font-bold text-blue-500 leading-none">0{educationData.length - i}</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Meta Column */}
                <div className="md:w-1/4 space-y-4">
                  <div className="inline-block px-4 py-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 rounded-xl text-xs font-bold tracking-widest uppercase">
                    {edu.period}
                  </div>
                  <div className="text-[#94a3b8] text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500/60 rounded-full"></span>
                    {edu.location}
                  </div>
                  <div className="text-blue-300 font-mono text-sm bg-blue-500/10 inline-block px-3 py-1 rounded-lg">
                    {edu.grade}
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:w-3/4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-[#e2e8f0] mb-6 font-medium">{edu.institution}</p>
                  
                  {edu.coursework.length > 0 && (
                    <div className="pt-6 border-t border-blue-500/10">
                      <p className="text-[#475569] text-xs uppercase font-mono tracking-widest mb-4">Core Competencies</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, j) => (
                          <span key={j} className="text-[#94a3b8] text-xs bg-blue-500/5 border border-blue-500/10 px-4 py-2 rounded-xl group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
