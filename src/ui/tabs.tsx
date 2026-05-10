import { Link, useLocation } from 'react-router'
import { navItems } from '../constants/nav-items'
import IconWrapper from './icon-wrapper'

export default function Tabs() {
  const location = useLocation()

  return (
    <div className="w-full h-16 px-4 flex justify-between items-center bg-background/80 backdrop-blur-md">
      {navItems.map(({ Icon, path }, i) => {
        const isActive = location.pathname === path

        return (
          <Link to={path} key={i}>
            <IconWrapper active={isActive}>
              <Icon size={22} />
            </IconWrapper>
          </Link>
        )
      })}
    </div>
  )
}
