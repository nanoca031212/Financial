import React from "react";

export default function AtuacaoPage() {
  return (
    <main className="flex flex-col w-full bg-[#111111] font-sans">
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#2c2e33]">
        {/* Black block placeholder for the hero image */}
        <div className="w-64 h-96 md:w-96 md:h-[32rem] bg-black rounded-lg shadow-2xl z-10"></div>

        {/* "A Estrutura" Text */}
        <div className="absolute left-8 md:left-24 top-32 md:top-1/4 z-20">
          <h1 className="text-white text-4xl md:text-5xl font-serif tracking-wide">
            A Estrutura
          </h1>
        </div>

        {/* "Michel Stawicki..." Text */}
        <div className="absolute right-8 md:right-24 bottom-16 md:bottom-32 z-20 text-right">
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-xs">
            Michel Stawicki –<br />
            Financial Structure.
          </p>
        </div>
      </section>

      {/* --- METHOD SECTION --- */}
      <section className="min-h-screen py-24 px-6 md:px-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
          Intervenções em estrutura financeira exigem método.
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mb-16 px-4">
          A atuação é conduzida de forma estruturada, com foco em diagnóstico claro, definição objetiva de escopo e fortalecimento da base organizacional
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl text-left">
          
          {/* Card 1 */}
          <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-sm flex flex-col justify-start hover:bg-[#252525] transition-colors duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 w-1/2">Análise Estruturada</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Compreensão aprofundada do modelo de geração de resultado, estrutura de capital, ciclo financeiro, governança decisória e maturidade da equipe.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-sm flex flex-col justify-start hover:bg-[#252525] transition-colors duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 w-1/2">Definição de Escopo</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Delimitação clara do foco da intervenção, priorizando impacto estrutural e coerência com o momento da empresa.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-sm flex flex-col justify-start hover:bg-[#252525] transition-colors duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 w-1/2">Construção Estrutural</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Implementação assistida, organização de rotinas, definição de critérios e transferência de padrão.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1f1f1f] p-8 md:p-10 rounded-sm flex flex-col justify-start hover:bg-[#252525] transition-colors duration-300">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Consolidação</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Validação das entregas e alinhamento do novo padrão operacional.
            </p>
          </div>

        </div>
      </section>

      {/* --- DELIVERABLES SECTION --- */}
      <section className="bg-[#111111] pt-24 flex flex-col w-full overflow-hidden">
        {/* Header Container */}
        <div className="w-full px-6 md:px-16 lg:px-24 mb-12">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que a Intervenção Entrega?
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Ao final do processo, a empresa passa a operar com:
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row w-full flex-1">
          
          {/* Left Side (List) with Top Border */}
          <div className="w-full md:w-[55%] border-t border-white/30 pl-6 md:pl-16 lg:pl-24 pr-8 md:pr-12 pt-16 pb-24 flex flex-col justify-center space-y-12">
            
            {/* Item 1 */}
            <div className="flex items-start group">
              <svg className="w-12 h-12 mt-1 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9 12 12 15 16 9" />
              </svg>
              <div className="ml-6">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Solução estruturada para o momento atual
                </h4>
                <p className="text-gray-400 text-base md:text-lg">
                  Intervenção alinhada à fase específica do negócio.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start group">
              <svg className="w-12 h-12 mt-1 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9 12 12 15 16 9" />
              </svg>
              <div className="ml-6">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Evolução estrutural da área financeira
                </h4>
                <p className="text-gray-400 text-base md:text-lg">
                  Processos e critérios organizados para absorver maior complexidade.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start group">
              <svg className="w-12 h-12 mt-1 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9 12 12 15 16 9" />
              </svg>
              <div className="ml-6">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Clareza decisória
                </h4>
                <p className="text-gray-400 text-base md:text-lg">
                  Instrumentos que permitem decisões com previsibilidade.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start group">
              <svg className="w-12 h-12 mt-1 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9 12 12 15 16 9" />
              </svg>
              <div className="ml-6">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Organização financeira disciplinada
                </h4>
                <p className="text-gray-400 text-base md:text-lg">
                  Base estruturada de capital, governança e indicadores.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side (White Block) */}
          <div className="w-full md:w-[45%] bg-white min-h-[400px] md:min-h-auto"></div>
          
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full flex flex-col md:flex-row min-h-[400px]">
        
        {/* Left Side (Text and Button) */}
        <div className="w-full md:w-1/2 bg-[#f8f9fa] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl leading-relaxed font-sans mb-10 max-w-xl">
            Estrutura financeira sólida permite <strong>crescimento com previsibilidade,</strong> disciplina e consistência.
          </p>
          <button className="bg-[#111111] text-white px-8 py-4 w-fit text-sm md:text-base font-medium transition-colors hover:bg-black">
            Agendar Conversa Estratégica
          </button>
        </div>

        {/* Right Side (Logo Placeholder - White Background) */}
        <div className="w-full md:w-1/2 bg-white min-h-[300px] md:min-h-full flex items-center justify-center relative border-l border-gray-100">
          {/* MS Logo will go here */}
        </div>

      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="w-full bg-[#171717] text-white flex flex-col mt-auto relative z-20">
        {/* Main Footer Content */}
        <div className="w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          
          {/* Column 1: Logo & Email */}
          <div className="flex flex-col space-y-8 flex-1">
            {/* Logo Construction */}
            <div className="flex items-center space-x-4">
              <span className="text-5xl font-serif text-white tracking-tighter">MS</span>
              <div className="w-[1px] h-10 bg-white/40"></div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-sans font-medium tracking-wide leading-none mb-1">FINANCIAL</span>
                <span className="text-base font-serif text-gray-300 leading-none">Structure</span>
              </div>
            </div>
            {/* Email */}
            <a href="mailto:relacionamento@msfinancialstructure.com" className="text-gray-400 text-sm hover:text-white transition-colors">
              relacionamento@msfinancialstructure.com
            </a>
          </div>

          {/* Column 2: Links Rápidos */}
          <div className="flex flex-col space-y-4 md:w-1/4">
            <h4 className="text-white text-lg font-bold mb-2">Links Rápidos</h4>
            <a href="/" className="text-gray-400 text-sm hover:text-white transition-colors">Home</a>
            <a href="/atuacao" className="text-gray-400 text-sm hover:text-white transition-colors">Atuação</a>
            <a href="/experiencia" className="text-gray-400 text-sm hover:text-white transition-colors">Experiência</a>
            <a href="/contato" className="text-gray-400 text-sm hover:text-white transition-colors">Contato</a>
          </div>

          {/* Column 3: Nossas Redes */}
          <div className="flex flex-col space-y-4 md:w-1/4">
            <h4 className="text-white text-lg font-bold mb-2">Nossas Redes</h4>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:relacionamento@msfinancialstructure.com" className="text-gray-400 text-sm hover:text-white transition-colors">E-mail</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Instagram</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-[#4a4a4a] py-4 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
          <p>Copyright: © 2026 Michel Stawicki. Todos os direitos reservados.</p>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso e Política de Privacidade</a>
        </div>
      </footer>

    </main>
  );
}
