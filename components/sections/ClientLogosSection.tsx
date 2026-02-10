import Image from 'next/image';

/**
 * Metadata for client logo display
 * @property {string} src - Path to logo image
 * @property {string} alt - Alt text for accessibility
 * @property {string} imageClassName - Optional CSS classes for the image
 * @property {string} wrapperClassName - Optional CSS classes for the wrapper
 * @property {string} sizeHint - Size hint for Next.js Image optimization
 */
type LogoMeta = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  sizeHint?: string;
};

/**
 * Array of client logos to display in the section
 */
const logos: LogoMeta[] = [
  { src: '/images/logos/amzur-logo.png', alt: 'Amzur', imageClassName: 'scale-95' },
  { src: '/images/logos/awareness-usa.png', alt: 'Awareness USA', imageClassName: 'scale-95' },
  {
    src: '/images/logos/georgia-state.png',
    alt: 'Georgia State University',
    imageClassName: 'scale-100',
    wrapperClassName: 'h-[100px] w-[160px] md:h-[100px] md:w-[160px]',
    sizeHint: '160px',
  },
  { src: '/images/logos/ifb-logo.png', alt: 'IFB', imageClassName: 'scale-90' },
  { src: '/images/logos/logo_b001.png', alt: 'Stackyon Client Logo', imageClassName: 'scale-95' },
];

/**
 * ClientLogosSection Component - Displays trusted client logos
 * 
 * Shows a horizontal grid of client company logos with:
 * - Responsive layout (wraps on mobile, single row on desktop)
 * - Hover effects (opacity transitions)
 * - Optimized images using Next.js Image component
 * - Trust indicator text ("Trusted by Global companies")
 * 
 * Each logo is individually scaled and styled for visual consistency
 */
export default function ClientLogosSection() {
  return (
    <section className="w-full bg-black py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/40">
          Trusted by Global companies
        </p>

        <div className="flex w-full max-w-6xl flex-wrap items-center justify-center gap-10 md:flex-nowrap md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`relative flex h-12 w-44 items-center justify-center rounded-md px-4 opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-12 md:w-44 ${logo.wrapperClassName ?? ''}`.trim()}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes={logo.sizeHint ?? '176px'}
                className={`object-contain transition-transform duration-300 ${logo.imageClassName ?? ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
