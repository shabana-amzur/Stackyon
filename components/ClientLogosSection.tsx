import Image from 'next/image';

type LogoMeta = {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  sizeHint?: string;
};

const logos: LogoMeta[] = [
  { src: '/amzur-logo-2022.png', alt: 'Amzur Technologies', imageClassName: 'scale-95' },
  { src: '/awareness-usa.png', alt: 'Awareness USA', imageClassName: 'scale-95' },
  {
    src: '/georgia-state.png',
    alt: 'Georgia State University',
    imageClassName: 'scale-100',
    wrapperClassName: 'h-[60px] w-[160px] md:h-[60px] md:w-[160px]',
    sizeHint: '160px',
  },
  { src: '/ifb-logo.png', alt: 'IFB', imageClassName: 'scale-90' },
  { src: '/logo_b001.png', alt: 'Stackyon Client Logo', imageClassName: 'scale-95' },
];

export default function ClientLogosSection() {
  return (
    <section className="w-full bg-black py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/40">
          Trusted by 50,000+ Companies
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
