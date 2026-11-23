const facts = [
  { emoji: '🎮', label: 'Gamer', desc: 'Exploring worlds when not building them' },
  { emoji: '🍵', label: 'Tea addict', desc: 'Chai fuels every late-night debug session' },
  { emoji: '🇯🇵', label: 'Learning JP', desc: 'Slowly conquering 漢字' },
  { emoji: '🎵', label: 'Music', desc: 'Lo-fi beats on repeat while coding' },
]

const langs = ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 'Rust']

export const About = () => {
  return (
    <section className="border-b border-dracula-line py-16 max-[600px]:py-11" id="about">
      <h2 className="mb-7 text-4xl font-semibold leading-tight text-yellow-300"><span className="text-dracula-comment">01.</span> About</h2>
      <p>
        I got into coding because I wanted to build things. Games I couldn't afford,
        tools I couldn't find, and ideas I couldn't stop thinking about.
      </p>
      <p>
        I work with Java, JavaScript, C, C++, and Rust, and I build full-stack web apps
        and desktop software.
      </p>
      <h3 className="mb-4 mt-8 text-2xl font-semibold text-dracula-orange">Beyond the screen</h3>
      <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">
        {facts.map(fact => (
          <div className="flex flex-col border border-dracula-line p-4" key={fact.label}>
            <span className="mb-1 text-dracula-cyan">{fact.emoji} {fact.label}</span>
            <span>{fact.desc}</span>
          </div>
        ))}
      </div>
      <h3 className="mb-4 mt-8 text-2xl font-semibold text-dracula-orange">Currently</h3>
      <ul>
        <li>- Building personal projects and open source tools</li>
        <li>- Learning Japanese</li>
        <li>- Open to contract and full-time work</li>
        <li>- Going deeper into web and systems programming</li>
      </ul>
    </section>
  )
}