import OloLogo from './OloLogo'

export default function Footer() {
  return (
    <footer className="bg-sky pt-0 pb-9 text-center">
      {/* Rainbow top stripe */}
      <div className="rainbow-divider mb-8" />

      {/* Logo */}
      <div className="flex items-center justify-center gap-2.5 mb-3.5">
        <OloLogo size={36} />
        <span className="font-fredoka font-bold text-[1.3rem] text-text-dark">
          OLO STUDIO
        </span>
      </div>

      {/* Copyright */}
      <p className="text-[0.9rem] text-text-sub font-medium">
        © 2025 OLO Studio. Made with 🌈 in Penang.
      </p>
    </footer>
  )
}
