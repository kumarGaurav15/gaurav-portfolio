import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: "May '25",
    category: 'Cloud',
    link: 'https://www.linkedin.com/posts/kumar-gaurav15_nptel-iitkharagpur-cloudcomputing-activity-7331644264898027520-Mik1/',
  },
  {
    name: 'Data Visualization',
    issuer: 'Infosys',
    date: "Jan '26",
    category: 'Data Visualization',
    link: 'https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01452056061924147216/29f4b772-eb9b-4ca0-979e-c066e9ec021f.pdf',
  },
  {
    name: 'Foundation in Programming and Data Science',
    issuer: 'IIT Madras',
    date: "Sep '25",
    category: 'Data Science',
    link: 'https://storage.googleapis.com/online-degree-app-production-documents/CERTIFICATE/FOUNDATION_CERTIFICATE/F2_2025/ac519c18de0b2f095d8b2ad60d22014951e2e4c28a8de7329f059db78d4fb073.pdf?Expires=1774250405&GoogleAccessId=production-document-storage-si%40online-degree-app.iam.gserviceaccount.com&Signature=XEIo%2B0aMpFiIITZCEE8pE%2BVic0vpe4s5nfq%2FhhwLdYODmlgVgjCRV2SpoVuC7ATSzQ0cvVAesfJev%2F3DvRwMhIX23uD6KeEjBRw8zEhVDQHEpImzX3MN75jIqEKkAKGR8y1qjn%2BK%2FLj4CaWnkIxnmbCUI4YODeIvtO%2B64nOv6HVGGhF%2FxbllTMLxcPQpKEz%2FfEr5RR0cM3686pWhGd7AFPLjZmJJoQEnYtu%2BXMj8gSbw9BJ2H7A4QkY1FArrUoIV4wTS4b1siKdtOJgEIfxcqHP42C%2FWp9R98GThwiRkPY%2BbgW34yoZpvCINbq8YlEASGKizu6tN82WHtW%2BqN5tfjg%3D%3D',
  },
  {
    name: 'Advance certificate in ML and Data Science',
    issuer: 'Internshala',
    date: "Oct '25",
    category: 'Analytics',
    link: 'https://drive.google.com/file/d/16Xn4z53huJrDnJZND0m4Xv5IXFpohieP/view',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-[#020617] border-t border-[#1e3a5f]/30">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">06 / Certifications</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Verified Credentials
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-8 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <span className="text-blue-400 text-lg font-bold">✓</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#475569] uppercase">{cert.date}</span>
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#475569] hover:text-blue-400 transition-colors cursor-pointer"
                      title="View Certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest text-blue-400/60 uppercase block mb-2">
                  {cert.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                  {cert.name}
                </h3>
              </div>

              <div className="mt-auto pt-6 border-t border-blue-500/10 flex items-center justify-between">
                <p className="text-[#94a3b8] text-sm font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
