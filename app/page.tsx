export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#2C1A12] font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#B8924A]/20 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-serif tracking-widest">
          Gul<span className="text-[#C2705A]">nama</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#story" className="text-xs tracking-widest uppercase hover:text-[#C2705A] transition-colors">Our Story</a>
          <a href="#collection" className="text-xs tracking-widest uppercase hover:text-[#C2705A] transition-colors">Collection</a>
          <a href="#promise" className="text-xs tracking-widest uppercase hover:text-[#C2705A] transition-colors">Promise</a>
          <a href="#contact" className="text-xs tracking-widest uppercase bg-[#C2705A] text-[#FAF6F0] px-4 py-2 hover:bg-[#2C1A12] transition-colors">Shop Now</a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-[#2C1A12]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* HERO */}
      <section className="pt-24 md:pt-0 min-h-screen grid md:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-0 order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B8924A] mb-4">New Collection · 2026</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight">
            Draped in<br />
            <em className="text-[#C2705A] not-italic">Bloom</em><br />
            Built for Her
          </h1>
          <p className="mt-6 text-sm leading-loose text-[#6B4F3A] max-w-sm">
            Premium sarees for the modern Indian woman — crafted with floral artistry, designed for the city she commands.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#collection" className="bg-[#C2705A] text-[#FAF6F0] text-xs tracking-widest uppercase px-8 py-4 text-center hover:bg-[#2C1A12] transition-colors">
              Explore Collection
            </a>
            <a href="#story" className="text-xs tracking-widest uppercase border-b border-[#B8924A] pb-1 self-start sm:self-center hover:text-[#C2705A] transition-colors">
              Our Story →
            </a>
          </div>
        </div>

        {/* Right - Visual */}
        <div className="relative bg-[#F0E0D6] min-h-[60vw] md:min-h-0 order-1 md:order-2 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {/* Pattern */}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute rounded-full border border-[#2C1A12]"
                style={{
                  width: `${(i % 5 + 1) * 40}px`,
                  height: `${(i % 5 + 1) * 40}px`,
                  top: `${(i * 17) % 100}%`,
                  left: `${(i * 23) % 100}%`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
          {/* Flower */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-spin" style={{ animationDuration: '30s' }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute left-1/2 top-1/2 w-12 h-24 md:w-14 md:h-28 -ml-6 -mt-24 md:-ml-7 md:-mt-28 rounded-t-full rounded-b-full"
                style={{
                  background: 'linear-gradient(to bottom, rgba(194,112,90,0.6), rgba(184,146,74,0.3))',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: 'bottom center'
                }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-[#B8924A] shadow-lg shadow-[#B8924A]/40" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-[#FAF6F0]/90 backdrop-blur-sm border border-[#B8924A]/30 p-4 text-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8924A]">Exclusively Crafted</p>
            <p className="font-serif text-base mt-1">For the City Woman</p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#2C1A12] py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, j) => (
            <span key={j} className="flex">
              {['Handcrafted Sarees', 'Floral Artistry', 'Premium Fabrics', 'Modern Drape', 'Made in India', 'For Her Journey'].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-6 px-8">
                  <span className="text-[#FAF6F0] text-[10px] tracking-[0.25em] uppercase">{item}</span>
                  <span className="text-[#C2705A]">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section id="story" className="py-20 px-6 md:px-16 bg-[#F0E0D6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visual */}
          <div className="relative h-72 md:h-[500px]">
            <div className="absolute inset-0 md:right-12 md:bottom-12 bg-gradient-to-br from-[#F0E0D6] to-[#D4A898] flex items-center justify-center rounded-sm">
              <div className="w-40 h-40 relative animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="absolute left-1/2 top-1/2 w-8 h-16 -ml-4 -mt-16 rounded-t-full rounded-b-full"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(194,112,90,0.5), rgba(184,146,74,0.2))',
                      transform: `rotate(${i * 30}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                ))}
                <div className="absolute left-1/2 top-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-[#B8924A]" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 md:bottom-0 md:right-0 w-32 bg-[#C2705A] text-[#FAF6F0] p-4">
              <p className="font-serif text-3xl font-light">100%</p>
              <p className="text-[10px] tracking-widest uppercase mt-1 opacity-85">Pure Fabric</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8924A] mb-3">About Gulnama</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
              Where <em className="text-[#C2705A] not-italic">Flowers</em><br />Tell Her Story
            </h2>
            <p className="text-sm leading-loose text-[#6B4F3A] mb-4">
              Gulnama — meaning "Book of Flowers" — was born from a simple belief: that Indian women who lead bold, modern lives deserve sarees that honour both their heritage and their ambitions.
            </p>
            <p className="text-sm leading-loose text-[#6B4F3A]">
              Every piece is a conversation between tradition and today. Floral motifs drawn from Mughal gardens meet contemporary silhouettes, premium drape, and colours that move from boardroom to evening effortlessly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['Ethically Sourced', 'Artisan Crafted', 'Premium Quality', 'City Ready'].map((v) => (
                <div key={v} className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[#B8924A]" />
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="py-20 px-6 md:px-16 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8924A] mb-2">Curated for You</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light">The <em className="text-[#C2705A] not-italic">Bloom</em> Edit</h2>
            </div>
            <a href="#" className="mt-4 md:mt-0 text-xs tracking-widest uppercase border-b border-[#B8924A] pb-1 self-start hover:text-[#C2705A] transition-colors">View All Sarees →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Jasmine Dusk', desc: 'Georgette · Floral Zari Border', price: '₹12,500', tag: 'Bestseller', bg: 'from-[#E8D5C8] to-[#D4A898]' },
              { name: 'Gulmohar Gold', desc: 'Silk Organza · Hand Embroidered', price: '₹18,000', tag: 'New Arrival', bg: 'from-[#D4C5B0] to-[#C9B090]' },
              { name: 'Lotus Evening', desc: 'Pure Banarasi · Digital Print', price: '₹22,000', tag: 'Limited', bg: 'from-[#C5D4C5] to-[#A8C0A8]' },
            ].map((product) => (
              <div key={product.name} className="group cursor-pointer">
                <div className={`relative h-80 md:h-96 bg-gradient-to-br ${product.bg} flex items-center justify-center overflow-hidden`}>
                  <span className="absolute top-3 left-3 bg-[#FAF6F0] text-[#C2705A] text-[10px] tracking-widest uppercase px-3 py-1">{product.tag}</span>
                  <div className="w-36 h-36 relative group-hover:scale-105 transition-transform duration-500" style={{ animation: 'spin 25s linear infinite' }}>
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="absolute left-1/2 top-1/2 w-7 h-14 -ml-3.5 -mt-14 rounded-t-full rounded-b-full"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(194,112,90,0.5), rgba(184,146,74,0.2))',
                          transform: `rotate(${i * 30}deg)`,
                          transformOrigin: 'bottom center'
                        }}
                      />
                    ))}
                    <div className="absolute left-1/2 top-1/2 w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-[#B8924A]" />
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-serif text-xl">{product.name}</h3>
                  <p className="text-xs text-[#8B6A55] mt-1">{product.desc}</p>
                  <p className="text-sm mt-2"><span className="text-[10px] text-[#8B6A55] tracking-widest uppercase mr-1">From</span>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section id="promise" className="py-20 px-6 md:px-16 bg-[#2C1A12] text-[#FAF6F0] text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8924A] mb-3">The Gulnama Way</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light max-w-lg mx-auto leading-tight">
          Our <em className="text-[#C2705A] not-italic">Promise</em> to You
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '🌸', title: 'Floral Artistry', desc: 'Every motif drawn from nature — roses, jasmines, lotuses — interpreted in thread and fabric.' },
            { icon: '✦', title: 'Premium Fabric', desc: 'Georgette, organza, banarasi, and pure silks — sourced from the finest weavers across India.' },
            { icon: '🏙️', title: 'City Ready', desc: 'Lightweight, easy drape, styles that transition from work to celebration effortlessly.' },
            { icon: '💛', title: 'Made with Love', desc: 'Crafted by artisan hands, each piece carries the warmth of a tradition passed through generations.' },
          ].map((item) => (
            <div key={item.title} className="px-2">
              <div className="w-12 h-12 rounded-full border border-[#C2705A]/40 bg-[#C2705A]/10 flex items-center justify-center text-xl mx-auto mb-4">{item.icon}</div>
              <h3 className="font-serif text-lg mb-2">{item.title}</h3>
              <p className="text-xs text-[#FAF6F0]/60 leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="grid md:grid-cols-2">
        <div className="px-6 py-16 md:px-16 md:py-24 flex flex-col justify-center bg-[#F0E0D6] order-2 md:order-1">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8924A] mb-3">The Gulnama Woman</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-6">
            She Leads.<br />She <em className="text-[#C2705A] not-italic">Blooms.</em>
          </h2>
          <p className="text-sm leading-loose text-[#6B4F3A] mb-4">
            She's a professional who loves her culture. She walks into a meeting in a saree and commands the room. She doesn't choose between ambition and elegance — Gulnama is made for her.
          </p>
          <p className="text-sm leading-loose text-[#6B4F3A] mb-8">
            Our sarees are designed for women in Bengaluru, Mumbai, Delhi, and beyond — women who appreciate craftsmanship and wear their identity with pride.
          </p>
          <a href="#collection" className="bg-[#C2705A] text-[#FAF6F0] text-xs tracking-widest uppercase px-8 py-4 text-center self-start hover:bg-[#2C1A12] transition-colors">
            Discover Your Saree
          </a>
        </div>
        <div className="relative bg-gradient-to-br from-[#C9A898] to-[#B8856A] min-h-72 md:min-h-0 flex items-center justify-center overflow-hidden order-1 md:order-2">
          <div className="w-72 h-72 md:w-96 md:h-96 relative opacity-40 animate-spin" style={{ animationDuration: '40s' }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute left-1/2 top-1/2 w-14 h-28 md:w-16 md:h-32 -ml-7 -mt-28 md:-ml-8 md:-mt-32 rounded-t-full rounded-b-full"
                style={{
                  background: 'linear-gradient(to bottom, rgba(250,246,240,0.6), rgba(250,246,240,0.2))',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: 'bottom center'
                }}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-[#FAF6F0]/60" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-[#FAF6F0]/90 backdrop-blur-sm p-5">
            <p className="font-serif text-lg italic text-[#2C1A12] leading-snug">"A saree is not just a garment. It is the poetry of a woman's confidence."</p>
            <p className="text-[10px] tracking-widest uppercase text-[#B8924A] mt-3">— The Gulnama Philosophy</p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="contact" className="py-20 px-6 md:px-16 bg-[#FAF6F0] text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8924A] mb-3">Stay in Bloom</p>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Be the First to Know</h2>
        <p className="text-sm text-[#8B6A55] mb-8">New arrivals, exclusive pieces, and stories from the studio — delivered to you.</p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-0">
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 border border-[#2C1A12]/20 bg-transparent text-sm outline-none placeholder:text-[#A8886E]" />
          <button className="bg-[#C2705A] text-[#FAF6F0] text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-[#2C1A12] transition-colors">
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2C1A12] text-[#FAF6F0]/70 px-6 py-12 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-[#FAF6F0]/10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-xl text-[#FAF6F0] mb-3">Gul<span className="text-[#C2705A]">nama</span></p>
            <p className="text-xs leading-loose max-w-xs">Premium floral sarees for the modern Indian woman. Crafted with love, worn with pride.</p>
          </div>
          {[
            { title: 'Shop', links: ['Sarees', 'New Arrivals', 'Bestsellers', 'Limited Edition'] },
            { title: 'About', links: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press'] },
            { title: 'Help', links: ['Sizing Guide', 'Shipping & Returns', 'Care Guide', 'Contact Us'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#B8924A] mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-xs hover:text-[#FAF6F0] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 gap-2 text-xs">
          <span>© 2026 Gulnama. All rights reserved.</span>
          <span>gulnama.com</span>
        </div>
      </footer>

    </main>
  );
}