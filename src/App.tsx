
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Clock,
  Headphones,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* HERO - Curso de Livros */}
      {/* HERO - Curso de Livros */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-blue-500 blur-3xl rounded-full top-10 left-10" />
          <div className="absolute w-96 h-96 bg-purple-500 blur-3xl rounded-full bottom-10 right-10" />
        </div>

        <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6">
              <BookOpen size={16} />
              <span className="text-sm">
                Curso oficial - Certificado incluso
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Curso Produção Literária e Leitura Dinâmica
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Aprenda a ler 3x mais rápido, escrever com mais clareza e transformar
              suas ideias em livros de sucesso. Método comprovado com mais de 5 mil alunos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg">
                Garantir Minha Vaga
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all">
                Ver Conteúdo Programático
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                12 módulos completos
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                Certificado incluso
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                Suporte 30 dias
              </div>
            </div>

            <div className="mt-10 bg-white/5 rounded-2xl p-4 border border-white/10 inline-block">
              <span className="text-sm text-gray-300 line-through">De R$ 497,00</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">12x de R$ 29,90</span>
                <span className="text-sm text-gray-300">ou R$ 297,00 à vista</span>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO - VÍDEO + KIT DIGITAL */}
          <div className="space-y-6">
            {/* VÍDEO QUE INICIA AUTOMATICAMENTE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] p-4 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                  {/* Vídeo do YouTube que inicia automático e sem controles (opcional) */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&loop=1&playlist=dQw4w9WgXcQ"
                    title="Vídeo demonstrativo do curso"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  
                </div>
                <p className="text-center text-sm text-gray-300 mt-3">
                  ▶️ Assista ao vídeo de apresentação do curso
                </p>
              </div>
            </motion.div>

            {/* MOCKUP DO KIT DIGITAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-center">
                  <BookOpen size={64} className="mx-auto text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white">Kit Digital</h3>
                  <p className="text-white/80 mt-2">4 e-books bônus + planilhas</p>
                  <div className="mt-6 bg-white/20 rounded-full px-4 py-2 inline-block">
                    <span className="text-white font-semibold">Valor total: R$ 1.247,00</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-sm">Acesso vitalício</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-sm">Atualizações gratuitas</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-sm">Comunidade exclusiva</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS DO CURSO */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black">
              O que você vai aprender
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <TrendingUp size={34} />,
                title: 'Leitura Dinâmica',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.'
              },
              {
                icon: <Users size={34} />,
                title: 'Comunidade de Autores',
                desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
              },
              {
                icon: <Award size={34} />,
                title: 'Certificação Internacional',
                desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              },
              {
                icon: <Clock size={34} />,
                title: 'Aprenda no Seu Ritmo',
                desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              },
              {
                icon: <BookOpen size={34} />,
                title: '+50 Exercícios Práticos',
                desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
              },
              {
                icon: <Headphones size={34} />,
                title: 'Suporte 24h por Chat',
                desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 px-6 lg:px-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black">
              O que nossos alunos dizem
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: 'Ana Silva',
                role: 'Autora best-seller',
                text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lacus eget justo tincidunt. Sed do eiusmod tempor incididunt ut labore.”',
                stars: 5
              },
              {
                name: 'Carlos Mendes',
                role: 'Escritor iniciante',
                text: '“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.”',
                stars: 5
              },
              {
                name: 'Mariana Costa',
                role: 'Produtora de conteúdo',
                text: '“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit.”',
                stars: 5
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-6 text-gray-200 leading-relaxed">{item.text}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center font-bold text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <span className="text-sm text-gray-400">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS DO CURSO */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black">
              Conteúdo Programático
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              'Módulo 1: Fundamentos da Escrita Criativa',
              'Módulo 2: Técnicas de Leitura Dinâmica',
              'Módulo 3: Estrutura de Narrativa',
              'Módulo 4: Desenvolvimento de Personagens',
              'Módulo 5: Revisão e Edição Profissional',
              'Módulo 6: Marketing para Autores',
              'Módulo 7: Publicação Independente',
              'Módulo 8: Como Vender seu Livro',
              'Módulo 9: Produção de E-books',
              'Módulo 10: Direitos Autorais',
              'Módulo 11: Networking Literário',
              'Módulo 12: Projeto Final e Certificação',
            ].map((modulo, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <span className="font-semibold text-gray-800">{modulo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL COM PREÇO */}
      <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Invista no seu futuro literário
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam commodo sapien sed erat interdum, a fermentum nisi.
          </p>

          <div className="mt-8 bg-white/10 rounded-3xl p-6 inline-block backdrop-blur-sm">
            <span className="text-sm line-through text-white/60">De R$ 997,00</span>
            <div className="flex items-baseline gap-3 justify-center">
              <span className="text-5xl font-black">12x de R$ 39,90</span>
              <span className="text-lg">ou R$ 397,00 à vista</span>
            </div>
            <p className="text-sm text-white/70 mt-2">*Garantia de 7 dias ou seu dinheiro de volta</p>
          </div>

          <button className="mt-10 bg-white text-black px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-xl">
            Quero me Inscrever Agora
            <ArrowRight size={20} />
          </button>

          <p className="mt-6 text-sm text-white/60">
            ✅ Acesso imediato  ✅ Certificado incluso  ✅ Suporte prioritário
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Curso de Livros - Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Suporte 24h</a>
          </div>
        </div>
      </footer>
    </div>
  );
}