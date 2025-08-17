// MOR Landing Page – single-file React component
// TailwindCSS required. Replace placeholders as noted.

export default function MorLanding() {
  const accent = "#D4AF37"; // Gold accent
  const bg = "#E7E6E4"; // Brand background
  const whatsappNumber = "527821964154"; // <-- REPLACE with your full number (e.g., 52 + lada + número)
  const catalogPdfUrl = "https://www.canva.com/design/DAGvJoEtu5A/qp98AQ2bC1SHXo2jUjWERA/view?utm_content=DAGvJoEtu5A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5828ad9be1"; // Optional: paste a public URL to your PDF catálogo

  const products = [
    {
      id: "mor-001",
      name: "Anillo Aura",
      material: "Acero inoxidable 316L / baño oro 18k",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "mor-002",
      name: "Collar Lirio",
      material: "Plata .925",
      price: 790,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "mor-003",
      name: "Aretes Nube",
      material: "Acero hipoalergénico / baño oro 18k",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop",
    },
  ];

const waMessage = (productName) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    productName
      ? `Hola, me interesa el modelo ${productName} de MÓR.`
      : "Hola, me interesa su catálogo de MÓR."
  )}`;


  return (
    <div className="min-h-screen" style={{ backgroundColor: bg }}>
      {/* Head fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 border-b border-black/5" style={{ background: "rgba(231,230,228,0.6)" }}>
        <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="#home" className="tracking-[0.25em] text-xl md:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            MÓR <span className="sr-only">joyería</span>
          </a>
          <div className="flex items-center gap-6 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <a href="#catalogo" className="hover:opacity-70">Catálogo</a>
            <a href="#sobre" className="hover:opacity-70">Sobre MÓR</a>
            <a
              href={waMessage()}
              className="rounded-full px-4 py-2 border transition hover:opacity-90"
              style={{ borderColor: accent }}
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>est 2024</p>
            <h1 className="text-5xl md:text-6xl leading-none mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              M<span className="mx-1">Ó</span>R
            </h1>
            <p className="text-base md:text-lg text-black/70 mb-8 max-w-prose" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Joyería minimalista y atemporal. Piezas pensadas para acompañarte todos los días: <em>el lujo cotidiano</em>.
            </p>
            <div className="flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <a
                href="#catalogo"
                className="rounded-full px-5 py-3 border font-medium"
                style={{ borderColor: accent }}
              >
                Ver catálogo
              </a>
              {catalogPdfUrl && (
                <a
                href={catalogPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-3 border font-medium hover:bg-black hover:text-white transition"
                style={{ borderColor: accent }}
                >
               Ver catálogo en Canva
                </a>
              )}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-black/5">
            <img src="/MOR.jpeg" alt="Descripción"
            />
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>Catálogo</h2>
          {catalogPdfUrl && (
            <a
            href={catalogPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:text-black/60 transition"
            style={{ fontFamily: "Montserrat, sans-serif" }}
           >
           Ver más
           </a>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group border border-black/5 rounded-2xl overflow-hidden bg-white/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <h3 className="text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{p.name}</h3>
                <p className="text-sm text-black/70 mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.material}</p>
                <div className="flex items-center justify-between mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="text-base">${p.price} MXN</span>
                  <a
                    href={waMessage(p.name)}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-2 border text-sm transition hover:opacity-90"
                    style={{ borderColor: accent }}
                  >
                    <WhatsAppIcon /> Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Nota para actualizar catálogo */}
        <p className="text-xs text-black/50 mt-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          *Reemplaza el arreglo <code>products</code> con tus artículos reales o enlaza tu PDF en <code>catalogPdfUrl</code>.
        </p>
      </section>

      {/* Sobre la marca */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Sobre MÓR</h2>
            <p className="text-black/80 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Creemos en el <strong>lujo cotidiano</strong>: piezas minimalistas y versátiles, elaboradas con materiales hipoalergénicos y acabados de alta calidad para que brillen todos los días.
            </p>
          </div>
          <ul className="space-y-4 text-black/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>✓ Envíos a toda la República Mexicana</li>
            <li>✓ Empaques de regalo y garantía por defectos de fabricación</li>
            <li>✓ Asesoría personalizada por WhatsApp</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <p className="text-sm">© {new Date().getFullYear()} MÓR joyería</p>
          <div className="flex items-center gap-6 text-sm">
            <a href={waMessage()} className="underline">WhatsApp</a>
            <a href="#catalogo" className="underline">Catálogo</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={waMessage()}
        className="fixed bottom-5 right-5 shadow-lg rounded-full p-4 border transition hover:translate-y-[-2px]"
        aria-label="Hablar por WhatsApp"
        style={{ background: "white", borderColor: accent }}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.94 11.94 0 00-10 18.36L0 24l5.81-1.52A11.94 11.94 0 0012 24a12 12 0 0012-12 11.87 11.87 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-4.86-1.32l-.35-.2-3.45.9.92-3.36-.22-.34A9.5 9.5 0 1121.5 12 9.52 9.52 0 0112 21.5zm5.49-7.12c-.3-.15-1.74-.86-2-.95s-.47-.15-.67.15-.77.95-.94 1.14-.35.22-.64.07a7.79 7.79 0 01-2.3-1.42 8.6 8.6 0 01-1.6-2c-.17-.3 0-.46.12-.61s.3-.35.45-.52a2 2 0 00.3-.52.57.57 0 000-.54c0-.16-.67-1.62-.92-2.22s-.49-.5-.67-.5h-.57a1.09 1.09 0 00-.78.37 3.28 3.28 0 00-1 2.43A5.69 5.69 0 008.46 13a13 13 0 004.91 4 4.22 4.22 0 002.64.84 2.26 2.26 0 001.49-.67 1.85 1.85 0 00.42-1.08c.05-.11.05-.2 0-.27s-.27-.15-.43-.23z" />
    </svg>
  );
}

