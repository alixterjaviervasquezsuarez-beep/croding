import { Search, ShoppingBag, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/images/smartclothes.jpeg'
import '../css/Navbar.css'

export default function Navbar() {
  const { cartCount } = useCart()
  const { lang, toggleLanguage } = useLanguage()
  const navigate = useNavigate()
  
  const isEn = lang === 'en';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo-container cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src={logo} 
              alt="SmartClothes Logo" 
              className="navbar-logo"
            />
          </div>

          {/* Links */}
          <div className="navbar-links">
            <a href="/" className="navbar-link-active">{isEn ? 'Home' : 'Inicio'}</a>
            <a href="/#tecnologia" className="navbar-link">{isEn ? 'Technology' : 'Tecnología'}</a>
            <a href="/#como-funciona" className="navbar-link">{isEn ? 'How it works' : 'Cómo funciona'}</a>
            <a href="/#caracteristicas" className="navbar-link">{isEn ? 'Features' : 'Características'}</a>
            <a href="/#comprar" className="navbar-link">{isEn ? 'Buy' : 'Comprar'}</a>
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 mr-2 transition-colors uppercase tracking-wider">
              <Globe className="w-4 h-4" /> {isEn ? 'ES' : 'EN'}
            </button>
            <button className="navbar-search hidden sm:flex">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/checkout')} className="navbar-cart">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">{isEn ? 'Cart' : 'Carrito'}</span>
              <div className="navbar-cart-badge">{cartCount}</div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
