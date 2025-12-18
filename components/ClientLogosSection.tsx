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
    <section className="relative w-full bg-[#05060a] py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#05060a] to-[#020305]" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.12), rgba(10,11,18,0.0) 60%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/40">
          Trusted by 50,000+ Marketers
        </p>
        <h2 className="max-w-3xl text-2xl font-semibold text-white/80 md:text-3xl">
          Build landing pages that work with a partner marketers trust worldwide
        </h2>

        <div className="flex w-full flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="relative h-12 w-40 opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-14 md:w-44"
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
