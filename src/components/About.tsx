const facts = [
  { emoji: '🎮', label: 'Gamer', desc: 'Exploring worlds when not building them' },
  { emoji: '🍵', label: 'Tea addict', desc: 'Chai fuels every late-night debug session' },
  { emoji: '🇯🇵', label: 'Learning JP', desc: 'Slowly conquering 漢字' },
  { emoji: '🎵', label: 'Music', desc: 'Lo-fi beats on repeat while coding' },
]

const langs = ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 'Rust']

export const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        I got into coding because I wanted to build things. Games I couldn't afford,
        tools I couldn't find, and ideas I couldn't stop thinking about.
      </p>
      <p>
        I work with Java, JavaScript, C, C++, and Rust, and I build full-stack web apps
        and desktop software.
      </p>
      <p>Languages I write: {langs.join(", ")}</p>
      <h3>Beyond the screen</h3>
      {facts.map(fact => (
        <p key={fact.label}>
          {fact.emoji} <strong>{fact.label}</strong>: {fact.desc}
        </p>
      ))}
      <h3>Currently</h3>
      <ul>
        <li>Building personal projects and open source tools</li>
        <li>Learning Japanese</li>
        <li>Open to contract and full-time work</li>
        <li>Going deeper into web and systems programming</li>
      </ul>
    </section>
  )
}