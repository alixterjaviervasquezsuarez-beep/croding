import { Sparkles, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import '../css/Footer.css'

export default function Footer() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Columna 1: Marca y descripción */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Sparkles className="w-5 h-5 text-gray-950" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SMART<span className="font-normal text-gray-300">CLOTHES</span>
              </span>
            </div>
            <p className="footer-desc">
              {isEn 
                ? 'Technology for a more organized life. Redefining garment care and sorting with timeless design.' 
                : 'Tecnología para una vida más organizada. Redefiniendo el cuidado y la clasificación de tus prendas con diseño atemporal.'}
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="footer-nav-col">
            <h4 className="footer-title">{isEn ? 'NAVIGATION' : 'NAVEGACIÓN'}</h4>
            <ul className="footer-links">
              <li><a href="/#producto" className="footer-link">{isEn ? 'Product' : 'Producto'}</a></li>
              <li><a href="/#tecnologia" className="footer-link">{isEn ? 'Technology' : 'Tecnología'}</a></li>
              <li><a href="/#como-funciona" className="footer-link">{isEn ? 'How it works' : 'Cómo funciona'}</a></li>
              <li><a href="/#soporte" className="footer-link">{isEn ? 'Technical Support' : 'Soporte técnico'}</a></li>
              <li><a href="/#terminos" className="footer-link">{isEn ? 'Terms & Conditions' : 'Términos y condiciones'}</a></li>
              <li><a href="/#privacidad" className="footer-link">{isEn ? 'Privacy' : 'Privacidad'}</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes */}
          <div className="footer-social-col">
            <h4 className="footer-title">{isEn ? 'CONNECT' : 'CONÉCTATE'}</h4>
            <ul className="footer-links">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="footer-link">
                  <Video className="w-4 h-4 mr-2.5 opacity-70" />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p>© 2026 SmartClothes Inc. {isEn ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          <p className="footer-bottom-tagline">{isEn ? 'Minimalist design inspired by cutting-edge technology.' : 'Diseño minimalista inspirado en tecnología de vanguardia.'}</p>
        </div>

      </div>
    </footer>
  )
}
