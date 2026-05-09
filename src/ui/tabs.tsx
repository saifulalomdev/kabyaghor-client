import { Link } from 'react-router'
import { navItems } from '../constants/nav-items'
import IconWrapper from './icon-wrapper'

export default function Tabs() {
  return (
    <footer className='w-full bg-foreground h-16 p-4 flex justify-between items-center'>
      {navItems.map(({ Icon, path }, i) => (
        <Link to={path} key={i}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
        </Link>
      ))}
    </footer>
  )
}
