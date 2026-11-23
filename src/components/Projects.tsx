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
    title: 'WslWrapper',
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
    title: 'E-Commerce',
    description:
      'E-Commerce app made with SpringBoot backend ',
    type: 'Web App',
    tags: ['SpringBoot','React', 'TypeScript', 'MySQL', 'JAVA', 'JavaScript'],
    image: `${import.meta.env.BASE_URL}projects/ecom.png`,
    github: 'https://github.com/ramexec/ecommerce_v1',
    featured: true,
  },
]

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map(project => (
        <article key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Type: {project.type}</p>
          <p>Technologies: {project.tags.join(", ")}</p>
          {project.github && (
            <p><a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
          )}
          {project.live && (
            <p><a href={project.live} target="_blank" rel="noopener noreferrer">Live</a></p>
          )}
        </article>
      ))}
    </section>
  )
}