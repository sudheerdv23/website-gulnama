"use client";

import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <button
          className="md:hidden text-[#2C1A12]"
          onClick={() => setMenuOpen(!menuOpen)}
          >
          {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
          ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          )}
      </button>
    </nav>
    {menuOpen && (
  <div className="fixed top-[64px] left-0 right-0 z-40 bg-[#FAF6F0] border-t border-[#E8D5CC] md:hidden shadow-lg">
    <div className="flex flex-col px-6 py-6 gap-6">
      <a href="#story" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#2C1A12] hover:text-[#C2705A] transition-colors">Our Story</a>
      <a href="#collection" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#2C1A12] hover:text-[#C2705A] transition-colors">Collection</a>
      <a href="#promise" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#2C1A12] hover:text-[#C2705A] transition-colors">Promise</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase text-[#2C1A12] hover:text-[#C2705A] transition-colors">Contact</a>
      <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#C2705A] text-white text-center py-3 text-xs tracking-widest uppercase">Join Waitlist</a>
    </div>
  </div>
)}
  
  {/* Hero */}
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://res.cloudinary.com/dpbylqekj/image/upload/v1773073842/WhatsApp_Image_2026-03-02_at_14.12.56_xadbaz.jpg"
        alt="Gulnama blush saree"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Stronger gradient — dark on left where text is, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/80 via-[#1a0f0a]/50 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        {/* Label with pill styling */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-[#C2705A]" />
          <p className="text-[#C2705A] text-xs tracking-[0.3em] uppercase">
            First Collection · Launching Soon
          </p>
        </div>

        {/* Headline — clean white, no competition with bg */}
        <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight mb-6 drop-shadow-sm">
          Draped<br />
          <em className="text-[#E8A898] not-italic font-extralight">in Bloom</em>
        </h1>

        {/* Subtext — softer, not competing */}
        <p className="text-white/75 text-base font-light leading-relaxed mb-10 max-w-sm">
          Premium floral sarees for the Indian city woman.
          Bold enough for ambition. Soft enough to breathe.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a href="#collection" className="bg-[#C2705A] text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#a85c48] transition-colors">
            Explore Collection
          </a>
          <a href="#contact" className="border border-white/60 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all">
            Join Waitlist
          </a>
        </div>
      </div>

      {/* Floating card — right side */}
      <div className="hidden lg:block relative">
        <div className="relative w-72 h-[420px] ml-auto overflow-hidden shadow-2xl">
          <Image
            src="https://res.cloudinary.com/dpbylqekj/image/upload/v1773073841/WhatsApp_Image_2026-03-02_at_14.24.19_qlroeg.jpg"
            alt="Gulnama butter yellow saree"
            fill
            className="object-cover object-top"
          />
        </div>
        {/* Info tag — cleaner, bottom left of the card */}
        <div className="absolute -bottom-5 -left-5 bg-[#FAF6F0] px-5 py-4 shadow-xl border-l-2 border-[#C2705A]">
          <p className="text-[#C2705A] text-[10px] tracking-[0.25em] uppercase mb-1">Handcrafted in India</p>
          <p className="text-[#2C1A12] text-sm font-medium">First Collection</p>
          <p className="text-[#B8924A] text-xs mt-0.5">Samples in Production</p>
        </div>
      </div>
    </div>
  </section>

        {/* MARQUEE */}
        <div className="bg-[#2C1A12] py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(6)].map((_, j) => (
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

  {/* Collection */}
  <section id="collection" className="py-24 bg-[#FAF6F0]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-[#C2705A] text-sm tracking-[0.3em] uppercase mb-3">
          The Bloom Edit
        </p>
        <h2 className="text-4xl font-light text-[#2C1A12]">First Collection</h2>
        <p className="text-[#6B5248] mt-4 max-w-xl mx-auto text-lg font-light">
          Four sarees. Each one a garden. Each one made for her.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            image: "https://res.cloudinary.com/dpbylqekj/image/upload/v1773073842/WhatsApp_Image_2026-03-02_at_14.12.56_xadbaz.jpg",
            name: "Blossom Garden",
            fabric: "Linen · Hand Embroidery",
            price: "₹18,000",
            tag: "Hand Embroidered",
          },
          {
            image: "https://res.cloudinary.com/dpbylqekj/image/upload/v1773073841/WhatsApp_Image_2026-03-02_at_14.12.49_augdww.jpg",
            name: "Jasmine Dusk",
            fabric: "Linen · Hand Embroidery",
            price: "₹18,000",
            tag: "Hand Embroidered",
          },
          {
            image: "https://res.cloudinary.com/dpbylqekj/image/upload/v1773073841/WhatsApp_Image_2026-03-02_at_14.17.37_h7kbaw.jpg",
            name: "Ivory Meadow",
            fabric: "Linen · Digital Print",
            price: "₹14,500",
            tag: "New",
          },
          {
            image: "https://res.cloudinary.com/dpbylqekj/image/upload/v1773073841/WhatsApp_Image_2026-03-02_at_14.24.19_qlroeg.jpg",
            name: "Butter Bloom",
            fabric: "Linen · Digital Print",
            price: "₹14,500",
            tag: "New",
          },
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#F0E0D6]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-[#C2705A] text-xs tracking-widest uppercase px-2 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#2C1A12]/0 group-hover:bg-[#2C1A12]/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-white text-[#2C1A12] py-2 text-xs tracking-widest uppercase">
                  Add to Waitlist
                </button>
              </div>
            </div>
            <div className="pt-4 pb-2">
              <h3 className="text-[#2C1A12] font-medium">{item.name}</h3>
              <p className="text-[#9B7B6E] text-sm mt-1">{item.fabric}</p>
              <p className="text-[#C2705A] font-medium mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-[#9B7B6E] text-sm italic">
          Samples in production · Full collection launching soon
        </p>
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