'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const FEATURES = [
  {
    emoji: '🎨',
    title: 'All Materials Provided',
    desc: 'Show up with just your creativity! We supply every tool, fabric, and supply you need.',
    accent: 'why-bubble-1',
    delay: 'delay-1',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'All Ages Welcome',
    desc: 'From 5 to 95, everyone can make something wonderful. Perfect for families, date nights, and team days.',
    accent: 'why-bubble-2',
    delay: 'delay-2',
  },
  {
    emoji: '📍',
    title: 'Based in Penang',
    desc: 'Proudly rooted in George Town, Penang. We also travel for pop-up events across Malaysia!',
    accent: 'why-bubble-3',
    delay: 'delay-3',
  },
  {
    emoji: '✨',
    title: 'Walk-ins Welcome',
    desc: 'No advance booking required for most sessions. Just drop by and let\'s create something together.',
    accent: 'why-bubble-4',
    delay: 'delay-4',
  },
] as const

export default function WhyOlo() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="why" ref={sectionRef} className="py-20 bg-sky-mid">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <p className="fade-in font-fredoka text-sm font-semibold tracking-[0.12em] uppercase text-text-sub mb-2.5 text-center">
          Why Choose Us
        </p>
        <h2
          className="fade-in delay-1 font-fredoka font-bold text-text-dark text-center leading-snug"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
        >
          Why OLO Studio?
        </h2>

        {/* Bubbles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`fade-in ${f.delay} ${f.accent} bg-white rounded-[28px] p-9 text-center shadow-card hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-card-hover transition-all duration-300`}
            >
              <span className="text-[2.8rem] block mb-3.5 drop-shadow-sm">{f.emoji}</span>
              <h3 className="font-fredoka font-bold text-text-dark text-[1.25rem] mb-2">{f.title}</h3>
              <p className="text-text-sub text-[0.9rem] font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
