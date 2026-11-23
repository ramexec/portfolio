const socials = [
  {
    label: 'GitHub',
    handle: '@ramexec',
    href: 'https://github.com/ramexec',
  },
  {
    label: 'LinkedIn',
    handle: 'Rahul Mondal',
    href: 'https://www.linkedin.com/in/rahul-mondal-479907219/',
  },
  {
    label: 'Email',
    handle: 'rahulanthonymondal@gmail.com',
    href: 'mailto:rahulanthonymondal@gmail.com',
  },
]

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        <a href="mailto:rahulanthonymondal@gmail.com">rahulanthonymondal@gmail.com</a>
      </p>
      <p>Available for full-time, contract, and interesting collaborations. Based in Kolkata, India; happy to work remotely.</p>
      <h3>Find me on</h3>
      {socials.map(social => (
        <p key={social.label}>
          <a href={social.href} target="_blank" rel="noopener noreferrer">
            {social.label}: {social.handle}
          </a>
        </p>
      ))}
      <footer>
        <p>Rahul Mondal · Portfolio 2026</p>
      </footer>
    </section>
  )
}