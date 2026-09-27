import { Star, Check, Shield, Package, Cpu, Droplets } from 'lucide-react'
import productoImg from '../assets/images/producto.jpeg'
import '../css/ProductDetail.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'

export default function ProductDetail() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const [selectedColor, setSelectedColor] = useState('blanco');
  const [selectedSize, setSelectedSize] = useState('standard');

  return (
    <div className="pdp-container">
      {/* Breadcrumbs & Top Tags */}
      <div className="pdp-header">
        <div className="pdp-breadcrumbs">
          <a href="/">{isEn ? 'Home' : 'Inicio'}</a> / <a href="/">{isEn ? 'Store' : 'Tienda'}</a> / <span className="font-bold">{isEn ? 'SmartClothes Hamper' : 'Cesto Inteligente SmartClothes'}</span>
        </div>
        <div className="pdp-top-tags">
          <span className="pdp-tag">{isEn ? 'NEW 2026' : 'NOVEDAD 2026'}</span>
          <span className="pdp-tag-dot">•</span>
          <span className="pdp-tag">{isEn ? 'EXCLUSIVE LAUNCH' : 'LANZAMIENTO EXCLUSIVO'}</span>
        </div>
      </div>

      <div className="pdp-grid">
        
        {/* Lado Izquierdo: Galería y Especificaciones */}
        <div className="pdp-gallery-col">
          
          <div className="pdp-main-image-container">
            {/* Etiquetas sobre la imagen */}
            <div className="pdp-image-tags">
              <span className="pdp-image-tag glass">{isEn ? 'DUAL TOF SENSOR 25CM' : 'SENSOR DUAL TOF 25CM'}</span>
              <span className="pdp-image-tag dark">{isEn ? 'Soft-Touch Matte Finish' : 'Acabado Soft-Touch Matte'}</span>
            </div>
            <div className="pdp-image-tag-right">
               <span className="pdp-image-tag glass-subtle">{isEn ? '360° View' : 'Vista 360°'}</span>
            </div>

            <img src={productoImg} alt="SmartClothes" className="pdp-main-image" />

            {/* Overlay inferior de la imagen */}
            <div className="pdp-image-overlay">
              <div className="pdp-overlay-left">
                <Cpu className="w-5 h-5 text-green-500 animate-pulse" />
                <div>
                  <div className="font-bold text-gray-900">{isEn ? 'Infrared Proximity Radar' : 'Radar Infrarrojo de Proximidad'}</div>
                  <div className="text-gray-600 text-[11px] sm:text-xs">{isEn ? 'Ultra-quiet opening: 0.3 seconds' : 'Apertura ultra silenciosa: 0.3 segundos'}</div>
                </div>
              </div>
              <div className="font-black text-gray-900 tracking-wider hidden sm:block">{isEn ? 'ACTIVE' : 'ACTIVO'}</div>
            </div>
          </div>

          {/* Miniaturas / Features */}
          <div className="pdp-thumbnails">
            <div className="pdp-thumb-card active">
               <img src={productoImg} alt="thumb" className="w-full h-16 sm:h-20 object-cover rounded-lg mb-2 mix-blend-multiply" />
               <span className="text-[10px] sm:text-xs font-semibold text-center leading-tight">{isEn ? 'Closed Front' : 'Frente cerrado'}</span>
            </div>
            <div className="pdp-thumb-card">
               <div className="pdp-thumb-icon"><Package className="w-5 h-5" /></div>
               <span className="text-[10px] sm:text-xs font-semibold">35L + 35L</span>
               <span className="text-[9px] sm:text-[10px] text-gray-500">{isEn ? 'Dual Lid' : 'Doble tapa'}</span>
            </div>
            <div className="pdp-thumb-card">
               <div className="pdp-thumb-icon"><Droplets className="w-5 h-5" /></div>
               <span className="text-[10px] sm:text-xs font-semibold">{isEn ? 'Washable Canvas' : 'Lona lavable'}</span>
               <span className="text-[9px] sm:text-[10px] text-gray-500">{isEn ? '2x Bags' : 'Bolsas 2x'}</span>
            </div>
            <div className="pdp-thumb-card">
               <div className="pdp-thumb-icon"><Shield className="w-5 h-5" /></div>
               <span className="text-[10px] sm:text-xs font-semibold">{isEn ? 'Guide LED' : 'LED Guía'}</span>
               <span className="text-[9px] sm:text-[10px] text-gray-500">{isEn ? 'Night Light' : 'Luz nocturna'}</span>
            </div>
          </div>

          {/* Especificaciones */}
          <div className="pdp-specs-table">
            <div className="pdp-specs-header">
              <span className="text-sm font-semibold">{isEn ? 'Physical Dimensions & Net Capacity' : 'Cotas Físicas & Capacidad Neta'}</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider hidden sm:block">{isEn ? 'CERTIFIED SPECS' : 'SPECS CERTIFICADAS'}</span>
            </div>
            <div className="pdp-specs-grid">
              <div className="pdp-spec-item">
                <span className="pdp-spec-label">{isEn ? 'HEIGHT' : 'ALTURA'}</span>
                <span className="pdp-spec-value">62 cm</span>
              </div>
              <div className="pdp-spec-item">
                <span className="pdp-spec-label">{isEn ? 'WIDTH' : 'ANCHO'}</span>
                <span className="pdp-spec-value">50 cm</span>
              </div>
              <div className="pdp-spec-item">
                <span className="pdp-spec-label">{isEn ? 'DEPTH' : 'PROFUNDIDAD'}</span>
                <span className="pdp-spec-value">30 cm</span>
              </div>
              <div className="pdp-spec-item">
                <span className="pdp-spec-label">{isEn ? 'TOTAL VOLUME' : 'VOLUMEN TOTAL'}</span>
                <span className="pdp-spec-value">70 L</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lado Derecho: Detalles de Compra */}
        <div className="pdp-details-col">
          
          <div className="pdp-rating">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-gray-900 ml-2">4.9</span>
            <span className="text-gray-500 ml-1">· {isEn ? '128 verified reviews' : '128 valoraciones verificadas'}</span>
          </div>

          <h1 className="pdp-title">{isEn ? 'SmartClothes Sorting Hamper' : 'SmartClothes Cesto Inteligente Clasificador'}</h1>
          <p className="pdp-desc">
            {isEn 
              ? 'Autonomous separation of light and dark clothes with contactless proximity sensor opening and airtight odor sealing.' 
              : 'Separación autónoma de prendas claras y oscuras con apertura por sensor de proximidad sin contacto físico y sellado hermético antiolores.'}
          </p>

          <div className="pdp-price-box">
            <div className="flex flex-wrap items-end gap-3 mb-2">
               <span className="text-3xl font-extrabold text-gray-900">S/ 499.00</span>
               <span className="text-lg text-gray-400 line-through pb-0.5">S/ 599.00</span>
               <span className="text-xs font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded-md pb-1 uppercase tracking-tight">{isEn ? 'SAVE S/ 100.00 (-17%)' : 'AHORRAS S/ 100.00 (-17%)'}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 border-t border-gray-200 pt-3 mt-3">
              <Shield className="w-4 h-4 text-gray-700" /> {isEn ? 'Up to' : 'Hasta'} <strong>{isEn ? '3 interest-free installments' : '3 cuotas sin intereses'}</strong> {isEn ? 'of' : 'de'} <strong>S/ 166.33</strong> {isEn ? 'with selected cards.' : 'con tarjetas seleccionadas.'}
            </div>
          </div>

          {/* Opciones */}
          <div className="pdp-options">
            
            {/* Color */}
            <div className="pdp-option-group">
              <div className="pdp-option-header">
                <span className="font-bold text-sm">{isEn ? '1. Finish & Tones' : '1. Acabado & Tonos'}</span>
                <span className="text-xs md:text-sm text-gray-500">{isEn ? 'Nordic White & Carbon Dual Lid' : 'Blanco Nórdico & Tapa Carbón Dual'}</span>
              </div>
              <div className="pdp-option-cards">
                <div className={`pdp-option-card ${selectedColor === 'blanco' ? 'active' : ''}`} onClick={() => setSelectedColor('blanco')}>
                  <div className="w-6 h-6 rounded-full border border-gray-200 shadow-inner flex items-center justify-center overflow-hidden shrink-0">
                    <div className="w-1/2 h-full bg-white"></div>
                    <div className="w-1/2 h-full bg-gray-900"></div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{isEn ? 'White & Carbon' : 'Blanco & Carbón'}</div>
                    <div className="text-xs text-gray-500">{isEn ? 'Standard Original' : 'Original de serie'}</div>
                  </div>
                </div>
                <div className={`pdp-option-card ${selectedColor === 'gris' ? 'active' : ''}`} onClick={() => setSelectedColor('gris')}>
                  <div className="w-6 h-6 rounded-full bg-gray-500 shadow-inner shrink-0"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{isEn ? 'Titanium Gray' : 'Gris Titanio'}</div>
                    <div className="text-xs text-gray-500">{isEn ? 'Anodized Finish' : 'Acabado anodizado'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capacidad */}
            <div className="pdp-option-group">
              <div className="pdp-option-header">
                <span className="font-bold text-sm">{isEn ? '2. Capacity & Filtration' : '2. Capacidad & Filtración'}</span>
                <span className="text-[10px] font-bold tracking-wider text-gray-400">{isEn ? 'SELECTION REQUIRED' : 'SELECCIÓN REQUERIDA'}</span>
              </div>
              <div className="pdp-option-radios">
                
                <div className={`pdp-radio-card ${selectedSize === 'standard' ? 'active' : ''}`} onClick={() => setSelectedSize('standard')}>
                   <div className="pdp-radio-indicator"><div className="inner"></div></div>
                   <div className="flex-1 w-full">
                     <div className="flex flex-wrap justify-between items-start gap-2">
                       <span className="font-bold text-sm text-gray-900">{isEn ? 'Dual Standard (70 Liters)' : 'Dual Standard (70 Litros)'}</span>
                       <span className="font-bold text-sm text-gray-900">{isEn ? 'Included' : 'Incluido'}</span>
                     </div>
                     <div className="text-xs text-gray-500 mt-1">{isEn ? '2 x 35L compartments · Ideal for 1 to 3 people' : '2 compartimentos de 35L · Ideal 1 a 3 personas'}</div>
                   </div>
                </div>

                <div className={`pdp-radio-card ${selectedSize === 'pro' ? 'active' : ''}`} onClick={() => setSelectedSize('pro')}>
                   <div className="pdp-radio-indicator"><div className="inner"></div></div>
                   <div className="flex-1 w-full">
                     <div className="flex flex-wrap justify-between items-start gap-2">
                       <span className="font-bold text-sm text-gray-900 flex items-center">
                         {isEn ? 'Dual Family Pro (90 Liters)' : 'Dual Family Pro (90 Litros)'} 
                         <span className="text-[10px] text-gray-500 bg-gray-100 border border-gray-200 px-1 rounded ml-2">PLUS</span>
                       </span>
                       <span className="font-bold text-sm text-gray-900">+ S/ 80.00</span>
                     </div>
                     <div className="text-xs text-gray-500 mt-1">{isEn ? 'Includes active carbon odor filter cartridge + 20L extra' : 'Incluye cartucho de carbón activo antiolores + 20L extra'}</div>
                   </div>
                </div>

              </div>
            </div>

          </div>

          {/* Qué incluye */}
          <div className="pdp-whats-included">
             <h4 className="font-bold text-sm mb-4 text-gray-900">{isEn ? 'In the official package:' : 'En el paquete oficial:'}</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" /> {isEn ? '1x SmartClothes Dual Hamper' : '1x Cesto SmartClothes Dual'}</div>
               <div className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" /> {isEn ? '2x Washable waterproof canvas bags' : '2x Bolsas lona impermeable lavable'}</div>
               <div className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" /> {isEn ? '1x 2m braided USB-C cable' : '1x Cable USB-C trenzado de 2m'}</div>
               <div className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" /> {isEn ? '1x Manual & Optimization Guide' : '1x Manual & Guía de optimización'}</div>
             </div>
          </div>
          
          {/* Botón CTA */}
          <div className="mt-8 pt-4 flex flex-col gap-3">
            <button onClick={() => addToCart(1)} className="w-full bg-gray-950 text-white rounded-[1rem] h-[3.5rem] font-bold text-lg hover:bg-gray-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              <Package className="w-5 h-5" /> {isEn ? 'Add to Cart' : 'Agregar al carrito'}
            </button>
            
            <button onClick={() => navigate('/checkout')} className="w-full bg-white border-2 border-gray-200 text-gray-900 rounded-[1rem] h-[3.5rem] font-bold text-lg hover:border-gray-950 hover:bg-gray-50 transition-all">
              {isEn ? 'Proceed to Quick Checkout' : 'Proceder al pago rápido'}
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
