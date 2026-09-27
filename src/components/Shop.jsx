import { Minus, Plus, ShoppingBag, Check, Clock, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'
import productoImg from '../assets/images/producto.jpeg'
import '../css/Shop.css'

export default function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { lang } = useLanguage();
  const isEn = lang === 'en';
  
  const [quantity, setQuantity] = useState(1);
  const basePrice = 499;

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => q > 1 ? q - 1 : 1);

  const handleAddToCart = () => {
    addToCart(quantity);
  };

  return (
    <section className="shop-section" id="comprar">
      <div className="shop-container">
        
        {/* Encabezado */}
        <div className="shop-header">
          <span className="shop-pill">{isEn ? 'LIMITED EDITION' : 'EDICIÓN LIMITADA'}</span>
          <h2 className="shop-title">{isEn ? 'Choose your SmartClothes' : 'Elige tu SmartClothes'}</h2>
          <p className="shop-subtitle">
            {isEn ? 'Start transforming your home today with our special launch price.' : 'Comienza a transformar tu hogar hoy con precio especial de lanzamiento.'}
          </p>
        </div>

        {/* Tarjeta de Producto */}
        <div className="shop-card">
          <div className="shop-grid">
            
            {/* Columna Izquierda (Imagen) */}
            <div className="shop-image-column">
              <div className="shop-image-wrapper">
                <span className="shop-badge-launch">{isEn ? 'LAUNCH' : 'LANZAMIENTO'}</span>
                <img src={productoImg} alt="SmartClothes" className="shop-image" />
              </div>
              <div className="shop-image-meta">
                <span className="shop-color-info">
                  <span className="text-gray-500 font-normal">{isEn ? 'Color:' : 'Color:'}</span> {isEn ? 'Nordic White & Carbon Lid' : 'Blanco Nórdico & Tapa Carbón'}
                </span>
                <span className="shop-stock-info">
                  <div className="shop-stock-dot"></div>
                  {isEn ? 'In stock (14 units left)' : 'En stock (14 unidades restantes)'}
                </span>
              </div>
            </div>

            {/* Columna Derecha (Detalles) */}
            <div className="shop-details-column">
              <h3 className="shop-product-title">{isEn ? 'SmartClothes Sorting Hamper' : 'Cesto Inteligente SmartClothes'}</h3>
              <p className="shop-product-desc">{isEn ? 'Autonomous dual system for fast and tidy sorting.' : 'Sistema autónomo dual para clasificación rápida y ordenada.'}</p>
              
              {/* Precio */}
              <div className="shop-price-container">
                <span className="shop-price-current">S/ 499.00</span>
                <span className="shop-price-old">S/ 599.00</span>
                <span className="shop-price-saving">{isEn ? 'Save S/ 100.00' : 'Ahorras S/ 100.00'}</span>
              </div>

              {/* Cantidad */}
              <div className="shop-quantity-section">
                <span className="shop-quantity-label">{isEn ? 'QUANTITY' : 'CANTIDAD'}</span>
                <div className="shop-quantity-controls">
                  <button onClick={decrease} className="shop-quantity-btn">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="shop-quantity-value">{quantity}</span>
                  <button onClick={increase} className="shop-quantity-btn">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Botón de compra */}
              <div className="flex flex-col gap-3">
                <button onClick={handleAddToCart} className="shop-add-btn group">
                  <ShoppingBag className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">{isEn ? 'Add to Cart' : 'Agregar al carrito'}</span>
                  <span className="text-gray-400 text-sm font-normal ml-1">· S/ {(basePrice * quantity).toFixed(2)}</span>
                </button>
                <button onClick={() => navigate('/producto')} className="w-full flex justify-center items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-[1rem] h-[3.5rem] font-bold text-[15px] transition-colors">
                  {isEn ? 'View full description & details' : 'Ver descripción y detalles completos'}
                </button>
              </div>

              {/* Beneficios */}
              <div className="shop-benefits">
                <div className="shop-benefit-item">
                  <Check className="w-4 h-4 text-emerald-500" /> {isEn ? 'Secure shipping' : 'Envío seguro'}
                </div>
                <div className="shop-benefit-item">
                  <Check className="w-4 h-4 text-emerald-500" /> {isEn ? 'Warranty included' : 'Garantía incluida'}
                </div>
                <div className="shop-benefit-item">
                  <Check className="w-4 h-4 text-emerald-500" /> {isEn ? 'Purchase protection' : 'Compra protegida'}
                </div>
              </div>

              {/* Alerta de envío */}
              <div className="shop-shipping-alert">
                <Clock className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <p>{isEn ? 'You will receive it in approx.' : 'Lo recibes en aproximadamente'} <strong>{isEn ? '3 - 5 business days' : '3 - 5 días hábiles'}</strong> {isEn ? 'with real-time tracking.' : 'con seguimiento en línea en tiempo real.'}</p>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
