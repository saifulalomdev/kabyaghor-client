import { Bell, Search, UserRound } from 'lucide-react'
import Button from './button'
import { Link } from 'react-router'

export default function Header() {

    return (
        <header className='w-full h-16 flex p-4 justify-between items-center'>

            <Link to="/notifications">
                <Button>
                    <Bell />
                </Button>
            </Link>
            <div className='flex gap-4'>

                <Link to="/search">
                    <Button>
                        <Search />
                    </Button>
                </Link>
                <Link to="/settings">
                    <Button>
                        <UserRound />
                    </Button>
                </Link>

            </div>
        </header>
    )
}
