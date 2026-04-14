'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { WhatsAppIcon } from './Hero'

const WA_BOOK =
  "https://wa.me/60103575509?text=Hi%20OLO%20Studio!%20I'd%20like%20to%20book%20a%20workshop%20%F0%9F%98%8A"

export default function Contact() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-sky-mid">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="fade-in bg-white rounded-[36px] px-12 py-16 text-center shadow-card max-w-[680px] mx-auto relative overflow-hidden md:px-8 sm:px-6">

          {/* Rainbow top accent */}
          <div className="absolute top-0 left-0 right-0 h-[6px] rainbow-gradient" />

          {/* Decorative bg clouds */}
          <div className="contact-cloud-1" aria-hidden="true" />
          <div className="contact-cloud-2" aria-hidden="true" />

          {/* Content */}
          <span className="text-[4rem] block mb-5 animate-bounce-emoji">🌈</span>

          <h2
            className="font-fredoka font-bold text-text-dark mb-3 leading-snug"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Ready to Create Something Amazing?
          </h2>

          <p className="text-text-sub font-medium mb-9 max-w-[400px] mx-auto text-base leading-relaxed">
            Message us on WhatsApp to book your spot, ask questions, or plan your next event!
          </p>

          {/* Big WhatsApp CTA */}
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pulse inline-flex items-center justify-center gap-3 bg-wa text-white font-fredoka font-bold text-xl px-12 py-5 rounded-full mb-9 transition-all duration-200"
            style={{ boxShadow: '0 8px 28px rgba(37,211,102,0.35)' }}
          >
            <WhatsAppIcon size={28} />
            Chat With Us on WhatsApp
          </a>

          {/* Contact info */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-center gap-2 text-[0.95rem] text-text-sub font-semibold">
              <span>📍</span>
              <span>Jalan Lenggong, Straits Garden, George Town, Penang</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[0.95rem] text-text-sub font-semibold">
              <span>📸</span>
              <span>@olostudio.my</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
