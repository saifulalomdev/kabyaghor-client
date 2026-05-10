import { Bell, Search, UserRound } from 'lucide-react'
import IconWrapper from './icon-wrapper'
import { Link } from 'react-router'

export default function Header() {

    return (
        <header className='w-full h-16 flex p-4 justify-between items-center'>

            <Link to="/notifications">
                <IconWrapper>
                    <Bell />
                </IconWrapper>
            </Link>
            <div className='flex gap-4'>

                <Link to="/search">
                    <IconWrapper>
                        <Search />
                    </IconWrapper>
                </Link>
                <Link to="/settings">
                    <IconWrapper>
                        <UserRound />
                    </IconWrapper>
                </Link>

            </div>
        </header>
    )
}
