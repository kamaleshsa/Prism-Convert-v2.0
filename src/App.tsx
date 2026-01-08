import React from 'react';
import FileConverter from './components/FileConverter';
import { 
  Shield, Zap, Globe, Smartphone, Lock, CloudOff,
  FileText, Image, Music, Video, FileArchive, Wand2,
  // FileText, Image, Music, Video, FileArchive, Wand2
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const features = [
    { icon: Zap, title: "Instant Processing", desc: "Engineered for speed. Files converted in milliseconds." },
    { icon: Shield, title: "Zero Retention", desc: "Your data vanishes post-conversion. 100% private." },
    { icon: Globe, title: "Universal Support", desc: "From PDF to WebP—we handle every format you need." },
    { icon: Smartphone, title: "Any Device", desc: "Flawless experience on mobile, tablet, and desktop." },
    { icon: Lock, title: "Studio Quality", desc: "Lossless conversion algorithms preserve every detail." },
    { icon: CloudOff, title: "Browser Native", desc: "No downloads. No installs. Pure web power." }
  ];

  const supportedTypes = [
    { icon: FileText, title: "Documents", formats: "PDF, DOCX, TXT, PPTX" },
    { icon: Image, title: "Images", formats: "JPG, PNG, SVG, WebP" },
    { icon: Music, title: "Audio", formats: "MP3, WAV, AAC, OGG" },
    { icon: Video, title: "Video", formats: "MP4, AVI, MKV, MOV" },
    { icon: FileArchive, title: "Archives", formats: "ZIP, RAR, 7Z, TAR" },
    { icon: Wand2, title: "OCR", formats: "Image to Text" }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#030014] overflow-x-hidden text-white font-sans selection:bg-purple-500/30 selection:text-white">
       {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10">
        
        {/* HERO SECTION */}
        <section className="px-4 mx-auto w-full max-w-[95%] xl:max-w-screen-2xl text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6 backdrop-blur-sm">
                <span className="text-purple-300 font-semibold text-xs tracking-wider uppercase">
                  v2.0 Next Gen Engine
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transform Files <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                  Instantly
                </span>
              </h1>
              
              <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
                The world's fastest format shifter. Drag, drop, done.
              </p>
            </motion.div>
        </section>

        {/* CONVERTER SECTION */}
        <section id="converter" className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <FileConverter />
        </section>

        {/* FEATURES SECTION */}
        <section className="w-full py-16 relative bg-black/20 backdrop-blur-sm border-t border-white/5">
          <div className="w-full max-w-[95%] xl:max-w-screen-2xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-2">Engineered for Perfection</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                Premium aesthetics meet industrial-grade processing power.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-10 text-white">Supported Formats</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {supportedTypes.map((type, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="mb-3 p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors">
                      <type.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">{type.title}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{type.formats}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full border-t border-white/10 bg-black/40 py-12">
          <div className="w-full max-w-[95%] xl:max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-500 fill-purple-500" />
              <span className="text-lg font-bold text-white">Prism Convert v2.0</span>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Prism Inc.
            </p>
          </div>
        </footer>
        
      </div>
    </div>
  );
}

export default App;