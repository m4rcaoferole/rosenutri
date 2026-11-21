import {
  BookOpen,
  Calendar,
  Clock,
  DeviceMobile,
  Fire,
  Gift,
  Handshake,
  Heart,
  ListChecks,
  Notebook,
  PlayCircle,
  Target,
  Users,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";

import SakuraIcon from "@/components/ui/SakuraIcon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CTA_TEXT, WHATSAPP_MESSAGES } from "@/config/site";

const PILLARS = [
  {
    title: "Acompanhamento Próximo",
    subtitle: "e Humanizado",
    icon: Heart,
    headerClass: "bg-gradient-to-r from-murasaki200 to-murasaki300 text-white",
    subtitleClass: "text-white/90",
    items: [
      { icon: Calendar, text: "90 dias de suporte" },
      { icon: VideoCamera, text: "5 encontros online" },
      { icon: Clock, text: "Horário flexível para o seu turno" },
      { icon: Target, text: "Plano alimentar adaptativo Sakura" },
      { icon: DeviceMobile, text: "Acesso completo ao App da Nutri" },
    ],
  },
  {
    title: "Sistema Antidesistência",
    subtitle: "Sakura",
    icon: Fire,
    headerClass: "bg-gradient-to-r from-midori100 to-midori200 text-white",
    subtitleClass: "text-white/90",
    items: [
      { icon: Notebook, text: "Diário alimentar e reflexivo" },
      { icon: Users, text: "Avaliações corporais" },
      { icon: Handshake, text: "Acompanhamento contínuo" },
      { icon: ListChecks, text: "Missões semanais" },
    ],
  },
  {
    title: "Bônus Exclusivos",
    subtitle: "do Método",
    icon: Gift,
    headerClass: "bg-shiro300 text-murasaki300",
    subtitleClass: "text-gray700",
    items: [
      { icon: BookOpen, text: "Ebook: Vida livre da compulsão" },
      { icon: BookOpen, text: "Guia de marmitas congeladas" },
      { icon: PlayCircle, text: "Mini Aula: Sono e hormônios" },
      { icon: BookOpen, text: "Ebook: Lanches e sucos detox" },
    ],
  },
];

export default function MetodoSakuraPackage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-shiro100 to-gray50 py-16 lg:py-20">
      <SakuraIcon className="pointer-events-none absolute right-10 top-10 h-14 w-14 text-murasaki100/15" />
      <SakuraIcon className="pointer-events-none absolute bottom-20 left-12 h-12 w-12 text-murasaki100/15" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h3 className="mb-4 font-serif text-3xl font-bold text-murasaki200 sm:text-4xl">
            O que você recebe no Método Sakura
          </h3>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray300/60 bg-white shadow-lg"
              >
                {/* Header - accessible contrast across all 3 pillars */}
                <div
                  className={`flex min-h-[6rem] items-center gap-3 p-5 ${pillar.headerClass}`}
                >
                  <PillarIcon size={32} className="shrink-0" weight="fill" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg font-bold leading-tight">
                      {pillar.title}
                    </h4>
                    <span className={`text-sm font-medium ${pillar.subtitleClass}`}>
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <ul className="flex flex-1 flex-col gap-4 p-6">
                  {pillar.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.text} className="flex items-start gap-3">
                        <ItemIcon
                          size={22}
                          className="mt-0.5 shrink-0 text-murasaki200"
                          aria-hidden="true"
                        />
                        <span className="text-base leading-snug text-gray700">
                          {item.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Motivational Quote & CTA */}
        <div className="mt-12 rounded-2xl border border-murasaki100/20 bg-white p-8 text-center shadow-md">
          <p className="mb-6 font-serif text-xl font-semibold italic text-gray700 sm:text-2xl">
            &ldquo;Desistir não é opção. O caminho é leve, mas tem
            propósito.&rdquo;
          </p>
          <WhatsAppButton
            label={CTA_TEXT}
            message={WHATSAPP_MESSAGES.metodoSakura}
          />
        </div>
      </div>
    </section>
  );
}
