const facts = [
  { emoji: '🎮', label: 'Gamer', desc: 'Exploring worlds when not building them' },
  { emoji: '🍵', label: 'Tea addict', desc: 'Chai fuels every late-night debug session' },
  { emoji: '🇯🇵', label: 'Learning JP', desc: 'Slowly conquering hiragana & katakana' },
  { emoji: '🎵', label: 'Music', desc: 'Lo-fi beats on repeat while coding' },
]

const langs = ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 'Rust']

export const About = () => {
  return (
    <section
      id='about'
      className='relative px-6 py-28 overflow-hidden'
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* subtle bg image */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <img src={`${import.meta.env.BASE_URL}about-bg.jpg`} alt='' className='w-full h-full object-cover opacity-[0.07]' />
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 30%, transparent 70%, var(--bg-primary) 100%)',
          }}
        />
      </div>

      <div className='relative z-10 max-w-[80rem] mx-auto'>

        {/* sec leab */}
        <div
          className='flex items-center gap-3 mb-16 animate-fade-in'
          style={{ animationDelay: '0s' }}
        >
          <span
            className='inline-block w-10 h-px opacity-80'
            style={{ backgroundColor: 'var(--gold-primary)' }}
          />
          <p
            className="font-['DM_Sans'] text-[11px] font-medium tracking-[0.25em] uppercase"
            style={{ color: 'var(--gold-primary)' }}
          >
            The person behind the code
          </p>
        </div>

        {/* main gd */}
        <div className='grid lg:grid-cols-2 gap-16 items-start'>

          {/* left */}
          <div>
            <h2
              className="font-['Cormorant_Garamond'] font-light text-5xl md:text-6xl leading-[1.05] mb-8 animate-fade-in"
              style={{ color: 'var(--text-primary)', animationDelay: '0.1s' }}
            >
              More than just<br />
              <em className='italic' style={{ color: 'var(--gold-primary)' }}>a developer.</em>
            </h2>

            <div
              className="font-['DM_Sans'] space-y-5 text-[15px] leading-[1.85] animate-fade-in"
              style={{ color: 'rgba(245,240,232,0.55)', animationDelay: '0.2s' }}
            >
              <p>
                I didn't get into coding for the career — I got into it because I wanted to{' '}
                <span style={{ color: 'var(--text-primary)' }}>build things</span>. Games I couldn't
                afford, tools I couldn't find, ideas I couldn't stop thinking about. That itch
                never went away.
              </p>
              <p>
                Over the years I've gone deep into systems programming with{' '}
                <span style={{ color: 'var(--text-primary)' }}>Java, Javascript, C, C++, and Rust</span>, built
                full-stack web apps, and tinkered with desktop software. I love the whole
                stack — from memory management to pixel-perfect UI.
              </p>
              <p>
                Right now I'm focused on building projects that are{' '}
                <span style={{ color: 'var(--text-primary)' }}>fast, clean, and actually useful</span>.
                If it ships and works well, that's the win.
              </p>
            </div>

            {/* languages */}
            <div className='mt-10 animate-fade-in' style={{ animationDelay: '0.3s' }}>
              <p
                className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                Languages I write
              </p>
              <div className='flex flex-wrap gap-2'>
                {langs.map(lang => (
                  <span
                    key={lang}
                    className="font-['DM_Sans'] px-4 py-1.5 rounded-full text-sm"
                    style={{
                      backgroundColor: 'var(--gold-soft)',
                      color: 'var(--gold-primary)',
                      border: '1px solid rgba(212,175,55,0.2)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — facts + currently */}
          <div className='flex flex-col gap-6'>

            {/* "Beyond the screen" fact cards */}
            <p
              className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase animate-fade-in"
              style={{ color: 'var(--text-muted)', animationDelay: '0.15s' }}
            >
              Beyond the screen
            </p>

            <div className='grid grid-cols-2 gap-4'>
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className='glass p-5 flex flex-col gap-2 animate-fade-in'
                  style={{ animationDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className='text-2xl'>{f.emoji}</span>
                  <p
                    className="font-['DM_Sans'] text-sm font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {f.label}
                  </p>
                  <p
                    className="font-['DM_Sans'] text-xs leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Currently card */}
            <div
              className='glass p-6 animate-fade-in'
              style={{ animationDelay: '0.5s' }}
            >
              <p
                className="font-['DM_Sans'] text-[11px] tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--gold-primary)' }}
              >
                ◉ Currently
              </p>
              <ul className="font-['DM_Sans'] space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {[
                  '🛠  Building personal projects & open source tools',
                  '📖  Learning Japanese (N4 → N3)',
                  '🚀  Open to contract & full-time work',
                  '🦀  Going deeper into web and systems programming',
                ].map(item => (
                  <li key={item} className='flex items-start gap-2 leading-relaxed'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}