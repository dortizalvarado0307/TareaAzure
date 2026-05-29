import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Heart,
  Menu,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react'
import './App.css'

const featuredProducts = [
  {
    name: 'Urban Jacket',
    price: '$129',
    label: 'New season',
    background:
      'linear-gradient(135deg, rgba(183, 241, 255, 0.92), rgba(247, 252, 255, 0.98) 52%, rgba(212, 232, 255, 0.96))',
  },
  {
    name: 'Runner Pro',
    price: '$89',
    label: 'Best seller',
    background:
      'linear-gradient(135deg, rgba(255, 229, 182, 0.92), rgba(255, 250, 240, 0.98) 52%, rgba(255, 212, 138, 0.96))',
  },
  {
    name: 'Minimal Watch',
    price: '$199',
    label: 'Limited drop',
    background:
      'linear-gradient(135deg, rgba(245, 215, 255, 0.92), rgba(255, 248, 255, 0.98) 52%, rgba(227, 193, 255, 0.96))',
  },
] as const

const categories = ['Women', 'Men', 'Sneakers', 'Accessories', 'Home', 'Tech'] as const

const highlights = ['Free delivery over $50', '30-day returns', 'Secure checkout'] as const

const storeStats = [
  { value: '120K+', label: 'orders shipped' },
  { value: '4.9/5', label: 'customer rating' },
  { value: '2h', label: 'avg. local delivery' },
] as const

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand">
          <ShoppingBag aria-hidden="true" />
          <span>NovaMart</span>
        </div>

        <nav className="nav-links" aria-label="Principal">
          <a href="#categories">Categorías</a>
          <a href="#products">Productos</a>
          <a href="#benefits">Beneficios</a>
          <a href="#newsletter">Contacto</a>
        </nav>

        <div className="topbar-actions">
          <button type="button" className="icon-button" aria-label="Buscar">
            <Search aria-hidden="true" />
          </button>
          <button type="button" className="icon-button menu-button" aria-label="Abrir menú">
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Nueva colección 2026
          </div>
          <h1>La tienda inicial de ecommerce que convierte visitas en ventas.</h1>
          <p className="hero-text">
            Una landing moderna para destacar productos, promociones y confianza desde
            el primer scroll.
          </p>

          <div className="hero-actions">
            <a className="primary-cta" href="#products">
              Ver productos
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-cta" href="#benefits">
              Conocer beneficios
            </a>
          </div>

          <div className="trust-row" aria-label="Beneficios rápidos">
            {highlights.map((item) => (
              <span key={item}>
                <BadgeCheck size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

          <div className="stats-grid" aria-label="Métricas de la tienda">
            {storeStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel" aria-label="Producto destacado">
          <div className="hero-product-card">
            <div className="hero-product-visual">
              <div className="floating-pill">-30% hoy</div>
              <div className="product-shape product-shape-one" />
              <div className="product-shape product-shape-two" />
              <div className="product-shape product-shape-three" />
            </div>

            <div className="hero-product-copy">
              <span className="product-tag">Featured drop</span>
              <h2>Smart Essentials</h2>
              <p>
                Selección premium con envíos rápidos, stock limitado y diseño pensado
                para destacar.
              </p>
              <div className="rating-row">
                <div className="stars" aria-label="Valoración 4.9 sobre 5">
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                </div>
                <span>4.9 from 2.4k reviews</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="categories" className="category-strip" aria-label="Categorías">
        {categories.map((category) => (
          <a key={category} href="#products">
            {category}
          </a>
        ))}
      </section>

      <section id="products" className="section-block">
        <div className="section-heading">
          <span className="section-kicker">Top picks</span>
          <h2>Productos destacados para una homepage de ecommerce.</h2>
          <p>
            Cards limpias, jerarquía clara y foco en precio, valor y conversión.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-art" style={{ background: product.background }}>
                <span>{product.label}</span>
                <div className="product-art-core" />
              </div>
              <div className="product-body">
                <div className="product-meta">
                  <h3>{product.name}</h3>
                  <button type="button" className="wishlist-button" aria-label={`Agregar ${product.name} a favoritos`}>
                    <Heart size={18} aria-hidden="true" />
                  </button>
                </div>
                <p>Diseñado para una experiencia de compra rápida y visual.</p>
                <div className="product-footer">
                  <strong>{product.price}</strong>
                  <button type="button" className="add-button">
                    Añadir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="benefits" className="benefits-grid">
        <article className="benefit-card">
          <Truck size={22} aria-hidden="true" />
          <h3>Entrega express</h3>
          <p>Opciones rápidas para los productos más vendidos.</p>
        </article>
        <article className="benefit-card">
          <ShieldCheck size={22} aria-hidden="true" />
          <h3>Compra segura</h3>
          <p>Pagos protegidos, políticas claras y checkout confiable.</p>
        </article>
        <article className="benefit-card">
          <BarChart3 size={22} aria-hidden="true" />
          <h3>Diseño orientado a conversión</h3>
          <p>Un layout listo para mostrar categorías, valor y CTA.</p>
        </article>
      </section>

      <section id="newsletter" className="newsletter-banner">
        <div>
          <span className="section-kicker">Newsletter</span>
          <h2>Recibe ofertas y lanzamientos antes que nadie.</h2>
          <p>Ideal para cerrar la landing con una llamada a la acción fuerte.</p>
        </div>

        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="email">
            Correo electrónico
          </label>
          <input id="email" type="email" placeholder="tu@email.com" />
          <button type="submit">
            Suscribirme
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
