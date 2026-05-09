import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, id, ...props }: InputProps) {

    const inputId = id || label.toLowerCase().replace(/\s/g, "-");

    return (
        <input
            id={inputId}
            {...props}
            placeholder=" "
            className="
            peer
            w-full h-12
            px-4
            rounded-2xl
            border-2
            bg-background
            text-text
            outline-none
            transition-all
            focus:border-secondary
            "
        />
    );
}