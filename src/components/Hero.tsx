const skills = ["C", "C++", "Java", "Javascript", "Python", "SQL", "Rust"]

export const Hero = () => {
    return (
        <section className="flex min-h-[400px] flex-col justify-center border-b border-dracula-line py-16 max-[600px]:py-11">
            <p className="mb-2 text-sm text-dracula-green">~/hello</p>
            <h1 className="m-0 text-4xl font-semibold leading-tight text-dracula-fg sm:text-6xl">Rahul Mondal<span className="text-dracula-green" aria-hidden="true">_</span></h1>
            <p className="mb-6 mt-2 text-lg text-dracula-green">Software developer &amp; designer</p>
            <p>Hi, I am a software developer from Kolkata, India. I like to make software. Nice to meet you!</p>
            <div className="my-4 flex gap-3 max-[600px]:flex-col">
                <a className="border border-dracula-green bg-dracula-green px-4 py-2 text-center text-dracula-bg no-underline hover:border-dracula-cyan hover:bg-dracula-cyan" href="#projects">View my work</a>
                <a className="border border-dracula-comment px-4 py-2 text-center no-underline" href={`${import.meta.env.BASE_URL}RMRESUME2026.pdf`} download="Rahul_Mondal_Resume.pdf">Download resume</a>
            </div>
            <p>
                Follow me:{" "}
                <a href="https://github.com/ramexec" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
                <a href="https://www.linkedin.com/in/rahul-mondal-479907219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="mt-7 text-dracula-green"><span className="text-dracula-comment">Technologies:</span> {skills.join(" / ")}</p>
        </section>
    )
}