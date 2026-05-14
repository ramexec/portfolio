const socials = [
  {
    label: 'GitHub',
    handle: '@ramexec',
    href: 'https://github.com/ramexec',
    icon: <img src={`${import.meta.env.BASE_URL}svg/git.svg`} alt='GitHub' className='w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition' />,
  },
  {
    label: 'LinkedIn',
    handle: 'Rahul Mondal',
    href: 'https://www.linkedin.com/in/rahul-mondal-479907219/',
    icon: <img src={`${import.meta.env.BASE_URL}svg/linkedin.svg`} alt='LinkedIn' className='w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition' />,
  },
  {
    label: 'Email',
    handle: 'rahulanthonymondal@gmail.com',
    href: 'mailto:rahulanthonymondal@gmail.com',
    icon: (
      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' className='opacity-70 group-hover:opacity-100 transition'>
        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
        <polyline points='22,6 12,13 2,6' />
      </svg>
    ),
  },
]

export const Contact = () => {
  return (
    <section
      id='contact'
      className='relative px-6 py-28 overflow-hidden'
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* subtle radial glow */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div
          className='absolute inset-0'
          style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 60%)' }}
        />
      </div>

      <div className='relative z-10 max-w-[80rem] mx-auto'>

        {/* ── Header ── */}
        <div className='flex items-center gap-3 mb-6 animate-fade-in'>
          <span className='inline-block w-10 h-px opacity-80' style={{ backgroundColor: '#c9a84c' }} />
          <p className="font-['DM_Sans'] text-[11px] font-medium tracking-[0.25em] uppercase" style={{ color: '#c9a84c' }}>
            Get in touch
          </p>
        </div>

        <h2
          className="font-['Cormorant_Garamond'] font-light text-5xl md:text-6xl leading-[1.05] mb-4 animate-fade-in"
          style={{ color: '#f5f0e8', animationDelay: '0.08s' }}
        >
          Let's{' '}
          <em className='italic' style={{ color: '#e8d08a' }}>talk.</em>
        </h2>

        <p
          className="font-['DM_Sans'] text-[14px] leading-relaxed mb-16 max-w-md animate-fade-in"
          style={{ color: 'rgba(245,240,232,0.45)', animationDelay: '0.15s' }}
        >
          Whether it's a project, an opportunity, or just a hello — my inbox is always open.
          I'll get back to you as soon as I can.
        </p>

        {/* ── Content ── */}
        <div className='grid lg:grid-cols-2 gap-16 items-start'>

          {/* Left — big email CTA */}
          <div className='animate-fade-in flex flex-col gap-6' style={{ animationDelay: '0.2s' }}>
            <p
              className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'rgba(245,240,232,0.35)' }}
            >
              Drop me a mail
            </p>

            <a
              href='mailto:rahulanthonymondal@gmail.com'
              className='group flex flex-col gap-3'
              style={{ textDecoration: 'none' }}
            >
              <span
                className="font-['Cormorant_Garamond'] font-light italic text-2xl sm:text-3xl leading-tight break-all transition-colors duration-200 group-hover:text-[#e8d08a]"
                style={{ color: '#c9a84c' }}
              >
                rahulanthonymondal@gmail.com
              </span>
              <span
                className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-200 group-hover:gap-3"
                style={{ color: 'rgba(245,240,232,0.4)' }}
              >
                Open in mail app ↗
              </span>
            </a>

            {/* Availability badge */}
            <div className='glass p-6 flex flex-col gap-3 mt-4'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full animate-pulse' style={{ backgroundColor: '#669749' }} />
                <span
                  className="font-['DM_Sans'] text-xs tracking-[0.15em] uppercase font-medium"
                  style={{ color: '#669749' }}
                >
                  Available for work
                </span>
              </div>
              <p
                className="font-['DM_Sans'] text-sm leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.45)' }}
              >
                Open to full-time, contract, and interesting collaborations.
                Based in <span style={{ color: '#f5f0e8' }}>Kolkata, India</span> — happy to work remotely.
              </p>
            </div>
          </div>

          {/* Right — socials */}
          <div className='flex flex-col gap-4 animate-fade-in' style={{ animationDelay: '0.28s' }}>
            <p
              className="font-['DM_Sans'] text-[10px] tracking-[0.2em] uppercase mb-2"
              style={{ color: 'rgba(245,240,232,0.35)' }}
            >
              Find me on
            </p>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='glass flex items-center gap-4 px-5 py-4 transition-all duration-300 group'
                style={{ textDecoration: 'none' }}
              >
                <span style={{ color: 'rgba(245,240,232,0.4)' }}>
                  {s.icon}
                </span>
                <div className='flex flex-col'>
                  <span
                    className="font-['DM_Sans'] text-sm font-medium transition-colors duration-200 group-hover:text-[#c9a84c]"
                    style={{ color: '#f5f0e8' }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="font-['DM_Sans'] text-xs"
                    style={{ color: 'rgba(245,240,232,0.4)' }}
                  >
                    {s.handle}
                  </span>
                </div>
                <span
                  className='ml-auto text-sm transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                  style={{ color: '#c9a84c' }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* ── Footer ── */}
        <div
          className='mt-24 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in'
          style={{ borderTop: '1px solid rgba(245,240,232,0.07)', animationDelay: '0.35s' }}
        >
          <p
            className="font-['Cormorant_Garamond'] font-light italic text-lg"
            style={{ color: 'rgba(245,240,232,0.25)' }}
          >
            Rahul Mondal · Portfolio 2026
          </p>
          <p
            className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase"
            style={{ color: 'rgba(245,240,232,0.2)' }}
          >
            Designed &amp; built by Rahul
          </p>
        </div>

      </div>
    </section>
  )
}