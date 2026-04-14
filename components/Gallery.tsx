'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const GALLERY_ITEMS = [
  {
    emoji: '🧸',
    label: 'Plushy Creations',
    tag: 'DIY Plushy',
    bg: 'bg-amber-100',
    minHeight: 240,
    delay: 'delay-1',
  },
  {
    emoji: '🪡',
    label: 'Tufted Rugs',
    tag: 'Tufting',
    bg: 'bg-pink-100',
    minHeight: 300,
    delay: 'delay-2',
  },
  {
    emoji: '🎨',
    label: 'Custom Designs',
    tag: 'Custom',
    bg: 'bg-emerald-100',
    minHeight: 200,
    delay: 'delay-3',
  },
  {
    emoji: '🌈',
    label: 'Rainbow Rugs',
    tag: 'Tufting',
    bg: 'bg-violet-100',
    minHeight: 280,
    delay: 'delay-1',
  },
  {
    emoji: '✨',
    label: 'Pop-Up Events',
    tag: 'Events',
    bg: 'bg-blue-100',
    minHeight: 220,
    delay: 'delay-2',
  },
  {
    emoji: '🎉',
    label: 'Group Sessions',
    tag: 'Corporate',
    bg: 'bg-red-100',
    minHeight: 260,
    delay: 'delay-3',
  },
] as const

export default function Gallery() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-sky">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <p className="fade-in font-fredoka text-sm font-semibold tracking-[0.12em] uppercase text-text-sub mb-2.5 text-center">
          Our Creations
        </p>
        <h2
          className="fade-in delay-1 font-fredoka font-bold text-text-dark text-center mb-3 leading-snug"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
        >
          Gallery
        </h2>
        <p className="fade-in delay-2 text-text-sub text-center font-medium max-w-[480px] mx-auto mb-14 text-[1.05rem]">
          Every piece is unique, made by real people just like you.
        </p>

        {/* Masonry grid */}
        <div className="gallery-masonry">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`fade-in ${item.delay} break-inside-avoid mb-5 rounded-[20px] overflow-hidden shadow-card hover:scale-[1.03] hover:shadow-card-hover transition-all duration-300 cursor-pointer`}
            >
              <div
                className={`${item.bg} flex flex-col items-center justify-center gap-2.5 p-5`}
                style={{ minHeight: item.minHeight }}
              >
                <span className="text-[3.5rem] drop-shadow-sm">{item.emoji}</span>
                <span className="font-fredoka font-semibold text-text-sub text-base">
                  {item.label}
                </span>
                <span className="inline-block bg-white/70 font-bold text-text-dark text-[0.78rem] px-3 py-1 rounded-full tracking-wide">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA hint */}
        <p className="text-center text-text-sub font-medium text-sm mt-8">
          Follow{' '}
          <span className="font-bold text-text-dark">@olostudio.my</span>{' '}
          on Instagram to see real creations from our workshops 📸
        </p>
      </div>
    </section>
  )
}
