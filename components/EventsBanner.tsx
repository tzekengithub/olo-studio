const WA_EVENTS =
  "https://wa.me/60103575509?text=Hi%20OLO%20Studio!%20I'd%20like%20to%20know%20about%20your%20upcoming%20events%20%F0%9F%8E%AA"

export default function EventsBanner() {
  return (
    <section id="events">
      {/* Top rainbow rule */}
      <div className="rainbow-divider" />

      {/* Banner */}
      <div className="events-banner-overlay relative rainbow-gradient py-9 px-6 text-center overflow-hidden">
        <div className="relative z-[1]">
          <h2
            className="font-fredoka font-bold text-white mb-2.5 leading-snug"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              textShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            🎪 Find Us at Pop-Up Events Around Malaysia!
          </h2>

          <p className="text-white/90 font-semibold max-w-[480px] mx-auto mb-5 text-base">
            We set up at markets, fairs, and community events all over the country.
            Follow us to catch us near you!
          </p>

          <a
            href={WA_EVENTS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-text-dark font-fredoka font-bold text-base px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
          >
            📸 @olostudio.my
          </a>
        </div>
      </div>

      {/* Bottom rainbow rule */}
      <div className="rainbow-divider" />
    </section>
  )
}
