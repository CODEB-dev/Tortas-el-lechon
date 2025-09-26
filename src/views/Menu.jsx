import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [category, setCategory] = useState('all');

  const dishes = [
    { name: 'Torta de Lechón', desc: 'Lechón asado, cebolla encurtida y salsa especial', price: '$120', img: '/tortas_lechon.jpg', category: 'tortas' },
    { name: 'Torta de Jamón', desc: 'Pan artesanal, jamón selecto y vegetales frescos', price: '$60', img: '/torta_jamon.jpg', category: 'tortas' },
    { name: 'Tacos al Pastor', desc: 'Marinado tradicional con piña asada', price: '$80', img: '/tacos_pastor.jpg', category: 'tacos' },
    { name: 'Quesadilla de Queso', desc: 'Queso fundido en tortilla hecha al comal', price: '$60', img: '/quesadilla.jpg', category: 'antojitos' },
    { name: 'Chiles Rellenos', desc: 'Rellenos con queso y bañados en salsa roja', price: '$140', img: '/chile_relleno.jpg', category: 'antojitos' },
    { name: 'Enchiladas Verdes', desc: 'Pollo deshebrado y queso', price: '$110', img: '/enchiladas_verdes.jpg', category: 'antojitos' },
    { name: 'Barbacoa', desc: 'Preparada con ingredientes frescos', price: '$70', img: '/barbacoa.jpg', category: 'otros' },
  ];

  const categories = useMemo(() => ['all', ...Array.from(new Set(dishes.map(d => d.category)))], []);

  const filtered = useMemo(() => (category === 'all' ? dishes : dishes.filter(d => d.category === category)), [category, dishes]);

  return (
    <div className="min-h-screen font-montserrat bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: "url('/rst_1.png')" }} aria-label="Hero menú">
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-start md:items-center justify-center pt-6 md:pt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center text-white px-4">
            <h1 className="text-3xl md:text-4xl font-bold"> <span className='font-bold text-6xl'>Menú</span> <br /> Tortas El Lechón</h1>
            <p className="mt-2 text-sm md:text-base opacity-90">Explora nuestros platillos más populares. Cocina auténtica y porciones generosas.</p>
            <div className="mt-4">
              <Link to="/contacto" className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-red-700 transition-colors">Ordena ahora</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter controls */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nuestros Platillos</h2>
            <p className="text-gray-600 text-sm">Elige una categoría para filtrar el menú</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${category === cat ? 'bg-red-600 text-white shadow-md' : 'bg-white text-gray-700 border'}`}
                aria-pressed={category === cat}
              >
                {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d, i) => (
            <motion.article key={d.name} whileHover={{ translateY: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-52 md:h-44 lg:h-48 overflow-hidden">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold">{d.category.toUpperCase()}</span>
                <span className="absolute top-3 right-3 bg-white/90 text-red-600 text-sm px-3 py-1 rounded-full font-bold">{d.price}</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-800 text-lg">{d.name}</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{d.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <Link to="/contacto" className="text-sm text-gray-700 hover:underline">Preguntar</Link>
                  <Link to="/contacto" className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-red-700">Ordenar</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Small info / notice */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 text-gray-700 text-sm">
          <p>Todos nuestros platillos pueden contener trazas de frutos secos y gluten. Si tienes alergias, por favor contáctanos antes de ordenar.</p>
        </div>
      </section>
    </div>
  );
};

export default Menu;