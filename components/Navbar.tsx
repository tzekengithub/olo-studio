'use client'

import { useState, useEffect, useCallback } from 'react'
import OloLogo from './OloLogo'

const NAV_LINKS = [
  { label: 'Home',      href: '#hero'      },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Gallery',   href: '#gallery'   },
]

const MOBILE_LINKS = [
  { label: '🏠 Home',      href: '#hero'      },
  { label: '🧸 Workshops', href: '#workshops' },
  { label: '🎨 Gallery',   href: '#gallery'   },
  { label: '📱 Book Now',  href: '#contact'   },
]

function smoothScrollTo(id: string) {
  const el = document.querySelector(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#mobile-menu') && !target.closest('#hamburger')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false)
    smoothScrollTo(href)
  }, [])

  return (
    <>
      {/* ── Sticky Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] py-3 navbar-glass transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : ''
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer p-0"
          >
            <OloLogo size={48} />
            <span className="font-fredoka font-bold text-2xl text-text-dark tracking-wide">
              OLO STUDIO
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="font-fredoka font-medium text-base text-text-dark px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 transition-colors cursor-pointer bg-transparent border-none"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNavClick('#contact')}
                className="font-fredoka font-semibold text-base text-white bg-text-dark px-5 py-2 rounded-full hover:bg-blue-500 transition-colors cursor-pointer border-none"
              >
                Book Now
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            id="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl bg-white border-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[22px] h-[2.5px] bg-text-dark rounded-sm transition-all duration-300 origin-center ${
                menuOpen ? 'translate-y-[7.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2.5px] bg-text-dark rounded-sm transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2.5px] bg-text-dark rounded-sm transition-all duration-300 origin-center ${
                menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[73px] left-0 right-0 z-[999] bg-sky/95 backdrop-blur-xl px-6 pb-7 pt-5 mobile-menu-rainbow"
        >
          {MOBILE_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="block w-full text-left font-fredoka text-xl font-semibold text-text-dark py-3.5 border-b border-text-dark/10 bg-transparent border-x-0 border-t-0 cursor-pointer last:border-b-0"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

