export const Navbar = () => {
    return (
        <header className="border-b border-dracula-line py-[18px]">
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 max-[600px]:gap-x-4" aria-label="Main navigation">
                <a className="mr-auto text-lg font-semibold no-underline text-dracula-green max-[600px]:w-full" href="#">rahul@portfolio:~$</a>
                <a className="no-underline" href="#about">About</a>
                <a className="no-underline" href="#projects">Projects</a>
                <a className="no-underline" href="#contact">Contact</a>
            </nav>
        </header>
    );
};