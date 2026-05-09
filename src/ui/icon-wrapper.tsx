import React from 'react'

export default function IconWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className='size-12 bg-background rounded-full flex cursor-pointer items-center justify-center text-text'>
            {children}
        </div>
    )
}
