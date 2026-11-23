const skills = ["C", "C++", "Java", "Javascript", "Python", "SQL", "Rust"]

export const Hero = () => {
    return (
        <section>
            <h1>Rahul Mondal</h1>
            <p>Software developer &amp; Designer</p>
            <p>Hi, I am a software developer from Kolkata, India. I like to make software. Nice to meet you!</p>
            <p>
                <a href="#projects">View My Work</a>{" "}
                <a href={`${import.meta.env.BASE_URL}RMRESUME2026.pdf`} download="Rahul_Mondal_Resume.pdf">Download Resume</a>
            </p>
            <p>
                Follow me:{" "}
                <a href="https://github.com/ramexec" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
                <a href="https://www.linkedin.com/in/rahul-mondal-479907219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p>Technologies I know: {skills.join(", ")}</p>
        </section>
    )
}