import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] py-20 border-t border-[#1e3a5f]/20">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl font-black tracking-tighter text-white mb-3">
              GAURAV<span className="text-blue-500/60">.</span>
            </div>
            <p className="text-[#475569] text-sm font-mono uppercase tracking-[0.2em]">© 2026 Portfolio</p>
          </div>

          <div className="flex justify-center gap-12 font-mono text-xs font-bold uppercase tracking-[0.25em]">
            <a href="https://github.com/kumarGaurav15" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kumar-gaurav15" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="mailto:kgaurav15062004@gmail.com" className="text-[#94a3b8] hover:text-blue-400 transition-colors">Email</a>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              to="hero"
              smooth
              duration={1000}
              className="group flex flex-col items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#475569] hover:text-white transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-blue-500/15 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform text-blue-400" />
              </div>
              <span>Back to top</span>
            </Link>
          </div>
          
        </div>
        
        <div className="mt-20 pt-10 border-t border-[#1e3a5f]/10 text-center">
          <p className="text-[#1e3a5f] text-[10px] font-mono tracking-widest uppercase">
            Designed &amp; Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
