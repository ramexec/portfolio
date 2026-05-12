

type buttonProps = {

    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ onClick, children, className }: buttonProps) => {
    return (
        <button onClick={onClick}
            className={`cursor-pointer bg-[var(--gold-primary)] text-black hover:bg-[var(--gold-hover)] transition-all duration-200 px-5 py-2 rounded-full w-full font-bold ${className}`}>
            {children}
        </button>
    )
}
