import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Camera, 
  Users, 
  Gauge, 
  Wrench, 
  Layout, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Github, 
  Trophy, 
  MapPin, 
  Heart,
  Sparkles,
  Zap,
  Flame,
  Star
} from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan via-neon-magenta to-neon-purple rounded-xl flex items-center justify-center rotate-6 shadow-2xl shadow-neon-cyan/20">
              <span className="text-white font-black italic text-2xl">N</span>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-3xl font-black italic tracking-tighter text-white font-display">NLS</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-neon-cyan uppercase">Newlands Stance</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Kasi Culture', 'Gallery', 'Events'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 hover:text-neon-cyan transition-all hover:tracking-[0.3em]"
              >
                {item}
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-white px-8 py-3 rounded-full font-black italic uppercase tracking-widest text-sm shadow-lg"
            >
              Join The Crew
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-900 border-b border-white/10 px-6 py-10 space-y-8"
        >
          {['Kasi Culture', 'Gallery', 'Events'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="block text-3xl font-black italic uppercase tracking-widest text-white hover:text-neon-cyan"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-white py-5 font-black italic uppercase tracking-widest rounded-2xl text-xl">
            Join The Crew
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2070" 
          alt="Clean Stanced VW" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
      </motion.div>

      {/* Animated Mesh Background */}
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] text-neon-cyan/20 hidden lg:block"
      >
        <Zap size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[10%] text-neon-magenta/20 hidden lg:block"
      >
        <Flame size={100} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full">
                <span className="text-[10px] font-black tracking-[0.4em] text-neon-cyan uppercase">
                  Est. 2020 • Newlands
                </span>
              </div>
              <Sparkles className="text-neon-magenta w-5 h-5 animate-pulse" />
            </div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black italic tracking-tighter text-white mb-10 leading-[0.8] font-display">
              NEXT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple text-glow">LEVEL.</span>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end gap-12">
              <p className="text-xl md:text-2xl text-slate-300 max-w-xl font-medium leading-relaxed border-l-4 border-neon-magenta pl-8 py-2">
                Representing the heart of Newlands. Where township pride meets automotive perfection. We don't just drive low, we live low.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-neon-cyan to-neon-magenta text-white px-12 py-6 text-xl font-black italic uppercase tracking-widest rounded-full group shadow-2xl shadow-neon-cyan/30"
                >
                  <span className="flex items-center gap-4">
                    The Rides
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="w-full sm:w-auto glass text-white px-12 py-6 text-xl font-black italic uppercase tracking-widest rounded-full"
                >
                  Submit Build
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical text */}
      <div className="absolute left-10 bottom-20 hidden xl:block">
        <span className="text-xs font-black text-white/20 uppercase tracking-[1em] [writing-mode:vertical-lr] rotate-180">
          KASI STANCE CULTURE
        </span>
      </div>
    </section>
  );
};

const KasiCulture = () => {
  return (
    <section id="kasi-culture" className="py-40 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan/50 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1566274360936-692e03167b9b?auto=format&fit=crop&q=80&w=1000" 
                alt="Township Car Culture" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon-cyan/30 rounded-full blur-[80px] -z-0 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-neon-magenta/30 rounded-full blur-[100px] -z-0 animate-pulse delay-1000" />
            
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full border-dashed hidden lg:block"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl lg:text-8xl font-black italic text-white mb-10 uppercase tracking-tighter leading-none font-display">
                BORN IN THE <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta text-glow">TOWNSHIP.</span>
              </h2>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed mb-12">
                NLS (Newlands Stance) is more than just a car club. It's a movement born from the streets of Newlands. We celebrate the "Kasi" lifestyle—where creativity knows no bounds and every ride tells a story of hustle and passion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Cleanest Builds", icon: <Star className="text-neon-cyan" /> },
                  { label: "Community First", icon: <Users className="text-neon-magenta" /> },
                  { label: "Kasi Pride", icon: <Heart className="text-neon-purple" /> },
                  { label: "Static Art", icon: <Zap className="text-neon-cyan" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 p-4 glass rounded-2xl group cursor-default"
                  >
                    <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      {item.icon}
                    </div>
                    <span className="text-white font-black italic uppercase tracking-widest text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Fitment King",
      description: "We help you dial in that perfect arch-to-lip fitment. Static or Air, we know the vibes.",
      icon: <Wrench className="w-10 h-10 text-neon-cyan" />,
      size: "lg"
    },
    {
      title: "Street Meets",
      description: "From Newlands to the world. Join our legendary street meets and park-offs.",
      icon: <Users className="w-10 h-10 text-neon-magenta" />,
      size: "sm"
    },
    {
      title: "Media Crew",
      description: "Professional rolling shots and features for the cleanest rides in the scene.",
      icon: <Camera className="w-10 h-10 text-neon-purple" />,
      size: "sm"
    },
    {
      title: "Kasi Pride",
      description: "Representing Newlands with every turn of the wheel. Keeping the culture alive.",
      icon: <Trophy className="w-10 h-10 text-neon-cyan" />,
      size: "lg"
    },
  ];

  return (
    <section id="gallery" className="py-40 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <h2 className="text-6xl lg:text-8xl font-black italic text-white mb-4 uppercase tracking-tighter font-display">THE NLS STANDARD.</h2>
            <div className="w-40 h-3 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full" />
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">Quality over everything.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glass p-12 rounded-[3rem] hover:border-neon-cyan/50 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between ${feature.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {feature.icon}
              </div>
              
              <div>
                <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-4xl font-black italic text-white mb-6 uppercase group-hover:text-neon-cyan transition-colors font-display">{feature.title}</h3>
                <p className="text-xl text-slate-400 font-medium leading-relaxed group-hover:text-white/90 transition-colors max-w-md">{feature.description}</p>
              </div>

              <div className="mt-12 flex items-center gap-4 text-neon-cyan font-black italic uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                Learn More <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 p-16 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-16 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-mesh opacity-20 group-hover:opacity-40 transition-opacity" />
          
          <div className="text-center lg:text-left relative z-10">
            <h2 className="text-6xl lg:text-9xl font-black italic text-white mb-8 uppercase tracking-tighter leading-none font-display">
              JOIN THE <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple text-glow">MOVEMENT.</span>
            </h2>
            <p className="text-slate-400 text-2xl font-bold max-w-2xl leading-relaxed">
              Think your ride has what it takes? Submit your build and join the Newlands Stance family.
            </p>
          </div>
          
          <div className="relative z-10 w-full lg:w-auto">
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 243, 255, 0.5)" }}
              whileTap={{ scale: 0.9 }}
              className="w-full lg:w-auto bg-gradient-to-r from-neon-cyan to-neon-magenta text-white px-16 py-8 text-2xl font-black italic uppercase tracking-widest shadow-2xl rounded-full"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-neon-cyan via-neon-magenta to-neon-purple rounded-2xl flex items-center justify-center rotate-6 shadow-2xl">
                <span className="text-white font-black italic text-3xl">N</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-4xl font-black italic tracking-tighter text-white font-display">NLS</span>
                <span className="text-[12px] font-bold tracking-[0.4em] text-neon-cyan uppercase">Newlands Stance</span>
              </div>
            </div>
            <p className="text-slate-500 text-xl font-medium max-w-md leading-relaxed mb-12">
              The premier destination for the Kasi stance community. Dedicated to the low, the wide, and the township pride of Newlands.
            </p>
            <div className="flex items-center gap-8">
              <a href="https://www.instagram.com/nls_kasi_stance_rides" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-cyan transition-all flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em]">@nls_kasi_stance_rides</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black italic uppercase tracking-[0.3em] text-xs mb-10 text-neon-magenta">Culture</h4>
            <ul className="space-y-6 text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">
              {['Kasi Lifestyle', 'Build Gallery', 'Street Meets', 'The Crew'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black italic uppercase tracking-[0.3em] text-xs mb-10 text-neon-cyan">Connect</h4>
            <ul className="space-y-6 text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">
              {['Submit Build', 'Contact Us', 'Events', 'Shop'].map(item => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em]">© 2026 NLS NEWLANDS • BUILT FOR THE STREETS</p>
          <div className="flex items-center gap-4 px-6 py-3 glass rounded-full">
            <MapPin className="w-4 h-4 text-neon-cyan" />
            <span className="text-[10px] font-black italic text-slate-400 uppercase tracking-widest">Straight from Newlands, SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white selection:bg-neon-cyan selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <KasiCulture />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
