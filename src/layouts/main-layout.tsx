import { Outlet } from 'react-router'
import Header from '../ui/header'
import Tabs from '../ui/tabs'

export default function MainLayout() {
    return (
        <main className='bg-background max-w-md mx-auto h-dvh flex flex-col overflow-hidden pt-[env(safe-area-inset-top)]'>
            <Header/>
            <div className='flex-1 overflow-y-auto p-4 overflow-auto [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden'>
                <Outlet />
            </div>
            <Tabs/>
        </main>
    )
}
