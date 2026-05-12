import { Download, GitBranch } from "lucide-react"

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden ">

            {/* bg */}
            <div className="absolute inset-0">
                <img src="/hero-bg.png" alt="hero-image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_62%_50%,transparent_20%,#0a0906_78%)]" />
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0906]/90 via-transparent to-[#0a0906]/90" />
            </div>

            {/* green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"

                        style={{
                            backgroundColor: "yellow",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}>

                    </div>
                ))}
            </div>

            {/* content  */}
            <div className="container mx-auto grid lg:grid-cols-2 gap-12  pt-20 p-5 ">
                {/* left column */}
                <div className="">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-7 font-['DM_Sans'] text-[11px] font-medium tracking-[0.25em] uppercase text-[#c9a84c]"
                        style={{ animation: "fade-in 0.8s ease 0.2s forwards", opacity: 0 }}>
                        <span className="inline-block w-12 h-px bg-[#c9a84c] opacity-80" />
                        Portfolio · 2026
                    </div>

                    {/* Name */}
                    <h1
                        className="font-['Cormorant_Garamond'] font-light leading-[0.92] tracking-[-0.02em] text-[#f5f0e8] m-0 text-[clamp(62px,8vw,108px)]"
                        style={{ animation: "fade-in 1s ease 0.4s forwards", opacity: 0 }} >
                        <em className="italic text-[#e8d08a]">Rahul Mondal</em><br />
                    </h1>

                    {/* Subtitle row */}
                    <div
                        className="flex items-center gap-4 mt-8 mb-10"
                        style={{ animation: "fade-in 0.9s ease 0.65s forwards", opacity: 0 }}
                    >
                        <span className="font-['Cormorant_Garamond'] text-[22px] font-light italic text-[#8a8070] tracking-wide whitespace-nowrap">
                            Software developer &amp; Designer
                        </span>
                        <span className="flex-1 max-w-20 h-px bg-linear-to-r from-[#c9a84c] to-transparent opacity-50" />
                    </div>

                    {/* Description */}
                    <p
                        className="font-['DM_Sans'] text-[15px] font-light leading-[1.75] text-[rgba(245,240,232,0.55)] max-w-[440px] mb-12"
                        style={{ animation: "fade-in 0.9s ease 0.85s forwards", opacity: 0 }}
                    >
                        Hi, I am a Software developer from Kolkata india, i like to make software.
                        Nice to meet you !
                    </p>

                    {/* buttons */}
                    <div
                        className="flex gap-4 items-center"
                        style={{ animation: "fade-in 0.9s ease 1.05s forwards", opacity: 0 }}
                    >
                        <button className="bg-[#c9a84c] text-[#0a0906] font-['DM_Sans'] text-[12px] font-medium tracking-[0.18em] uppercase px-9 py-4 cursor-pointer transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                            View My Work
                        </button>
                        <button className="bg-transparent text-[#f5f0e8] font-['DM_Sans'] text-[12px] font-light tracking-[0.18em] uppercase px-8 py-[15px] border border-[rgba(245,240,232,0.2)] cursor-pointer transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]">
                            <span className="flex items-center justify-between gap-2">
                                <Download size={24} />
                                Resume
                            </span>
                        </button>
                    </div>

                    {/* external links */}
                    <div className="flex items-center gap-5 mt-8">
                        <span className="text-2xl text-[#669749] font-['DM_Sans'] tracking-wide z-11">
                            Follow me:
                        </span>

                        {[
                            { icon: "/svg/git.svg", href: "https://github.com/ramexec" },
                            { icon: "/svg/linkedin.svg", href: "https://linkedin.com" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-300"
                            >
                                <img
                                    src={item.icon}
                                    alt="social icon"
                                    className="w-6 h-6 brightness-0 invert opacity-90 hover:opacity-100 transition"
                                />
                            </a>
                        ))}
                    </div>

                </div>
                {/* right */}
                <div
                    className="flex justify-center items-end relative h-130" style={{ animation: "fade-in 1.1s ease 0.6s forwards", opacity: 0 }} >
                    <div className="relative w-[320px] h-115">

                        {/* gold glow */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-65 h-25 bg-[#c9a84c] opacity-[0.07] blur-[48px] rounded-full" />

                        {/* corner brackets */}
                        <span className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#c9a84c] opacity-60" />
                        <span className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-[#c9a84c] opacity-60" />
                        <span className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-[#c9a84c] opacity-60" />
                        <span className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#c9a84c] opacity-60" />

                        {/* photo */}
                        <img
                            src="/myself.png"
                            alt="Portrait"
                            className="w-full h-full object-cover object-top brightness-75 filter grayscale-15 contrast-105"
                        />

                        {/* bottom fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-[#0a0906] to-transparent" />

                    </div>
                </div>


            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                style={{ animation: "fade-in 1s ease 1.6s forwards", opacity: 0 }}
            >
                <span className="font-['DM_Sans'] text-[10px] tracking-[0.22em] uppercase text-[#8a8070]">
                    Scroll
                </span>
                <span
                    className="w-px h-12 bg-linear-to-b from-[#c9a84c] to-transparent"
                    style={{ animation: "fade-in 1.8s ease-in-out infinite" }}
                />
            </div>
        </section>
    )
}
