import { Link } from 'lucide-react'
import React, { useState } from 'react'

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
    image: '/projects/wsl_wrapper.png',
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
    image: '/projects/ecom.png',
    github: 'https://github.com/ramexec/my_page',
    featured: true,
  },
]

const typeColors: Record<Project['type'], string> = {
  'Web App': '#3b82f6',
  'Desktop': '#8b5cf6',
  'Mobile':  '#10b981',
  'CLI':     '#f59e0b',
  'Library': '#ec4899',
}

const allTypes = ['All', 'Web App', 'Desktop', 'Mobile', 'CLI', 'Library'] as const

const GithubIcon = () => (
  <img src='/svg/git.svg' alt='GitHub' className='w-5 h-5 brightness-0 invert opacity-70 group-hover:opacity-100 transition' />
)

const LinkIcon = () => (
  <Link width='15' height='15'/>
)

/* ── Featured card — wide horizontal ── */
function FeaturedCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className='glass overflow-hidden flex flex-col md:flex-row animate-fade-in transition-all duration-300 cursor-default'
      style={{
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(201,168,76,0.1)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image */}
      <div className='relative md:w-[42%] h-56 md:h-auto overflow-hidden shrink-0'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-500'
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.75)' }}
        />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(to right, transparent 50%, rgba(10,9,6,0.65) 100%)' }} />
        {/* type badge */}
        <span
          className="absolute top-4 left-4 font-['DM_Sans'] text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: typeColors[project.type] + '22',
            color: typeColors[project.type],
            border: `1px solid ${typeColors[project.type]}44`,
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.type}
        </span>
      </div>

      {/* content */}
      <div className='flex flex-col justify-between gap-5 p-7 flex-1'>
        <div>
          <div className='flex items-start justify-between gap-3 mb-3'>
            <h3
              className="font-['Cormorant_Garamond'] font-light text-2xl leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
            <div className='flex items-center gap-3 shrink-0 mt-1'>
              {project.github && (
                <a href={project.github} target='_blank' rel='noopener noreferrer'
                  className='opacity-35 hover:opacity-100 transition-opacity duration-200'
                  style={{ color: 'var(--text-primary)' }}>
                  <GithubIcon />
                </a>
              )}
              {project.live && (
                <a href={project.live} target='_blank' rel='noopener noreferrer'
                  className='opacity-35 hover:opacity-100 transition-opacity duration-200'
                  style={{ color: '#c9a84c' }}>
                  <LinkIcon />
                </a>
              )}
            </div>
          </div>
          <p className="font-['DM_Sans'] text-sm leading-[1.8]" style={{ color: 'rgba(245,240,232,0.5)' }}>
            {project.description}
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-['DM_Sans'] text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(201,168,76,0.08)',
                color: '#c9a84c',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* regular cards */
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className='glass overflow-hidden flex flex-col animate-fade-in transition-all duration-300 cursor-default'
      style={{
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(201,168,76,0.08)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image */}
      <div className='relative h-44 overflow-hidden shrink-0'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-500'
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)', filter: 'brightness(0.7)' }}
        />
        <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, transparent 35%, rgba(10,9,6,0.75) 100%)' }} />
        <span
          className="absolute top-3 left-3 font-['DM_Sans'] text-[10px] tracking-[0.18em] uppercase font-medium px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: typeColors[project.type] + '22',
            color: typeColors[project.type],
            border: `1px solid ${typeColors[project.type]}44`,
            backdropFilter: 'blur(8px)',
          }}
        >
          {project.type}
        </span>
      </div>

      {/* content */}
      <div className='flex flex-col justify-between gap-4 p-5 flex-1'>
        <div>
          <div className='flex items-start justify-between gap-2 mb-2'>
            <h3
              className="font-['Cormorant_Garamond'] font-light text-xl leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
            <div className='flex items-center gap-2.5 shrink-0 mt-0.5'>
              {project.github && (
                <a href={project.github} target='_blank' rel='noopener noreferrer'
                  className='opacity-35 hover:opacity-100 transition-opacity duration-200'
                  style={{ color: 'var(--text-primary)' }}>
                  <GithubIcon />
                </a>
              )}
              {project.live && (
                <a href={project.live} target='_blank' rel='noopener noreferrer'
                  className='opacity-35 hover:opacity-100 transition-opacity duration-200'
                  style={{ color: '#c9a84c' }}>
                  <LinkIcon />
                </a>
              )}
            </div>
          </div>
          <p className="font-['DM_Sans'] text-sm leading-[1.75]" style={{ color: 'rgba(245,240,232,0.5)' }}>
            {project.description}
          </p>
        </div>

        <div className='flex flex-wrap gap-1.5'>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-['DM_Sans'] text-xs px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: 'rgba(201,168,76,0.08)',
                color: '#c9a84c',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main section ── */
export const Projects = () => {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)
  const featured = filtered.filter(p => p.featured)
  const rest     = filtered.filter(p => !p.featured)

  return (
    <section
      id='projects'
      className='relative px-6 py-28 overflow-hidden'
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* subtle bg */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div
          className='absolute inset-0'
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 60%)' }}
        />
      </div>

      <div className='relative z-10 max-w-[80rem] mx-auto'>

        {/* ── Header ── */}
        <div
          className='flex items-center gap-3 mb-6 animate-fade-in'
        >
          <span className='inline-block w-10 h-px opacity-80' style={{ backgroundColor: '#c9a84c' }} />
          <p className="font-['DM_Sans'] text-[11px] font-medium tracking-[0.25em] uppercase" style={{ color: '#c9a84c' }}>
            What I've built
          </p>
        </div>

        <h2
          className="font-['Cormorant_Garamond'] font-light text-5xl md:text-6xl leading-[1.05] mb-4 animate-fade-in"
          style={{ color: '#f5f0e8', animationDelay: '0.08s' }}
        >
          My{' '}
          <em className='italic' style={{ color: '#e8d08a' }}>Projects.</em>
        </h2>

        <p
          className="font-['DM_Sans'] text-[14px] leading-relaxed mb-12 max-w-lg animate-fade-in"
          style={{ color: 'rgba(245,240,232,0.45)', animationDelay: '0.15s' }}
        >
          A mix of things I've shipped — from web apps to desktop tools to CLI utilities.
          Some serious, some just for fun.
        </p>

        {/* ── Filter tabs ── */}
        <div className='flex flex-wrap gap-2 mb-14 animate-fade-in' style={{ animationDelay: '0.2s' }}>
          {allTypes.map(type => (
            <button
              key={type}
              onClick={() => setActive(type)}
              className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: active === type ? '#c9a84c'              : 'rgba(255,255,255,0.04)',
                color:           active === type ? '#0a0906'               : 'rgba(245,240,232,0.45)',
                border:          active === type ? '1px solid #c9a84c'     : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* ── Featured cards ── */}
        {featured.length > 0 && (
          <div className='flex flex-col gap-6 mb-6'>
            {featured.map(p => <FeaturedCard key={p.title} project={p} />)}
          </div>
        )}

        {/* ── Grid cards ── */}
        {rest.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {rest.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        )}

      </div>
    </section>
  )
}