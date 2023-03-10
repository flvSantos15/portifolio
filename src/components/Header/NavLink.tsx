import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLinkContainer, MobileNavLinkContainer } from './styles'

interface Props {
  title: string
  path: string
  includes?: boolean
}

export function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter()

  const verifyIfIsActive = () => {
    if (includes) {
      return router.pathname.includes(path)
    }
    return path === router.pathname
  }

  const isActive = verifyIfIsActive()

  return (
    <>
      <NavLinkContainer isActive={isActive}>
        <Link href={path}>{title}</Link>
      </NavLinkContainer>

      <MobileNavLinkContainer>
        <Link href={path}>{title}</Link>
      </MobileNavLinkContainer>
    </>
  )
}
