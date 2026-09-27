import { ShieldCheck, CreditCard, MapPin, CheckCircle2, Lock, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'
import productoImg from '../assets/images/producto.jpeg'
import '../css/Checkout.css'

export default function Checkout() {
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()
  const { cartCount } = useCart()
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  // Precios dinámicos
  const qty = cartCount > 0 ? cartCount : 1; 
  const basePrice = 599;
  const discount = 100;
  const currentPrice = basePrice - discount;
  const subtotal = currentPrice * qty;

  const handleSimulatePurchase = (e) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      navigate('/')
    }, 3500)
  }

  if (isSuccess) {
    return (
      <div className="checkout-success-container">
         <CheckCircle2 className="w-24 h-24 text-emerald-500 mb-6 animate-bounce-subtle" />
         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
           {isEn ? 'Payment Successful!' : '¡Pago Exitoso!'}
         </h1>
         <p className="text-gray-500 text-lg mb-8 text-center max-w-md leading-relaxed">
           {isEn 
             ? 'Your SmartClothes order has been processed successfully. You will receive your tracking code via email shortly.' 
             : 'Tu pedido de SmartClothes ha sido procesado correctamente. En breve recibirás tu código de seguimiento por correo.'}
         </p>
         <div className="flex items-center gap-3 px-6 py-3 bg-cyan-50 text-cyan-700 rounded-full font-bold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
            {isEn ? 'Redirecting to homepage...' : 'Redirigiendo a la página principal...'}
         </div>
      </div>
    )
  }

  if (cartCount === 0) {
    return (
      <div className="checkout-success-container">
        <ShoppingCart className="w-20 h-20 text-gray-300 mb-6" />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {isEn ? 'Your cart is empty' : 'Tu carrito está vacío'}
        </h1>
        <p className="text-gray-500 text-lg mb-8 text-center max-w-md">
          {isEn 
            ? 'You have not added any products to your cart yet.' 
            : 'Aún no has agregado ningún producto a tu carrito.'}
        </p>
        <button onClick={() => navigate('/')} className="px-8 py-3 bg-gray-950 text-white rounded-xl font-bold">
          {isEn ? 'Return to Store' : 'Volver a la tienda'}
        </button>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
         <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
           {isEn ? 'Complete Purchase' : 'Finalizar Compra'}
         </h1>
         <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-xs uppercase tracking-wider mt-4 sm:mt-0">
            <Lock className="w-4 h-4" /> {isEn ? '100% Secure Payment' : 'Pago 100% Seguro'}
         </div>
      </div>

      <div className="checkout-grid">
         {/* Formulario */}
         <div className="checkout-form-col">
            
            <form onSubmit={handleSimulatePurchase}>
              {/* Envío */}
              <div className="checkout-section">
                 <h2 className="checkout-section-title">
                   <MapPin className="w-5 h-5 text-gray-400" /> {isEn ? 'Shipping Information' : 'Información de Envío'}
                 </h2>
                 <div className="checkout-input-grid">
                    <input type="text" placeholder={isEn ? "Full Name" : "Nombre completo"} required className="checkout-input col-span-2" />
                    <input type="email" placeholder={isEn ? "Email Address" : "Correo electrónico"} required className="checkout-input col-span-2" />
                    <input type="text" placeholder={isEn ? "Exact Address" : "Dirección exacta"} required className="checkout-input col-span-2" />
                    <input type="text" placeholder={isEn ? "City" : "Ciudad"} required className="checkout-input" />
                    <input type="text" placeholder={isEn ? "Zip Code" : "Código Postal"} required className="checkout-input" />
                 </div>
              </div>

              {/* Pago */}
              <div className="checkout-section mt-10">
                 <h2 className="checkout-section-title">
                   <CreditCard className="w-5 h-5 text-gray-400" /> {isEn ? 'Payment Method' : 'Método de Pago'}
                 </h2>
                 <div className="checkout-input-grid">
                    <input type="text" placeholder={isEn ? "Card Number (Test)" : "Número de Tarjeta (Prueba)"} required className="checkout-input col-span-2" />
                    <input type="text" placeholder={isEn ? "MM/YY" : "MM/AA"} required className="checkout-input" />
                    <input type="text" placeholder="CVC" required className="checkout-input" />
                    <input type="text" placeholder={isEn ? "Name on Card" : "Nombre en la tarjeta"} required className="checkout-input col-span-2" />
                 </div>
              </div>

              <button type="submit" className="checkout-submit-btn">
                <ShieldCheck className="w-5 h-5" /> {isEn ? 'Complete Secure Payment' : 'Completar Pago Seguro'} (S/ {subtotal.toFixed(2)})
              </button>
            </form>
         </div>

         {/* Resumen */}
         <div className="checkout-summary-col">
            <div className="checkout-summary-box">
               <h3 className="font-bold text-lg mb-6 text-gray-900 border-b border-gray-200 pb-4">
                 {isEn ? 'Order Summary' : 'Resumen del Pedido'}
               </h3>
               
               <div className="checkout-item relative">
                  <img src={productoImg} alt="SmartClothes" className="w-20 h-20 object-cover rounded-xl bg-gray-100 border border-gray-200" />
                  <div className="flex-1">
                     <h4 className="font-bold text-sm text-gray-900 mb-1 leading-tight pr-6">
                       {isEn ? 'SmartClothes Sorting Hamper' : 'SmartClothes Cesto Inteligente'}
                     </h4>
                     <p className="text-[11px] text-gray-500 mb-2">
                       {isEn ? 'Dual Standard (70L) · White & Carbon' : 'Dual Standard (70L) · Blanco & Carbón'}
                     </p>
                     <div className="font-bold text-gray-900">S/ {currentPrice.toFixed(2)}</div>
                  </div>
                  {qty > 1 && (
                     <div className="absolute top-0 right-0 bg-gray-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shadow-sm">
                        {qty}
                     </div>
                  )}
               </div>

               <div className="checkout-totals">
                  <div className="checkout-totals-row">
                     <span className="text-gray-500 font-medium">{isEn ? 'Subtotal' : 'Subtotal'} ({qty} {isEn ? 'items' : 'artículos'})</span>
                     <span className="font-bold text-gray-900">S/ {(basePrice * qty).toFixed(2)}</span>
                  </div>
                  <div className="checkout-totals-row">
                     <span className="text-gray-500 font-medium">{isEn ? 'Launch Discount' : 'Descuento Lanzamiento'}</span>
                     <span className="text-emerald-600 font-bold">- S/ {(discount * qty).toFixed(2)}</span>
                  </div>
                  <div className="checkout-totals-row">
                     <span className="text-gray-500 font-medium">{isEn ? 'Express Shipping (24h)' : 'Envío Express (24h)'}</span>
                     <span className="text-gray-900 font-bold">{isEn ? 'Free' : 'Gratis'}</span>
                  </div>
                  <div className="checkout-totals-divider"></div>
                  <div className="checkout-totals-row text-xl mt-1">
                     <span className="font-extrabold text-gray-900">{isEn ? 'Total to pay' : 'Total a pagar'}</span>
                     <span className="font-extrabold text-gray-900">S/ {subtotal.toFixed(2)}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
