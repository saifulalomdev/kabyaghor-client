import { Mail, Search } from 'lucide-react'
import type { InputHTMLAttributes } from 'react';
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ type, ...props }: InputProps) {
    return (
        <div className="flex flex-1 items-center gap-2 bg-surface border border-border rounded-full px-4 py-3">
            {type === "search" && <Search size={18} className="text-muted" />}
            {type === "email" && <Mail size={18} className="text-muted" />}
            <input {...props} className="w-full bg-transparent outline-none text-sm placeholder:text-muted" />
        </div>
    )
}
