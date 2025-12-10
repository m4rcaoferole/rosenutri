import Image from "next/image";

export default function AboutNutri() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold text-purple900">
          A nutri por trás do plano
          <br /> que vai transformar seu corpo com leveza.
        </h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:space-x-8">
          <div className="mb-8 md:mb-0">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661396861110-7041a3dff0af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nutricionista"
              width={320}
              height={320}
              className="h-80 w-80 rounded-full border-2 border-purple800 object-cover shadow-lg shadow-purple700/40"
            />
          </div>

          {/* Informações */}
          <div className="max-w-lg">
            <p className="mb-4 text-left text-lg font-medium italic text-gray700">
              Oi, eu sou a Rose Azuma! Nutricionista formada há 17 anos,
              especialista em Emagrecimento e Estilo de Vida Saudável.
            </p>
            <p className="mb-4 text-left text-lg font-medium italic text-gray700">
              Atendo online do Japão para o Brasil (e onde você estiver!),
              ajudando mulheres a transformarem seu corpo e sua rotina com
              leveza, estratégia e acolhimento.
            </p>
            <p className="mb-4 text-left text-lg font-medium italic text-gray700">
              Acredito que uma alimentação equilibrada vai além de cardápios
              prontos: é sobre criar novos hábitos de forma prática e possível
              para a sua realidade.
            </p>
            <p className="mb-4 text-left text-lg font-medium italic text-gray700">
              Sem dietas malucas, sem culpa — só escolhas inteligentes que cabem
              no seu dia a dia e te levam ao seu objetivo de forma duradoura.
            </p>
            <p className="mb-4 text-left text-lg font-medium italic text-gray700">
              Seja muito bem-vinda ao seu novo estilo de vida!
            </p>

            {/* Valores ou Especialidades */}
            {/* <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-4">
                <AcademicCapIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Formação Acadêmica</span>
              </div>
              <div className="flex items-center space-x-4">
                <UserGroupIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center space-x-4">
                <HeartIcon className="h-10 w-10 text-green-600" />
                <span className="text-gray-700">Compromisso com a Saúde</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
