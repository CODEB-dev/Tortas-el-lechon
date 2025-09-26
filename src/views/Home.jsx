import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [active, setActive] = useState(0);
  // Imágenes de ejemplo con metadatos para mostrar información sobre cada slide

  const menuItems = [
    {
      name: "Torta de jamón",
      description:
        "Torta de jamón preparada con pan fresco, rebanadas de jamón, lechuga crujiente, jitomate fresco y un toque de mayonesa.",
      price: "$60",
      image: "/torta_jamon.jpg",
    },
    {
      name: "Tacos al Pastor",
      description: "Carne al pastor, piña asada y salsa roja casera.",
      price: "$80",
      image: "/tacos_pastor.jpg",
    },
    {
      name: "Quesadillas de Queso",
      description:
        "Queso fundido en tortilla a la comal, acompañadas de salsa.",
      price: "$60",
      image: "/quesadilla.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Luis Fernandez",
      comment:
        "Muy buena torta mixta, perdon por la foto ya casi terminando, siempre me ganan las ganas.. jejeje.",
      rating: 5,
    },
    {
      name: "Anggel Nieto",
      comment:
        "La barbacoa me gusta mucho, tiene muy buen sabor y no esta tan grasosa, la puedes pedir en tacos o por kilo y te sirven tortillas de harina o maiz si la vas a comer ahi mismo, tambien hay carnitas de puerco y menudo, es muy buen lugar para desayunar, hay que ir temprano porque es muy concurrido y se acaba la barbacoa.",
      rating: 5,
    },
    {
      name: "Armandina Galindo",
      comment:
        "Las tortas más ricas de la villa. Están pasando los rieles si vienes de Eagle Pass.",
      rating: 5,
    },
    {
      name: "Roberto Cruz",
      comment:
        "Buena higiene y una buena comida. Y pedido para llevar listo en 10min. Me gusto.",
      rating: 5,
    },
    {
      name: "Carlos Quintero",
      comment: "De las mejores tortas de la ciudad! Y buena atención.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat pt-16">
      {/* Hero Section - improved presentation */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/rst_1.png"
            alt="Interior y platillos de Tortas el Lechón"
            className="w-full h-full object-cover object-center brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"></div>
          {/* soft pattern for depth (decorative) */}
          <svg
            className="absolute -bottom-20 left-0 w-full opacity-10"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              fill="#000"
              fillOpacity="0.06"
              d="M0,192L60,170.7C120,149,240,107,360,101.3C480,96,600,128,720,160C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Tortas el Lechón
              <span className="block text-red-300 mt-2 text-2xl md:text-3xl font-semibold">
                Sabor auténtico que conquista
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-gray-200 mt-6 max-w-xl"
            >
              Pan recién hecho, carnes adobadas con cariño y salsas caseras. Ven
              y descubre por qué todos hablan de nuestras tortas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/menu" aria-label="Ver menú">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Ver Menú
                </motion.button>
              </Link>

              <Link to="/contacto" aria-label="Reservar">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold border border-white/20"
                >
                  Reservar
                </motion.button>
              </Link>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 text-gray-200 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M6 2a1 1 0 00-1 1v2H3a1 1 0 000 2h2v6a1 1 0 001 1h2v2a1 1 0 002 0v-2h2a1 1 0 001-1V7h2a1 1 0 100-2h-2V3a1 1 0 00-1-1H6z" />
                </svg>
                <span>Abierto hoy · 9:00 — 22:00</span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <div className="text-yellow-400">★★★★★</div>
                <span className="text-gray-300">Reseñas excelentes</span>
              </div>
            </div>
          </div>

          {/* Right-side stacked preview cards (hidden on small screens) */}
          <div className="hidden md:flex md:flex-col md:items-end md:w-1/3 lg:w-1/2">
            <div className="w-80 transform translate-y-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden shadow-2xl p-4 mb-4">
                <img
                  src="/torta_jamon.jpg"
                  alt="Torta de jamón"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="mt-3 text-white">
                  <h4 className="font-bold">Torta de jamón</h4>
                  <p className="text-sm text-gray-200">
                    Pan fresco, jamón y jugosas salsas caseras.
                  </p>
                </div>
              </div>

              <div className="bg-white/6 backdrop-blur rounded-2xl overflow-hidden shadow-lg p-4 mb-4">
                <img
                  src="/tacos_pastor.jpg"
                  alt="Tacos al pastor"
                  className="w-full h-28 object-cover rounded-lg"
                />
                <div className="mt-3 text-white">
                  <h4 className="font-semibold">Tacos al Pastor</h4>
                  <p className="text-sm text-gray-200">
                    Marinados y rostizados con piña asada.
                  </p>
                </div>
              </div>

              <div className="bg-white/6 backdrop-blur rounded-2xl overflow-hidden shadow-lg p-4">
                <img
                  src="/quesadilla.jpg"
                  alt="Quesadillas"
                  className="w-full h-24 object-cover rounded-lg"
                />
                <div className="mt-3 text-white">
                  <h4 className="font-semibold">Quesadillas</h4>
                  <p className="text-sm text-gray-200">
                    Queso fundido y masa dorada en comal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <div className="flex flex-col items-center text-white/90">
            <span className="text-sm">Explorar</span>
            <div className="mt-2 w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center px-1 py-1">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Especialidades de la Casa
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre nuestros platillos más exclusivos, preparados con los
              ingredientes más frescos y técnicas culinarias innovadoras.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-red-600 font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="max-w-5xl mx-auto"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg m-4 h-full flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3 text-red-600 font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{t.name}</p>
                        <div className="text-yellow-400">
                          {Array.from({ length: t.rating }).map((_, idx) => (
                            <span key={idx} aria-hidden>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{t.comment}"</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tradición y <span className="text-red-200">Innovación</span>
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Más de 20 años ofreciendo experiencias gastronómicas memorables.
                Combinamos recetas tradicionales con técnicas modernas para
                crear sabores únicos que deleitan a nuestros comensales.
              </p>
              <div className="space-y-4">
                {[
                  "Ingredientes locales frescos",
                  "Chefs especializados",
                  "Ambiente premium",
                  "Servicio personalizado",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/rst_1.png"
                alt="Interior del restaurante"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer: use shared Footer component from layouts/Footer.jsx */}
    </div>
  );
};

export default Home;
