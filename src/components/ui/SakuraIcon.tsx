interface SakuraIconProps {
  className?: string;
}

/**
 * Minimalist botanical sakura SVG used as a refined visual anchor instead of emojis.
 */
export default function SakuraIcon({ className = "h-8 w-8" }: SakuraIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        <path d="M32 6C27.5 14 27 21 32 27C37 21 36.5 14 32 6Z" />
        <path d="M56.7 24C48.2 21.8 41.3 23.6 37 29.8C43.7 32.3 50.2 30.1 56.7 24Z" />
        <path d="M47.3 53C46.8 44.3 42.9 38.3 35.6 36.2C35.2 43.3 39.4 49 47.3 53Z" />
        <path d="M16.7 53C24.6 49 28.8 43.3 28.4 36.2C21.1 38.3 17.2 44.3 16.7 53Z" />
        <path d="M7.3 24C13.8 30.1 20.3 32.3 27 29.8C22.7 23.6 15.8 21.8 7.3 24Z" />
      </g>
      <circle cx="32" cy="32" r="3.5" fill="currentColor" opacity="0.65" />
    </svg>
  );
}
