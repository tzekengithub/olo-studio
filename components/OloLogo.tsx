interface OloLogoProps {
  size?: number
}

/**
 * OLO Studio SVG logo — white cloud character with rainbow stripe
 * on a sky-blue circular background. Used in Navbar and Footer.
 */
export default function OloLogo({ size = 48 }: OloLogoProps) {
  const s = size
  const cx = s / 2
  const r = s / 2

  // Scale factor relative to 48px base
  const f = s / 48

  return (
    <svg
      viewBox="0 0 48 48"
      width={s}
      height={s}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OLO Studio logo"
    >
      {/* Sky blue background */}
      <circle cx="24" cy="24" r="24" fill="#C8E6F5" />

      {/* White cloud body */}
      <ellipse cx="24" cy="22" rx="13" ry="8" fill="white" />
      <circle cx="17" cy="20" r="6"   fill="white" />
      <circle cx="24" cy="17" r="7"   fill="white" />
      <circle cx="31" cy="20" r="5.5" fill="white" />

      {/* Rainbow stripe */}
      <rect x="11"   y="28" width="4" height="4" rx="1" fill="#EF4444" />
      <rect x="15.5" y="28" width="4" height="4" rx="1" fill="#F97316" />
      <rect x="20"   y="28" width="4" height="4" rx="1" fill="#EAB308" />
      <rect x="24.5" y="28" width="4" height="4" rx="1" fill="#22C55E" />
      <rect x="29"   y="28" width="4" height="4" rx="1" fill="#3B82F6" />
      <rect x="33.5" y="28" width="4" height="4" rx="1" fill="#A855F7" />
    </svg>
  )
}
