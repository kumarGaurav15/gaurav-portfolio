import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:kgaurav15062004@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AReply to: ${formData.email}`;
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0f1e] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          <div className="lg:sticky lg:top-32">
            <span className="section-label">09 / Connect</span>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-10 leading-[0.95]">
              Let's build <br/>
              <span className="text-blue-400">something</span> <br/>
              vibrant.
            </h2>
            
            <p className="text-[#94a3b8] text-xl mb-12 max-w-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas or data science challenges.
            </p>

            <div className="space-y-8">
              <a href="mailto:kgaurav15062004@gmail.com" className="flex items-center gap-5 text-2xl font-bold text-white hover:text-blue-400 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/5 border border-blue-500/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/15 group-hover:border-blue-500/40 transition-all">
                  <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-400" size={24} />
                </div>
                <span>kgaurav15062004@gmail.com</span>
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-frosted p-16 md:p-20"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-sm font-bold tracking-widest uppercase text-[#475569] ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-blue-500/5 border border-blue-500/15 rounded-lg px-20 py-10 text-lg text-white placeholder:text-[#1e3a5f] focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/8 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold tracking-widest uppercase text-[#475569] ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-blue-500/5 border border-blue-500/15 rounded-lg px-20 py-10 text-lg text-white placeholder:text-[#1e3a5f] focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/8 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold tracking-widest uppercase text-[#475569] ml-1">Your Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-blue-500/5 border border-blue-500/15 rounded-lg px-20 py-12 text-lg text-white placeholder:text-[#1e3a5f] focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/8 focus:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button type="submit" className="w-full py-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-2xl transition-all shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] flex items-center justify-center gap-3 group text-lg uppercase tracking-widest">
                Send Message
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
