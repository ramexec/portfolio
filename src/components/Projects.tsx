type Project = {
  title: string
  description: string
  type: 'Web App' | 'Desktop' | 'Mobile' | 'CLI' | 'Library'
  tags: string[]
  image: string
  github?: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'wsl-wrapper',
    description:
      'A developer tool to manage WSL Instance with the help of a GUI',
    type: 'Desktop',
    tags: ['Node', 'tauri', 'Rust', 'Windows'],
    image: `${import.meta.env.BASE_URL}projects/wsl_wrapper.png`,
    github: 'https://github.com/ramexec/wsl_wrapper',
    // live: '#',
    featured: true,
  },
  {
    title: 'e-commerce',
    description:
      'E-Commerce app made with SpringBoot backend ',
    type: 'Web App',
    tags: ['SpringBoot','React', 'TypeScript', 'MySQL', 'JAVA', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}projects/ecom.png`,
    github: 'https://github.com/ramexec/ecommerce_v1',
    featured: true,
  },
  {
    title: 'jisho-to-anki',
    description:
      'A simple app to make making cards easier ...  ',
    type: 'Web App',
    tags: ['React', 'JavaScript' , 'ai-assisted'],
    image: `${import.meta.env.BASE_URL}projects/ecom.png`,
    github: 'https://github.com/ramexec/ecommerce_v1',
    featured: true,
  },
]

export const Projects = () => {
  return (
    <section className="border-b border-dracula-line py-16 max-[600px]:py-11" id="projects">
      <h2 className="mb-7 text-4xl font-semibold leading-tight text-yellow-300"><span className="text-dracula-comment">02.</span> Projects</h2>
      <div className="grid gap-4">
        {projects.map(project => (
          <article className="border border-dracula-line p-5" key={project.title}>
            <div className="text-xs uppercase tracking-[0.08em] text-dracula-green">{project.type}</div>
            <h3 className="my-2 text-3xl font-semibold text-dracula-purple">{project.title}</h3>
            <p>{project.description}</p>
            <p className="text-dracula-green">{project.tags.join(" | ")}</p>
            {project.github && (
              <a className="mr-4" href={project.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
            )}
            {project.live && (
              <a className="mr-4" href={project.live} target="_blank" rel="noopener noreferrer">Live →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}