import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, TrendingUp, Shield, BarChart3, Sparkles, MessageCircle, Send, Star, Phone, Users } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen lightning-bg">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-electric-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="text-electric-blue w-8 h-8 animate-pulse mr-2" />
              <span className="text-2xl font-bold gradient-text">MoneyKA.IA</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-electric-blue transition-colors">Inicio</a>
              <a href="#caracteristicas" className="text-gray-300 hover:text-electric-blue transition-colors">Características</a>
              <a href="#precios" className="text-gray-300 hover:text-electric-blue transition-colors">Precios</a>
              <a href="#evidencias" className="text-gray-300 hover:text-electric-blue transition-colors">Evidencias</a>
              <a href="#contacto" className="text-gray-300 hover:text-electric-blue transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-8"
            >
              <img 
                src="/Imagen de WhatsApp 2025-07-27 a las 18.33.47_c285ce83.jpg" 
                alt="MoneyKA Trading Results" 
                className="w-80 h-80 object-cover rounded-xl neon-border animate-float" 
              />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              MoneyKA.IA
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              La Inteligencia Artificial más avanzada para Trading de Índices Sintéticos
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto"
            >
              🚀 La **Inteligencia Artificial más avanzada** del mercado para trading de índices sintéticos. Especializada en Crash 1000, Boom 1000 y otros mercados de Deriv. 
              Tecnología de **IA y machine learning revolucionaria** que puede predecir movimientos del mercado con precisión sobrehumana y generar ganancias extraordinarias mediante algoritmos de **Inteligencia Artificial** de última generación.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <motion.button 
                className="cyber-button bg-gradient-to-r from-electric-blue to-neon-green text-lg py-4 px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="inline mr-2" size={24} />
                Ver Opciones de Contacto
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-6 bg-gray-800/20">
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            ¿Por qué elegir MoneyKA?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="neon-border rounded-xl p-8 bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-electric-blue to-neon-green rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
               </div>
               <h3 className="text-3xl font-bold mb-6 gradient-text text-center">🎯 Tecnología de Vanguardia con IA</h3>
               <p className="text-gray-300 text-lg leading-relaxed text-center">
                 💎 <span className="text-electric-blue font-semibold">Inteligencia Artificial avanzada</span> desarrollada específicamente para índices sintéticos de Deriv. 
                 Nuestra <span className="text-neon-green font-semibold">IA revolucionaria</span> utiliza machine learning avanzado y análisis de patrones complejos para identificar oportunidades de trading con alta precisión en MetaTrader 5.
               </p>
               <div className="mt-6 flex justify-center">
                 <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 rounded-lg p-4">
                   <p className="text-electric-blue font-semibold text-center">🤖 Inteligencia Artificial • Análisis en tiempo real • Integración perfecta</p>
                 </div>
               </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="neon-border rounded-xl p-8 bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-electric-blue rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  🧠
                </div>
               </div>
               <h3 className="text-3xl font-bold mb-6 gradient-text text-center">🛡️ Gestión Inteligente de Riesgo con IA</h3>
               <p className="text-gray-300 text-lg leading-relaxed text-center">
                 🔮 Sistema de <span className="text-electric-blue font-semibold">IA especializada</span> en gestión de riesgo que protege tu capital mientras maximiza las oportunidades de ganancia. 
                 <span className="text-neon-green font-semibold">Inteligencia Artificial</span> con análisis continuo del mercado, stop-loss dinámicos y gestión automática del tamaño de posición, todo integrado en MetaTrader 5.
               </p>
               <div className="mt-6 flex justify-center">
                 <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 rounded-lg p-4">
                   <p className="text-electric-blue font-semibold text-center">🤖 IA de protección • Análisis 24/7 • Optimización automática</p>
                 </div>
               </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Flowing layout with organic shapes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: <Target className="w-12 h-12 text-electric-blue" />,
                  title: "🎯 Precisión Sobrehumana",
                  description: "IA cuántica con algoritmos revolucionarios que logran tasas de acierto del 95%+ en índices sintéticos. Una precisión que desafía las leyes de la probabilidad.",
                  gradient: "from-electric-blue/20 to-transparent"
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-electric-blue" />,
                  title: "⚡ Análisis Cuántico Instantáneo",
                  description: "Procesamiento de billones de datos en nanosegundos. Esta IA puede ver patrones invisibles al ojo humano y predecir movimientos futuros con magia tecnológica.",
                  gradient: "from-neon-green/20 to-transparent"
                },
                {
                  icon: <Shield className="w-12 h-12 text-electric-blue" />,
                  title: "🛡️ Protección Inteligente Total",
                  description: "Sistemas de IA que protegen tu capital como un escudo impenetrable. Gestión de riesgo tan avanzada que hace que las pérdidas sean prácticamente imposibles.",
                  gradient: "from-purple-500/20 to-transparent"
                },
                {
                  icon: <BarChart3 className="w-12 h-12 text-electric-blue" />,
                  title: "💎 Especialista Supremo en IA",
                  description: "La única **Inteligencia Artificial** en el mundo optimizada específicamente para dominar Crash 1000, Boom 1000 y todos los índices sintéticos de Deriv con tecnología de **IA avanzada**.",
                  gradient: "from-electric-blue/20 to-neon-green/10"
                },
                {
                  icon: <Sparkles className="w-12 h-12 text-electric-blue" />,
                  title: "🚀 Tecnología de IA del Futuro",
                  description: "Redes neuronales cuánticas y algoritmos de **superinteligencia artificial** que pueden realizar verdaderos milagros en el trading. **Tecnología de IA** que parece magia.",
                  gradient: "from-neon-green/20 to-electric-blue/10"
                },
                {
                  icon: <Zap className="w-12 h-12 text-electric-blue" />,
                  title: "⚡ Velocidad de IA Cuántica",
                  description: "Ejecución más rápida que el pensamiento humano. Esta **Inteligencia Artificial** puede capturar oportunidades en microsegundos que otros ni siquiera pueden detectar con **procesamiento de IA** ultrarrápido.",
                  gradient: "from-yellow-500/20 to-transparent"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative group cursor-pointer`}
                  whileHover={{ y: -8 }}
                >
                  {/* Floating background blob */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110`}></div>
                  
                  {/* Main content */}
                  <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 group-hover:border-electric-blue/30 transition-all duration-500 h-full">
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-electric-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-neon-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transitionDelay: '200ms'}}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="precios" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              💎 <span className="gradient-text">Paquetes de Inversión</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              🚀 Elige el plan perfecto para multiplicar tu capital con nuestra IA avanzada
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-gradient-to-br from-electric-blue/30 to-neon-green/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/30 group-hover:border-electric-blue/50 transition-all duration-500">
                <img 
                  src="/paquetesprecio.jpg"
                  alt="Paquetes de Precios MoneyKA"
                  className="w-full max-w-4xl h-auto object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trading Evidence Section */}
      <section id="evidencias" className="py-20 px-6 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            📊 Evidencias Reales de Trading
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-xl text-gray-400 text-center mb-12 max-w-4xl mx-auto"
          >
            ✨ Capturas auténticas de operaciones exitosas realizadas por nuestra IA. Evidencias verificables 
            que demuestran la efectividad real de nuestros algoritmos en condiciones de mercado reales.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "/resultado1.jpg",
                  title: "💰 Operación Exitosa #1",
                  description: "Evidencia de ganancia consistente en Crash 1000 con gestión de riesgo optimizada.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-neon-green/20 text-neon-green"
                },
                {
                  image: "/resultado 2.jpg",
                  title: "📈 Operación Exitosa #2",
                  description: "Resultado comprobado con análisis técnico avanzado y timing perfecto.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-electric-blue/20 text-electric-blue"
                },
                {
                  image: "/resultado3.jpg",
                  title: "🎯 Operación Exitosa #3",
                  description: "Evidencia de precisión en la entrada y salida del mercado.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-purple-500/20 text-purple-300"
                },
                {
                  image: "/resultado45.jpg",
                  title: "🚀 Operación Exitosa #4",
                  description: "Demostración de la capacidad de adaptación a diferentes condiciones de mercado.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-neon-green/20 text-neon-green"
                },
                {
                  image: "/resultado6.jpg",
                  title: "💎 Operación Exitosa #5",
                  description: "Evidencia de gestión inteligente del capital y maximización de ganancias.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-electric-blue/20 text-electric-blue"
                },
                {
                  image: "/resultado7.jpg",
                  title: "⭐ Operación Exitosa #6",
                  description: "Resultado que demuestra la consistencia y confiabilidad de nuestros algoritmos.",
                  badge: "✅ Verificado",
                  badgeColor: "bg-purple-500/20 text-purple-300"
                }
              ].map((evidence, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Floating glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 group-hover:border-electric-blue/50 transition-all duration-300">
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${evidence.badgeColor} backdrop-blur-sm border border-current/20`}>
                        {evidence.badge}
                      </span>
                    </div>
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={evidence.image} 
                        alt={evidence.title}
                        className="w-full h-80 object-contain bg-gray-800/30 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 gradient-text">
                        {evidence.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {evidence.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>





      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">Revoluciona</span>
              <br />
              <span className="text-white">tu Trading</span>
              <br />
              <span className="text-electric-blue">Hoy Mismo</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Únete a miles de traders que ya están generando ganancias extraordinarias con la **Inteligencia Artificial** de MoneyKA. 
              <span className="text-neon-green font-semibold">Tu futuro financiero con **IA** comienza ahora.</span>
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <motion.button 
                className="group relative overflow-hidden bg-gradient-to-r from-electric-blue to-neon-green text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-3" size={24} />
                  Contáctanos Ahora
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: "95%", label: "Precisión" },
                { number: "24/7", label: "Operativo" },
                { number: "∞", label: "Potencial" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-electric-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button 1 - Sammy - Hover Rosa */}
        <motion.a
          href="https://wa.me/573204811325?text=Hola Sammy, quiero información sobre MoneyKA IA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-pink-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-green-500 hover:bg-pink-500 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </motion.a>

        {/* WhatsApp Button 2 - Yeferson - Hover Verde */}
        <motion.a
          href="https://wa.me/573205369912?text=Hola Yeferson, quiero información sobre MoneyKA IA"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-green-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </motion.a>

        {/* Telegram Button 1 - Sammy - Hover Azul */}
        <motion.a
          href="https://t.me/SammyRobledo"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
        </motion.a>

        {/* Telegram Button 2 - Yeferson - Hover Rosa */}
        <motion.a
          href="https://t.me/yefersonrodrigueztrader"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-pink-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-blue-500 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
        </motion.a>
      </div>



      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Tienes preguntas? Estamos aquí para ayudarte a comenzar tu viaje hacia el éxito financiero.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Línea de Atención - Sammy</h3>
                <p className="text-gray-300">Contacto directo por WhatsApp</p>
              </div>
              <a
                href="https://wa.me/573204811325?text=Hola%20Sammy,%20quiero%20información%20sobre%20MoneyKA%20IA"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Línea de Atención - Yeferson</h3>
                <p className="text-gray-300">Contacto directo por WhatsApp</p>
              </div>
              <a
                href="https://wa.me/573205369912?text=Hola%20Yeferson,%20quiero%20información%20sobre%20MoneyKA%20IA"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Telegram - Sammy</h3>
                <p className="text-gray-300">Contacto directo por Telegram</p>
              </div>
              <a
                href="https://t.me/SammyRobledo"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por Telegram
              </a>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Telegram - Yeferson</h3>
                <p className="text-gray-300">Contacto directo por Telegram</p>
              </div>
              <a
                href="https://t.me/yefersonrodrigueztrader"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por Telegram
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Únete al Grupo</h3>
                <p className="text-gray-300">Accede a nuestra comunidad exclusiva</p>
              </div>
              <a
                href="https://chat.whatsapp.com/JnhRA66UENr8gHiEHIeSR8"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Unirse al Grupo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-electric-blue/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="text-electric-blue w-8 h-8 animate-pulse mr-2" />
            <span className="text-2xl font-bold gradient-text">MoneyKA.IA</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            La **Inteligencia Artificial** más avanzada para trading de índices sintéticos en Deriv
          </p>
          
          <p className="text-sm text-gray-500">
            © 2025 MoneyKA.IA - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;