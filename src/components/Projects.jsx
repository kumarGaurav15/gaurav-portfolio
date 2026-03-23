import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'Customer Lifetime Value (CLV) Prediction',
    period: "Apr '25",
    github: 'https://github.com/kumarGaurav15/Customer-Lifetime-Value-Prediction',
    description: 'A machine learning–based Customer Lifetime Value (CLV) prediction model using historical transactions, demographics, and behavioral data to forecast long-term revenue.',
    highlights: [
      'Performed data cleaning, feature exploration, and correlation analysis using NumPy, Pandas, and Matplotlib to uncover key customer patterns and drivers of CLV',
      'Delivered actionable insights through visualizations on customer distribution, sales channels, and response trends, enabling targeted marketing and improved retention strategies',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
  },
  {
    title: 'Cricket Data Analysis',
    period: "May '25",
    github: 'https://github.com/kumarGaurav15/Cricket-Data-Analysis',
    description: 'An interactive Excel dashboard using pivot tables, charts, and conditional formatting to visualize key trends and simplify complex cricket data.',
    highlights: [
      'Performed data cleaning, trend analysis, forecasting, and metric calculations to uncover meaningful insights and highlight performance patterns',
      'Enhanced user understanding by designing clear visualizations and presenting insights effectively, strengthening analytical and storytelling skills',
    ],
    tech: ['Excel', 'Data Analysis', 'Pivot Tables', 'Data Visualization'],
  },
  {
    title: 'Bank Customer Churn Analysis Dashboard',
    period: "Aug '25",
    github: 'https://github.com/kumarGaurav15/Bank-churn-analytics-powerbi',
    description: 'Analyzed banking customer data (10,000+ records) using Power BI to identify churn drivers and support retention-focused business decisions.',
    highlights: [
      'Designed KPI-driven dashboards with drill-down analysis to segment high-risk customers by demographics and behavior',
      'Delivered actionable insights through interactive visuals and business-focused storytelling',
    ],
    tech: ['Power BI', 'Data Analysis', 'Dashboard Design', 'Business Intelligence'],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-title', { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      gsap.fromTo('.proj-card', { y: 70, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.2,
        scrollTrigger: { trigger: '.proj-grid', start: 'top 82%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-[#0a0f1e]">
      <div className="container-custom">
        <span className="section-label">05 / Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Selected <span className="text-blue-400/60">Projects</span>
        </h2>

        <div className="proj-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projectsData.map((proj, i) => (
            <div key={i} className="proj-card">
                <div className="card-spotlight h-full p-12 md:p-16 flex flex-col group">
                  <div className="flex justify-end items-start mb-12">
                    <div className="flex gap-4">
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/5 border border-blue-500/10 text-[#94a3b8] hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                        <FaGithub size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400/50 uppercase block mb-2">{proj.period}</span>
                    <h3 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-[#94a3b8] text-lg leading-relaxed mb-10">{proj.description}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {proj.tech.map((t, j) => (
                        <span key={j} className="text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-blue-500/10 border border-blue-500/15 text-blue-200 rounded-xl">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      {proj.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-4 text-sm text-[#94a3b8] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <p>{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
