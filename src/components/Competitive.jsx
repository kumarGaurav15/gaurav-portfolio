import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';

const platforms = [
  { name: 'LeetCode', icon: <SiLeetcode />, stats: 'Active solver', link: 'https://leetcode.com/u/harshagrl/' },
  { name: 'HackerRank', icon: <SiHackerrank />, stats: '4-Star Java', link: 'https://www.hackerrank.com/profile/harshkr_agrl' },
  { name: 'GeeksforGeeks', icon: <SiGeeksforgeeks />, stats: 'Contributor', link: 'https://www.geeksforgeeks.org/profile/harshkhj06' },
  { name: 'CodeChef', icon: <SiCodechef />, stats: 'Participant', link: 'https://www.codechef.com/users/harshkragrl' },
];

export default function Competitive() {
  return (
    <section id="competitive" className="section-padding bg-[#0a0f1e] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">09 / Competitive</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Problem Solving <br/><span className="text-blue-500/60">&amp; Hackathons</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {platforms.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.4)" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated p-12 group relative overflow-hidden"
            >
              <div className="text-5xl text-blue-400 mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{p.name}</h3>
              <p className="text-[#94a3b8] font-mono text-xs uppercase tracking-[0.25em]">{p.stats}</p>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-50 group-hover:translate-x-1 transition-all">
                <ExternalLink size={20} className="text-blue-400/60" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-spotlight p-16 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3">
              <span className="text-blue-400/50 font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">Event Participation</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Coding Competitions</h3>
              <p className="text-[#94a3b8] leading-relaxed text-lg mb-8">
                Actively participate in hackathons and coding events, solving algorithmic challenges under time constraints and building prototype solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {['250+ Problems', 'Team Development', 'Algorithm Optimization'].map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-200 rounded-xl">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-blue-500/15 animate-ping"></div>
                <SiCodechef className="text-5xl text-blue-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
