'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { WhatsAppIcon } from './Hero'

const WA_BASE = 'https://wa.me/60103575509'
const WA_TEXT = encodeURIComponent("Hi OLO Studio! I'd like to book a workshop 😊")

type Workshop = {
  emoji: string
  title: string
  desc: string
  price: string
  priceRainbow?: boolean
  priceColor?: string
  img: string
  fallbackBg: string
  wide: boolean
  featured: boolean
  radius: number
  extraClasses: string
  btn: string
  delay: string
}

const WORKSHOPS: Workshop[] = [
  {
    emoji: '🧸', title: 'Build-A-Plushie',
    desc: 'Pick your character, stuff it, sew it, name it. Take home your new best friend.',
    price: 'from RM98', priceRainbow: true,
    img: '/images/workshop-plushie.jpg', fallbackBg: '#1E3A5F',
    wide: true, featured: true, radius: 32, extraClasses: '', btn: 'Book Now', delay: 'delay-1',
  },
  {
    emoji: '🪡', title: 'Tufting Workshop',
    desc: 'Create your own tufted pillow or wall art using a tufting gun. All skill levels welcome.',
    price: 'from RM150', priceColor: '#F97316',
    img: '/images/workshop-tufting.jpg', fallbackBg: '#FFF7ED',
    wide: false, featured: false, radius: 16, extraClasses: 'hover-rotate', btn: 'Book Now', delay: 'delay-2',
  },
  {
    emoji: '📿', title: 'Bead Keychains',
    desc: 'String your own personalised bead keychain. Mix colours, spell your name, make it yours.',
    price: 'from RM35', priceColor: '#EAB308',
    img: '/images/workshop-beads.jpg', fallbackBg: '#FFFBEB',
    wide: false, featured: false, radius: 28, extraClasses: 'tilt-l hover-lift', btn: 'Book Now', delay: 'delay-3',
  },
  {
    emoji: '🖨️', title: 'Linocut Printing',
    desc: 'Carve your own stamp, roll the ink, press it. Ancient craft, modern fun.',
    price: 'from RM65', priceColor: '#6366F1',
    img: '/images/workshop-linocut.jpg', fallbackBg: '#EEF2FF',
    wide: false, featured: false, radius: 20, extraClasses: 'hover-lift', btn: 'Book Now', delay: 'delay-4',
  },
  {
    emoji: '🏺', title: 'Ceramic Painting',
    desc: 'Paint and glaze your own ceramic piece. No experience needed.',
    price: 'from RM60', priceColor: '#22C55E',
    img: '/images/workshop-ceramic.jpg', fallbackBg: '#ECFDF5',
    wide: false, featured: false, radius: 24, extraClasses: 'hover-scale', btn: 'Book Now', delay: 'delay-1',
  },
  {
    emoji: '✂️', title: 'Shrinky Keychains',
    desc: 'Draw, cut, bake and watch your design shrink into a tiny charm keychain.',
    price: 'from RM35', priceColor: '#F472B6',
    img: '/images/workshop-shrinky.jpg', fallbackBg: '#FDF2F8',
    wide: true, featured: false, radius: 16, extraClasses: 'tilt-r hover-lift', btn: 'Book Now', delay: 'delay-2',
  },
  {
    emoji: '🤖', title: 'STEM & Robotics DIY',
    desc: 'Build and programme your own mini robot. Perfect for kids and curious adults.',
    price: 'from RM80', priceColor: '#A855F7',
    img: '/images/workshop-stem.jpg', fallbackBg: '#F5F3FF',
    wide: false, featured: false, radius: 24, extraClasses: 'hover-scale', btn: 'Book Now', delay: 'delay-3',
  },
  {
    emoji: '🎨', title: 'Batik Painting',
    desc: 'Traditional Malaysian wax-resist dyeing technique. Make your own batik fabric piece.',
    price: 'from RM75', priceColor: '#22C55E',
    img: '/images/workshop-batik.jpg', fallbackBg: '#F0FDF4',
    wide: false, featured: false, radius: 20, extraClasses: 'tilt-r hover-lift', btn: 'Book Now', delay: 'delay-4',
  },
  {
    emoji: '🪣', title: 'Pottery',
    desc: 'Throw your own pot on a wheel or hand-build a piece from clay.',
    price: 'from RM90', priceColor: '#F97316',
    img: '/images/workshop-pottery.jpg', fallbackBg: '#FFF7ED',
    wide: false, featured: false, radius: 28, extraClasses: 'hover-rotate', btn: 'Book Now', delay: 'delay-1',
  },
  {
    emoji: '🖼️', title: 'Sand Art',
    desc: 'Layer coloured sand into a glass bottle to create your own unique landscape artwork.',
    price: 'from RM45', priceColor: '#3B82F6',
    img: '/images/workshop-sandart.jpg', fallbackBg: '#EFF6FF',
    wide: false, featured: false, radius: 16, extraClasses: 'hover-lift', btn: 'Book Now', delay: 'delay-2',
  },
  {
    emoji: '🔧', title: 'Tuft Gun Repair',
    desc: 'We repair and service tufting guns. Drop off or mail in.',
    price: 'Custom quote', priceColor: '#EF4444',
    img: '/images/workshop-repair.jpg', fallbackBg: '#FEF2F2',
    wide: false, featured: false, radius: 24, extraClasses: 'hover-lift', btn: 'Get a Quote', delay: 'delay-3',
  },
  {
    emoji: '🏢', title: 'Corporate Teambuilding',
    desc: 'Private workshops for your team. We customise the activity, you show up and have fun. Min 10 pax.',
    price: 'Custom quote', priceColor: '#A855F7',
    img: '/images/workshop-corporate.jpg', fallbackBg: '#F5F3FF',
    wide: true, featured: false, radius: 24, extraClasses: 'hover-lift', btn: 'Enquire Now', delay: 'delay-4',
  },
]

function CardInner({ w }: { w: Workshop }) {
  const waUrl = `${WA_BASE}?text=${WA_TEXT}`
  return (
    <>
      <img
        className="card-photo-img"
        src={w.img}
        alt={`${w.title} workshop`}
        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
      />
      <div className="card-photo-overlay" />
      <div
        className={`card-price-badge${w.priceRainbow ? ' badge-rainbow' : ''}`}
        style={w.priceColor ? { color: w.priceColor } : undefined}
      >
        {w.price}
      </div>
      <div className="card-photo-inner">
        <span style={{ fontSize: '2.2rem', marginBottom: '6px', display: 'block' }}>{w.emoji}</span>
        <h3 className="font-fredoka font-bold text-white text-xl mb-1 leading-snug">{w.title}</h3>
        <p className="text-sm leading-relaxed mb-3.5" style={{ color: 'rgba(255,255,255,0.85)' }}>{w.desc}</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start flex items-center gap-2 bg-wa text-white font-fredoka font-semibold text-sm px-4 py-2.5 rounded-full shadow-wa hover:-translate-y-0.5 hover:shadow-wa-hover transition-all duration-200"
        >
          <WhatsAppIcon size={16} />
          {w.btn}
        </a>
      </div>
    </>
  )
}

export default function Workshops() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="workshops" ref={sectionRef} className="py-24 bg-sky">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <p className="fade-in font-fredoka text-sm font-semibold tracking-[0.12em] uppercase text-text-sub mb-2.5 text-center">
          What We Offer
        </p>
        <h2
          className="fade-in delay-1 font-fredoka font-bold text-text-dark text-center mb-3 leading-snug"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
        >
          Our Workshops
        </h2>
        <p className="fade-in delay-2 text-text-sub text-center font-medium max-w-[480px] mx-auto mb-14 text-[1.05rem]">
          Hands-on creative experiences for everyone — beginners welcome!
        </p>

        {/* Bento grid */}
        <div className="workshop-bento">
          {WORKSHOPS.map((w) => {
            if (w.featured) {
              return (
                <div key={w.title} className={`featured-photo-wrap bento-wide fade-in ${w.delay}`}>
                  <div
                    className="w-card-photo"
                    style={{ borderRadius: `${w.radius}px`, backgroundColor: w.fallbackBg }}
                  >
                    <CardInner w={w} />
                  </div>
                </div>
              )
            }
            return (
              <div
                key={w.title}
                className={`w-card-photo ${w.extraClasses}${w.wide ? ' bento-wide' : ''} fade-in ${w.delay}`}
                style={{ borderRadius: `${w.radius}px`, backgroundColor: w.fallbackBg }}
              >
                <CardInner w={w} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
