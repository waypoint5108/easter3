/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Heart, 
  Users, 
  Sparkles, 
  ChevronRight,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { EVENTS, TESTIMONIALS, CHURCH_NAME, THEME, YEAR, LOCATION, MAP_URL } from "./constants";

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const FloatingElement = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const GeometricBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
    <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
    </svg>
  </div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-accent">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 20H2L12 2Z" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-slate-900 uppercase">{CHURCH_NAME}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-slate-500">
            <a href="#events" className="hover:text-accent transition-colors">Events</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#visit" className="bg-accent text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-accent/20 transition-all">Plan a Visit</a>
          </div>
        </div>
      </nav>

      {/* 1. Get Attention (Hero) */}
      <Section className="min-h-screen flex flex-col justify-center pt-32 clip-diagonal bg-slate-50">
        <GeometricBackground />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: heroY }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block text-accent font-bold tracking-[0.3em] uppercase mb-6"
            >
              Easter {YEAR}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8"
            >
              GOD <br />
              <span className="text-accent italic font-serif font-light">DID</span> IT.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-600 max-w-md mb-10 leading-relaxed"
            >
              We are redeemed. Join us this Easter as we celebrate the story that changed everything.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#visit" className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all">
                PLAN A VISIT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#events" className="flex items-center gap-3 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-accent transition-all">
                VIEW SERVICES
              </a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 relative z-10"
            >
              <iframe 
                src="https://drive.google.com/file/d/1Vx4GIqi-7-TV0pZhkbtf_gqgUHk1iZbB/preview" 
                className="w-full h-full border-0"
                title="Waypoint Easter 2026 Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>
            
            {/* Geometric Overlays */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-12 w-64 h-64 border border-accent/20 rounded-full -z-10" 
            />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Sparkles className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Theme</p>
                  <p className="font-bold text-slate-900">Redemption</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 2. Identify the Problem */}
      <Section className="bg-white">
        <GeometricBackground />
        <div className="max-w-4xl mx-auto text-center">
          <FloatingElement>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 text-balance">
              In a world that feels increasingly loud and disconnected, where do we find real hope?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-12">
              We all face moments of searching—for meaning, for peace, for a fresh start. The weight of life can often feel like it's too much to carry alone.
            </p>
            <div className="h-1 w-24 bg-accent/20 mx-auto" />
          </FloatingElement>
        </div>
      </Section>

      {/* 3. Provide a Solution */}
      <Section className="bg-slate-900 text-white clip-diagonal-reverse -mt-20 pt-40 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <iframe src="https://drive.google.com/file/d/1z7LgC_snEpJ5xcDTcpuujVf5bn4BmuKf/preview" className="w-full h-full border-0 opacity-80" title="Waypoint Easter Celebration"></iframe>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-2xl overflow-hidden mt-8"
              >
                <iframe src="https://drive.google.com/file/d/1zJm0QxYi_QRs7cgxzNt8T8995_x1KU2x/preview" className="w-full h-full border-0 opacity-80" title="Waypoint Easter Community"></iframe>
              </motion.div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <FloatingElement>
              <span className="text-accent font-bold tracking-widest uppercase mb-4 block">The Solution</span>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Jesus Changes <br />
                <span className="text-accent italic font-serif font-light">Everything.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Easter isn't just a holiday; it's the turning point of history. It's the moment when God reached down to bridge the gap, offering redemption and a new beginning to everyone.
              </p>
              <ul className="space-y-4">
                {["A story of unconditional love", "A promise of eternal hope", "A community that walks together"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FloatingElement>
          </div>
        </div>
      </Section>

      {/* 4. Show the Benefits */}
      <Section id="about">
        <GeometricBackground />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Why Join Us?</h2>
            <p className="text-slate-500">Experience the difference of a community centered on grace.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Find Peace", desc: "Discover a stillness that goes beyond your circumstances." },
              { icon: Users, title: "Find Community", desc: "A place where you belong, exactly as you are." },
              { icon: Sparkles, title: "Find Purpose", desc: "Uncover the unique plan God has for your life." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Give Social Proof */}
      <Section className="bg-accent text-white clip-diagonal">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">What Our <br />Community Says</h2>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(s => <Sparkles key={s} className="w-5 h-5 fill-white" />)}
              </div>
            </div>
            <div className="space-y-8">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
                >
                  <p className="text-xl italic mb-6">"{t.quote}"</p>
                  <p className="font-bold uppercase tracking-widest text-sm">— {t.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Call to Action (Plan a Visit) */}
      <Section id="visit" className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <img src="https://picsum.photos/seed/stained-glass-easter-banner/1200/800" alt="Easter Banner Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  Ready to <br />Experience It?
                </h2>
                <p className="text-xl text-slate-300 mb-12">
                  We'd love to welcome you. Let us know you're coming and we'll have someone ready to show you around and answer any questions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <MapPin className="text-accent" />
                    <span>{LOCATION}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Clock className="text-accent" />
                    <span>Services at 10:00 AM (Thursday 7:00 PM)</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <button className="w-full bg-accent text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-accent/20">
                    Confirm My Visit
                  </button>
                  <p className="text-center text-xs text-slate-400">We'll send you a quick guide on what to expect.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Give a Reminder (Events) */}
      <Section id="events" className="bg-slate-50">
        <GeometricBackground />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Save the Dates</span>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Easter Service Times</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="text-accent w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{event.name}</h3>
                  <p className="text-accent font-bold mb-4">{event.date} • {event.time}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{event.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-accent flex items-center gap-2 uppercase tracking-widest transition-colors">
                    <MapPin className="w-4 h-4" /> Get Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 text-accent">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L22 20H2L12 2Z" />
                </svg>
                <span className="font-bold text-2xl tracking-tight text-slate-900 uppercase">{CHURCH_NAME}</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-xs">
              Jesus Changes Everything. Join us as we explore the hope of Easter.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="https://facebook.com/WaypointUCParafield" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/waypoint_uniting" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@WaypointUnitingChurch" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} {CHURCH_NAME} Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
