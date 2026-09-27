import { Zap, Radar, Layers, Sun, Package, SlidersHorizontal, BatteryCharging } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import productoImg from '../assets/images/producto.jpeg'
import '../css/Technology.css'

export default function Technology() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="tech-section" id="tecnologia">
      <div className="tech-container">
        
        {/* Encabezado */}
        <div className="tech-header">
          <div className="tech-pill">
            <Zap className="w-4 h-4" />
            <span>{isEn ? 'CONCEPTUAL ARCHITECTURE' : 'ARQUITECTURA CONCEPTUAL'}</span>
          </div>
          <h2 className="tech-title">{isEn ? 'Technology that simplifies your routine.' : 'Tecnología que simplifica tu rutina.'}</h2>
          <p className="tech-subtitle">
            {isEn 
              ? 'Ergonomic engineering and proximity sensors for a frictionless laundry experience.' 
              : 'Ingeniería ergonómica y sensores de proximidad para una experiencia de lavandería sin fricción.'}
          </p>
        </div>
        
        {/* Cuadrícula de contenido */}
        <div className="tech-grid">
          
          {/* Columna Izquierda (Tarjetas) */}
          <div className="tech-cards-column">
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <Radar className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'Smart Sensors' : 'Sensores inteligentes'}</h3>
                <p className="tech-card-desc">{isEn ? 'Contactless proximity opening for maximum hygiene.' : 'Apertura por proximidad sin contacto físico para máxima higiene.'}</p>
              </div>
              {/* Conector Curvo Superior Izquierdo */}
              <svg className="absolute hidden lg:block w-16 h-16 text-cyan-500/60 left-full top-1/2 ml-2 overflow-visible" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 0 10 C 32 10, 32 60, 64 60" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="64" cy="60" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <Layers className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'Automatic Sorting' : 'Clasificación automática'}</h3>
                <p className="tech-card-desc">{isEn ? 'Intuitive organization for light, dark, or delicate clothes.' : 'Organización intuitiva para prendas claras, oscuras o delicadas.'}</p>
              </div>
              {/* Conector Recto Medio Izquierdo */}
              <svg className="absolute hidden lg:block w-16 h-4 text-cyan-500/60 left-full top-1/2 ml-2 -mt-2 overflow-visible" viewBox="0 0 64 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 0 8 L 64 8" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="64" cy="8" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <Sun className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'LED Indicators' : 'Indicadores LED'}</h3>
                <p className="tech-card-desc">{isEn ? 'Subtle lights that communicate fill status and active mode.' : 'Luces sutiles que comunican estado de llenado y modo activo.'}</p>
              </div>
              {/* Conector Curvo Inferior Izquierdo */}
              <svg className="absolute hidden lg:block w-16 h-16 text-cyan-500/60 left-full bottom-1/2 ml-2 overflow-visible" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 0 54 C 32 54, 32 4, 64 4" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="64" cy="4" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
          </div>
          
          {/* Centro (Imagen con resplandor) */}
          <div className="tech-center">
            <div className="tech-glow"></div>
            <div className="tech-image-container relative z-10">
              <img src={productoImg} alt="Tecnología SmartClothes" className="tech-image" />
              <div className="tech-image-overlay">
                <div className="tech-image-status">
                  <div className="tech-status-dot"></div>
                  Dual-Zone Active
                </div>
                <div className="tech-image-version">Concept Prototype v2.4</div>
              </div>
            </div>
          </div>
          
          {/* Columna Derecha (Tarjetas) */}
          <div className="tech-cards-column mt-8 lg:mt-0">
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <Package className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'Independent Compartments' : 'Compartimentos independientes'}</h3>
                <p className="tech-card-desc">{isEn ? 'Removable inner bags with ergonomic handles for direct washing.' : 'Bolsas interiores extraíbles con asas ergonómicas para lavado directo.'}</p>
              </div>
              {/* Conector Curvo Superior Derecho */}
              <svg className="absolute hidden lg:block w-16 h-16 text-cyan-500/60 right-full top-1/2 mr-2 overflow-visible" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 64 10 C 32 10, 32 60, 0 60" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="0" cy="60" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <SlidersHorizontal className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'Smart Control' : 'Control inteligente'}</h3>
                <p className="tech-card-desc">{isEn ? 'One-touch capacitive touch panel with haptic feedback.' : 'Panel táctil capacitivo de un toque con feedback háptico.'}</p>
              </div>
              {/* Conector Recto Medio Derecho */}
              <svg className="absolute hidden lg:block w-16 h-4 text-cyan-500/60 right-full top-1/2 mr-2 -mt-2 overflow-visible" viewBox="0 0 64 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 64 8 L 0 8" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="0" cy="8" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
            <div className="relative">
              <div className="tech-card">
                <div className="tech-card-icon-wrapper">
                  <BatteryCharging className="tech-card-icon" />
                </div>
                <h3 className="tech-card-title">{isEn ? 'Low Power Design' : 'Diseño de bajo consumo'}</h3>
                <p className="tech-card-desc">{isEn ? 'Long-lasting USB-C rechargeable battery for up to 90 days.' : 'Batería de larga duración recargable por USB-C de hasta 90 días.'}</p>
              </div>
              {/* Conector Curvo Inferior Derecho */}
              <svg className="absolute hidden lg:block w-16 h-16 text-cyan-500/60 right-full bottom-1/2 mr-2 overflow-visible" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4">
                <path d="M 64 54 C 32 54, 32 4, 0 4" style={{ animation: 'pulse-subtle 3s infinite' }} />
                <circle cx="0" cy="4" r="3" fill="#06b6d4" stroke="none" style={{ animation: 'pulse-subtle 1.5s infinite' }} />
              </svg>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
