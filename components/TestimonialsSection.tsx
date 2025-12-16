'use client';

const testimonials = [
  {
    quote:
      'With Stackyon, our web and mobile platforms are stable and easy to manage and even non-technical users can make updates without extra costs.',
    name: 'Lisa Jackson',
    company: 'NSTRC',
    image: '/testimonials/lisa-jackson.png',
  },
  {
    quote:
      'Stackyon completely automated our prescription routing, making operations real-time and seamless at a national scale.',
    name: 'Srini Kalla',
    company: 'Wellgistics Health',
    image: '/testimonials/srini-kalla.png',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-100" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-4">
        <header className="flex flex-col items-center gap-6 text-center">
          <span
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-4 py-2"
            style={{ fontSize: '0.975rem' }}
          >
            <span className="font-medium tracking-wide text-neutral-900">
              Testimonials
            </span>
          </span>
          <h2 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl">
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Client Testimonials</span>
          </h2>
          <p className="max-w-2xl text-lg text-neutral-600">
            Don’t just take our word for it—see how teams across regulated industries scale faster with Stackyon’s AI-native platform.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-10 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.4)] transition hover:-translate-y-1 hover:shadow-[0_45px_120px_-50px_rgba(15,23,42,0.4)]"
            >
              <div className="flex flex-col gap-8">
                <svg
                  className="h-9 w-9 text-neutral-900"
                  viewBox="0 0 40 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 20c0-6 2.9-10.9 8.6-14.5l2.1 3.1c-3.7 2.1-5.7 5.2-5.5 8.8H21v14h-13V20Zm16 0c0-6 2.9-10.9 8.6-14.5l2.1 3.1c-3.7 2.1-5.7 5.2-5.5 8.8H37v14H24V20Z"
                    fill="currentColor"
                  />
                </svg>

                <p className="text-xl font-medium leading-relaxed text-neutral-800">
                  {testimonial.quote}
                </p>
              </div>

              <footer className="mt-10">
                {testimonial.image && (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 shadow-inner">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{testimonial.company}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
