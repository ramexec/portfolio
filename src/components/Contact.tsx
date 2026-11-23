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
    <section className="py-16 max-[600px]:py-11" id="contact">
      <h2 className="mb-7 text-4xl font-semibold leading-tight text-yellow-300"><span className="text-dracula-comment">03.</span> Contact</h2>
      <p>
        <a href="mailto:rahulanthonymondal@gmail.com">rahulanthonymondal@gmail.com</a>
      </p>
      <p>Available for full-time, contract, and interesting collaborations. Based in Kolkata, India; happy to work remotely.</p>
      <h3 className="mb-4 mt-8 text-2xl font-semibold text-dracula-orange">Find me on</h3>
      <div className="flex flex-col items-start gap-2">
        {socials.map(social => (
          <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.label}: {social.handle}
          </a>
        ))}
      </div>
      <footer className="mt-12 border-t border-dracula-line pt-5 text-sm text-dracula-comment">
        <p>Rahul Mondal · Portfolio 2026</p>
      </footer>
    </section>
  )
}