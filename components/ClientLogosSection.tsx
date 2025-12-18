import Image from 'next/image';

const logos = [
  { src: '/amzur-logo-2022.png', alt: 'Amzur Technologies' },
  { src: '/awareness-usa.png', alt: 'Awareness USA' },
  { src: '/georgia-state.png', alt: 'Georgia State University' },
  { src: '/ifb-logo.png', alt: 'IFB' },
  { src: '/logo_b001.png', alt: 'Stackyon Client Logo' },
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
              className="relative h-12 w-44 opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-12 md:w-44"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="176px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
