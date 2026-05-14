import { Download } from "lucide-react"

const skills = ["C", "C++", "Java", "Javascript", "Python", "SQL", "Rust"]

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* bg */}
            <div className="absolute inset-0">
                <img
                    src={`${import.meta.env.BASE_URL}hero-bg.png`}
                    alt="hero-image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_50%,transparent_20%,#0a0906_78%)]" />
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0906]/90 via-transparent to-[#0a0906]/90" />
            </div>

            {/* floating dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "yellow",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* ── content ── */}
            <div className="relative z-10 container mx-auto px-5 pt-24 pb-32 flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

                {/* ── LEFT ── */}
                <div className="flex flex-col items-start">

                    {/* Eyebrow */}
                    <div
                        className="flex items-center gap-3 mb-6 font-['DM_Sans'] text-[11px] font-medium tracking-[0.25em] uppercase text-[#c9a84c]"
                        style={{ animation: "fade-in 0.8s ease 0.2s forwards", opacity: 0 }}
                    >
                        <span className="inline-block w-10 h-px bg-[#c9a84c] opacity-80" />
                        Portfolio · 2026
                    </div>

                    {/* Name */}
                    <h1
                        className="font-['Cormorant_Garamond'] font-light leading-[0.92] tracking-[-0.02em] text-[#f5f0e8] m-0 text-[clamp(52px,10vw,108px)]"
                        style={{ animation: "fade-in 1s ease 0.4s forwards", opacity: 0 }}
                    >
                        <em className="italic text-[#e8d08a]">Rahul<br />Mondal</em>
                    </h1>

                    {/* Subtitle */}
                    <div
                        className="flex items-center gap-4 mt-6 mb-8"
                        style={{ animation: "fade-in 0.9s ease 0.65s forwards", opacity: 0 }}
                    >
                        <span className="font-['Cormorant_Garamond'] text-lg sm:text-[22px] font-light italic text-[#8a8070] tracking-wide">
                            Software developer &amp; Designer
                        </span>
                        <span className="hidden sm:block flex-1 max-w-20 h-px bg-linear-to-r from-[#c9a84c] to-transparent opacity-50" />
                    </div>

                    {/* Description */}
                    <p
                        className="font-['DM_Sans'] text-[14px] sm:text-[15px] font-light leading-[1.75] text-[rgba(245,240,232,0.55)] max-w-[440px] mb-10"
                        style={{ animation: "fade-in 0.9s ease 0.85s forwards", opacity: 0 }}
                    >
                        Hi, I am a Software developer from Kolkata, India. I like to make software.
                        Nice to meet you!
                    </p>

                    {/* Buttons */}
                    <div
                        className="flex flex-wrap gap-3 items-center mb-8"
                        style={{ animation: "fade-in 0.9s ease 1.05s forwards", opacity: 0 }}
                    >
                        <button className="bg-[#c9a84c] text-[#0a0906] font-['DM_Sans'] text-[12px] font-medium tracking-[0.18em] uppercase px-7 sm:px-9 py-4 cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                            onClick={() => {
                                document.getElementById('projects')?.scrollIntoView({
                                    behavior: 'smooth',
                                })
                            }}>
                            View My Work
                        </button>
                        <a href={`${import.meta.env.BASE_URL}RMRESUME2026.pdf`} download="Rahul_Mondal_Resume.pdf">
                            <button className="bg-transparent text-[#f5f0e8] font-['DM_Sans'] text-[12px] font-light tracking-[0.18em] uppercase px-7 sm:px-8 py-[15px] border border-[rgba(245,240,232,0.2)] cursor-pointer transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]">
                                <span className="flex items-center gap-2">
                                    <Download size={18} />
                                    Resume
                                </span>
                            </button>
                        </a>
                    </div>

                    {/* Social links */}
                    <div
                        className="flex items-center gap-4"
                        style={{ animation: "fade-in 0.9s ease 1.2s forwards", opacity: 0 }}
                    >
                        <span className="text-base sm:text-lg text-[#669749] font-['DM_Sans'] tracking-wide">
                            Follow me:
                        </span>
                        {[
                            { icon: `${import.meta.env.BASE_URL}svg/git.svg`, href: "https://github.com/ramexec" },
                            { icon: `${import.meta.env.BASE_URL}svg/linkedin.svg`, href: "https://www.linkedin.com/in/rahul-mondal-479907219/" },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                            >
                                <img
                                    src={item.icon}
                                    alt="social icon"
                                    className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert opacity-90"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT — photo ── */}
                <div
                    className="flex items-center justify-center relative mt-12 lg:mt-0"
                    style={{ animation: "fade-in 1.1s ease 0.6s forwards", opacity: 0 }}
                >
                    <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
                        {/* corner brackets */}
                        <span className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#c9a84c] opacity-60" />
                        <span className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-[#c9a84c] opacity-60" />
                        <span className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-[#c9a84c] opacity-60" />
                        <span className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#c9a84c] opacity-60" />

                        {/* photo */}
                        <img
                            src={`${import.meta.env.BASE_URL}myself.png`}
                            alt="Portrait"
                            className="w-full h-full object-cover object-top brightness-75 contrast-105"
                        />

                        {/* floating badge */}
                        <div className="text-sm absolute -bottom-4 -right-4 glass rounded px-3 py-2 z-10 animate-float">
                            <span>Available for work</span>
                        </div>

                        {/* bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#0a0906] to-transparent" />
                    </div>
                </div>

                {/* ── Skills marquee — full width below both columns ── */}
                <div
                    className="lg:col-span-2 mt-16 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 animate-fade-in"
                    style={{ animationDelay: '0.6s' }}
                >
                    <p className="font-['DM_Sans'] text-sm sm:text-base text-[#8a8070] text-nowrap shrink-0">
                        Technologies I know
                    </p>
                    <div className="relative overflow-hidden w-full">
                        {/* left fade */}
                        <div className="absolute left-0 top-0 h-full w-8 bg-linear-to-r from-[#0a0906] to-transparent z-10 pointer-events-none" />
                        {/* right fade */}
                        <div className="absolute right-0 top-0 h-full w-8 bg-linear-to-l from-[#0a0906] to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-marquee gap-4 whitespace-nowrap">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="px-5 py-2 border border-[#c9a84c]/20 rounded-full bg-white/[0.03] text-[#f5f0e8] text-sm tracking-wide shrink-0"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                style={{ animation: "fade-in 1s ease 1.6s forwards", opacity: 0 }}
            >
                <span className="font-['DM_Sans'] text-[10px] tracking-[0.22em] uppercase text-[#8a8070]">
                    Scroll
                </span>
                <span className="w-px h-10 bg-linear-to-b from-[#c9a84c] to-transparent" />
            </div>

        </section>
    )
}