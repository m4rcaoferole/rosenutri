export default function MetodoSakuraPhases() {
  return (
    <section className="relative bg-white py-16">
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-murasaki100/30 via-murasaki100/50 to-murasaki100/30" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-2xl font-bold text-murasaki200 sm:text-3xl">
            As 4 Fases do Método Sakura
          </h3>
          <p className="mx-auto max-w-2xl text-gray500">
            Como a flor de cerejeira que floresce em etapas, sua transformação
            também acontece gradualmente
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {/* Fase 1 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-murasaki100 to-murasaki200 text-2xl shadow-lg">
                🌱
              </div>
              <div className="mt-2 h-full w-px bg-murasaki100/30" />
            </div>
            <div className="flex-1 rounded-2xl bg-gradient-to-r from-murasaki100/10 to-transparent p-6">
              <h4 className="mb-1 text-lg font-bold text-murasaki300">
                Fase 1: Solo
              </h4>
              <p className="text-sm font-medium text-murasaki200">
                Preparação do terreno
              </p>
              <p className="mt-2 text-gray700">
                Aqui você aprende os fundamentos da alimentação saudável
                adaptada ao Japão e prepara seu corpo para a transformação.
              </p>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-midori100 to-midori200 text-2xl shadow-lg">
                🌿
              </div>
              <div className="mt-2 h-full w-px bg-midori100/30" />
            </div>
            <div className="flex-1 rounded-2xl bg-gradient-to-r from-midori100/10 to-transparent p-6">
              <h4 className="mb-1 text-lg font-bold text-midori200">
                Fase 2: Brotar
              </h4>
              <p className="text-sm font-medium text-midori100">
                Os primeiros resultados aparecem
              </p>
              <p className="mt-2 text-gray700">
                Seu corpo começa a responder, o inchaço diminui e você sente
                mais energia no dia a dia.
              </p>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-shiro300 to-warning text-2xl shadow-lg">
                🌸
              </div>
              <div className="mt-2 h-full w-px bg-shiro300/50" />
            </div>
            <div className="flex-1 rounded-2xl bg-gradient-to-r from-shiro200/50 to-transparent p-6">
              <h4 className="mb-1 text-lg font-bold text-murasaki300">
                Fase 3: Florescer
              </h4>
              <p className="text-sm font-medium text-murasaki200">
                A transformação se torna visível
              </p>
              <p className="mt-2 text-gray700">
                Você emagrece de forma saudável, recupera sua autoestima e se
                sente linda novamente.
              </p>
            </div>
          </div>

          {/* Fase 4 */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-murasaki200 to-murasaki300 text-2xl shadow-lg">
                🌳
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-gradient-to-r from-murasaki100/15 to-transparent p-6">
              <h4 className="mb-1 text-lg font-bold text-murasaki300">
                Fase 4: Enraizar
              </h4>
              <p className="text-sm font-medium text-murasaki200">
                Manutenção e consolidação
              </p>
              <p className="mt-2 text-gray700">
                Você aprende a manter os resultados para sempre, criando hábitos
                sustentáveis que se encaixam na sua vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
