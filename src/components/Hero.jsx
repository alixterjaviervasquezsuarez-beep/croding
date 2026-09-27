import { ArrowRight, Play, ShieldCheck, Truck, Cpu, BadgeCheck, Sparkles } from 'lucide-react'
import productoImg from '../assets/images/producto.jpeg'
import '../css/Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      {/* Decorative premium background elements */}
      <div className="hero-bg-cyan"></div>
      <div className="hero-bg-blue"></div>
      
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Text Content */}
          <div className="hero-content">
            {/* Pill */}
            <div className="hero-pill">
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span className="text-xs font-bold tracking-widest text-gray-800 uppercase">El futuro de tu ropa</span>
            </div>
            
            {/* Heading */}
            <h1 className="hero-title">
              Ordena tu ropa.<br />
              <span className="hero-title-highlight">Sin esfuerzo.</span>
            </h1>
            
            <p className="hero-description">
              Un cesto inteligente diseñado para clasificar tu ropa. Simplifica tu rutina diaria con elegancia y tecnología de doble compartimento.
            </p>
            
            {/* CTAs */}
            <div className="hero-buttons">
              <button className="hero-btn-primary">
                Comprar ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="hero-btn-secondary">
                <div className="hero-play-icon">
                  <Play className="w-3.5 h-3.5 text-gray-700 ml-0.5" />
                </div>
                Descubrir tecnología
              </button>
            </div>
            
            {/* Features/Trust */}
            <div className="hero-trust-badges">
              <div className="hero-trust-badge">
                <div className="hero-trust-icon">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-gray-600 tracking-wide">GARANTÍA 12 MESES</span>
              </div>
              <div className="hero-trust-badge">
                <div className="hero-trust-icon">
                  <Truck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-[11px] font-bold text-gray-600 tracking-wide">ENVÍO GRATIS</span>
              </div>
            </div>
          </div>
          
          {/* Image & Interactive Elements */}
          <div className="hero-image-wrapper">
            {/* Main Image Container */}
            <div className="hero-image-container">
              <img 
                src={productoImg} 
                alt="SmartClothes Cesto Inteligente" 
                className="hero-image"
              />
              
              {/* Floating Badge 1 - Top Left */}
              <div className="hero-floating-badge hero-badge-1">
                <div className="hero-badge-icon-dark">
                  2
                </div>
                <div>
                  <div className="hero-badge-text-title">2 compartimentos</div>
                  <div className="hero-badge-text-desc">Blanco & Negro / Color</div>
                </div>
              </div>
              
              {/* Floating Badge 2 - Middle Right */}
              <div className="hero-floating-badge hero-badge-2" style={{ animationDelay: '1.2s' }}>
                <div className="hero-badge-icon-cyan">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="hero-badge-text-title">Clasificación IA</div>
                  <div className="hero-badge-text-desc">Sensores ópticos</div>
                </div>
              </div>

              {/* Floating Badge 3 - Bottom Left */}
              <div className="hero-floating-badge hero-badge-3" style={{ animationDelay: '0.6s' }}>
                <div className="hero-badge-icon-amber">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="hero-badge-text-title">Diseño premium</div>
                  <div className="hero-badge-text-desc">Acabado mate antihuellas</div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
