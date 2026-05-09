import { Bell, Search, UserRound } from 'lucide-react'
import IconWrapper from './icon-wrapper'

export default function Header() {
    return (
        <header className='w-full h-16 bg-surface flex p-4 justify-between items-center'>
            <IconWrapper>
                <Bell />
            </IconWrapper>
            <div className='flex gap-4'>
                <IconWrapper>
                    <Search />
                </IconWrapper>
                <IconWrapper>
                    <UserRound />
                </IconWrapper>
            </div>
        </header>
    )
}
