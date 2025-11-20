
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./UI/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Inicio', url: '#', icon: Home },
    { name: 'Productos', url: '#', icon: User },
    { name: 'carrito', url: '#', icon: Briefcase },
    { name: 'Sobre Nosotros', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
}