import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import GreetingButton from "./ui/GreetingsButton";

const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 bg-transparent py-5 right-0 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-[var(--gold-primary)]"> RaM </a>

                {/* Desktop */}
                <div className="items-center gap-1 md:flex hidden">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {links.map((e, index) => (
                            <a href={e.href} key={index} className="rounded-full px-4 py-2 hover:text-[var(--gold-hover)] hover:bg-[var(--gold-soft)]"> {e.label} </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex">
                    {/* <Button onClick={() => {}}>o(*￣▽￣*)ブ</Button> */}
                    <GreetingButton />
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden px-2 py-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {links.map((e, index) => (
                            <a href={e.href} key={index} onClick={() => setIsOpen(false)} className="rounded-full px-4 py-2 hover:text-[var(--gold-hover)] hover:bg-[var(--gold-soft)]"> {e.label} </a>
                        ))}
                        <Button onClick={() => {}}>Login</Button>
                    </div>
                </div>
            )}
        </header>
    );
};