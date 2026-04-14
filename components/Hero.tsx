'use client'

import { useEffect } from 'react'

const WA_BOOK =
  "https://wa.me/60103575509?text=Hi%20OLO%20Studio!%20I'd%20like%20to%20book%20a%20workshop%20%F0%9F%98%8A"

export default function Hero() {
  /* Trigger hero fade-ins sequentially on mount */
  useEffect(() => {
    const heroEls = document.querySelectorAll('#hero .fade-in')
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('is-visible'), 100 + i * 130)
    })
  }, [])

  function scrollToWorkshops(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const el = document.querySelector('#workshops')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-[90px] overflow-hidden bg-sky"
    >
      {/* ── Floating background clouds ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="cloud-group cloud-a" />
        <div className="cloud-group cloud-b" />
        <div className="cloud-group cloud-c" />
        <div className="cloud-group cloud-d" />
        <div className="cloud-group cloud-e" />
        <div className="cloud-group cloud-f" />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-[1] text-center px-6 pt-16 pb-28 max-w-[1100px] mx-auto w-full">

        {/* Badge */}
        <div className="fade-in inline-block bg-white text-text-sub font-fredoka text-[0.95rem] font-semibold px-5 py-2 rounded-full mb-7 shadow-card tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 mb-px align-middle animate-pulse-dot" />
          Now Open in Penang
        </div>

        {/* Headline */}
        <h1
          className="fade-in delay-1 font-fredoka font-bold text-text-dark leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Make Something
          <br />
          You&apos;ll Love{' '}
          <span className="animate-bounce-emoji">🧸</span>
        </h1>

        {/* Subtext */}
        <p
          className="fade-in delay-2 text-text-sub font-semibold mb-11 max-w-[520px] mx-auto leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
        >
          Penang&apos;s #1 DIY Plushy &amp; Tufting Workshop.
          <br />
          Create, stuff, and take home your masterpiece.
        </p>

        {/* CTAs */}
        <div className="fade-in delay-3 flex gap-4 justify-center flex-wrap">
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-text-dark text-white font-fredoka text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:bg-green-500 hover:shadow-wa-hover"
            style={{ boxShadow: '0 6px 20px rgba(30,58,95,0.22)' }}
          >
            <WhatsAppIcon size={22} />
            Book a Workshop
          </a>

          <a
            href="#workshops"
            onClick={scrollToWorkshops}
            className="inline-flex items-center gap-2 bg-white text-text-dark font-fredoka text-lg font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03]"
            style={{ boxShadow: '0 6px 20px rgba(30,58,95,0.12)' }}
          >
            See Our Workshops ↓
          </a>
        </div>
      </div>

      {/* ── Rainbow bottom stripe ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[10px] z-[2] rainbow-gradient" />
    </section>
  )
}

/* ── Shared WhatsApp icon ── */
export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
