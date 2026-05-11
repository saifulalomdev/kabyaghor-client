
export default function Divider({ children }: { children: string }) {
    return (
        <div className="flex items-center gap-3 text-muted text-xs">
            <div className="flex-1 h-px bg-border" />
            {children}
            <div className="flex-1 h-px bg-border" />
        </div>
    )
}
