import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Countdown } from "@/components/Countdown";
import { Gifts } from "@/components/Gifts";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import bowImg from "@/assets/bow-clean.png";
import cathedral from "@/assets/cathedral.png";
import car from "@/assets/car.png";
import dress from "@/assets/dress.png";
import suit from "@/assets/suit.png";
import moon from "@/assets/moon.png";
import bouquet from "@/assets/bouquet.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luiza & Henrique · 03 Julho 2027 · São Paulo" },
      {
        name: "description",
        content:
          "Convite de casamento de Luiza & Henrique — 03 de Julho de 2027, São Paulo. Programação, traje, RSVP e lista de presentes.",
      },
      { property: "og:title", content: "Luiza & Henrique · 03 Julho 2027" },
      {
        property: "og:description",
        content: "Um convite contínuo, em papel, para celebrar o nosso dia.",
      },
    ],
  }),
  component: Invitation,
});

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative w-full ${className}`}>
      {children}
    </section>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="title-display text-3xl md:text-5xl text-center">{children}</h2>
  );
}

function Invitation() {
  const [rsvp, setRsvp] = useState({
    name: "",
    going: "" as "" | "sim" | "nao",
    adults: "",
    kids: "",
  });
  const [msg, setMsg] = useState({ name: "", message: "" });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 300) + "px";
  }, []);

  useEffect(() => {
    autoResize();
  }, [msg.message, autoResize]);

  const submitRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvp.name || !rsvp.going) {
      toast.error("Por favor, preencha seu nome e a confirmação.");
      return;
    }
    toast.success("Presença confirmada — obrigado!");
    setRsvp({ name: "", going: "", adults: "", kids: "" });
  };

  const submitMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.name || !msg.message) {
      toast.error("Escreva seu nome e mensagem.");
      return;
    }
    toast.success("Mensagem enviada com carinho.");
    setMsg({ name: "", message: "" });
  };

  return (
    <>
      <Header />
      <Toaster />

      <main className="relative z-10 w-full overflow-hidden">
        {/* HERO — single bow + names right below */}
        <Section className="pt-28 md:pt-32 pb-8 px-4">
          <div className="flex flex-col items-center">
            <img
              src={bowImg}
              alt="Laço decorativo"
              width={600}
              height={600}
              className="w-[380px] md:w-[500px] mix-blend-multiply select-none"
            />
            <div className="-mt-2 text-center">
              <h1 className="font-display text-5xl md:text-8xl text-[var(--ink-sage)] italic leading-none">
                Luiza
                <span className="not-italic font-light mx-2 md:mx-4">&amp;</span>
                Henrique
              </h1>
              <div className="flex items-center justify-center gap-4 mt-6">
                <span className="h-px w-16 bg-[var(--ink-sage)]/40" />
                <p className="font-display tracking-[0.35em] uppercase text-sm md:text-base text-[var(--ink-sage)]">
                  03 Julho 2027
                </p>
                <span className="h-px w-16 bg-[var(--ink-sage)]/40" />
              </div>
              <p className="font-serif italic text-base md:text-lg text-[var(--ink-sage-soft)] mt-3">
                São Paulo
              </p>
            </div>
          </div>
        </Section>

         <Section className="py-16 md:py-24 px-6">
           <div className="max-w-xl mx-auto text-center">
             <Title>Boas Vindas</Title>
             <div className="ink-line my-8 mx-auto w-40" />
             <p className="mb-7 font-serif text-base md:text-lg leading-relaxed text-[var(--ink-sage-deep)] italic">
               Querido familiares e amigos,
             </p>
             <p className="mb-7 font-serif text-base md:text-lg leading-relaxed text-[var(--ink-sage-deep)] italic">
               Estamos muito felizes em compartilhar com vocês esse momento tão especial nas nossas vidas. Nesse site, vocês encontrarão informações importantes sobre o dia do nosso casamento. Tudo foi pensado com muito carinho para que juntos aproveitemos esse dia.
             </p>
             <p className="mb-7 font-serif text-base md:text-lg leading-relaxed text-[var(--ink-sage-deep)] italic">
               Sua presença é muito importante para nós!
             </p>
             <p className="mt-6 font-display tracking-[0.3em] text-xs uppercase text-[var(--ink-sage)]">
               — com amor, Luiza &amp; Henrique
             </p>
           </div>
         </Section>

        {/* CONTAGEM + PROGRAMAÇÃO — reduced gap */}
        <Section className="py-8 md:py-10 px-6">
          <div className="text-center">
            <p className="font-serif italic text-sm text-[var(--ink-sage-soft)] mb-8">
              03 Julho 2027
            </p>
            <Countdown />
          </div>
        </Section>

        <Section className="py-10 md:py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <Title>Programação</Title>
              <div className="ink-line my-6 w-32" />
              <p className="font-serif italic text-[var(--ink-sage-deep)] leading-relaxed">
                A cerimônia religiosa será realizada na Catedral Metropolitana, seguida de recepção
                em jantar e dança ao cair da noite.
              </p>
              <div className="mt-8 space-y-5 font-serif">
                <div>
                  <p className="font-display tracking-[0.25em] text-xs uppercase text-[var(--ink-sage)]">
                    Cerimônia
                  </p>
                  <p className="mt-1 text-[var(--ink-sage-deep)]">Catedral da Sé</p>
                  <p className="text-sm text-[var(--ink-sage-soft)] italic">Praça da Sé · Centro</p>
                  <p className="text-sm mt-1">Sábado, 03 de Julho de 2027 · 17h00</p>
                </div>
                <div>
                  <p className="font-display tracking-[0.25em] text-xs uppercase text-[var(--ink-sage)]">
                    Recepção
                  </p>
                  <p className="mt-1 text-[var(--ink-sage-deep)]">Sala São Paulo</p>
                  <p className="text-sm text-[var(--ink-sage-soft)] italic">
                    Praça Júlio Prestes · Campos Elíseos
                  </p>
                  <p className="text-sm mt-1">a partir das 19h00</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={cathedral}
                alt="Catedral"
                loading="lazy"
                width={768}
                height={768}
                className="w-full max-w-sm mix-blend-multiply"
              />
            </div>
          </div>
        </Section>

        {/* TRAJE — reduced bottom spacing */}
        <Section className="py-12 md:py-16 px-6">
          <Title>Traje</Title>
          <p className="text-center font-serif italic text-[var(--ink-sage-soft)] mt-3">
            Black Tie
          </p>
          <div className="ink-line my-8 mx-auto w-40" />
          <div className="max-w-4xl mx-auto grid grid-cols-2 gap-10 md:gap-20 mt-10">
            <div className="text-center">
              <p className="font-display tracking-[0.35em] text-sm uppercase text-[var(--ink-sage)]">
                Mulheres
              </p>
              <p className="mt-3 font-serif italic text-sm text-[var(--ink-sage-deep)] max-w-xs mx-auto">
                Vestido longo. Tons sóbrios e elegantes — evitar branco, off-white e tons rosé.
              </p>
              <img
                src={dress}
                alt="Vestido"
                loading="lazy"
                width={512}
                height={768}
                className="mt-6 w-full max-w-[220px] mx-auto mix-blend-multiply"
              />
            </div>
            <div className="text-center">
              <p className="font-display tracking-[0.35em] text-sm uppercase text-[var(--ink-sage)]">
                Homens
              </p>
              <p className="mt-3 font-serif italic text-sm text-[var(--ink-sage-deep)] max-w-xs mx-auto">
                Smoking ou terno escuro com gravata borboleta. Sapatos sociais pretos.
              </p>
              <img
                src={suit}
                alt="Smoking"
                loading="lazy"
                width={512}
                height={768}
                className="mt-6 w-full max-w-[220px] mx-auto mix-blend-multiply"
              />
            </div>
          </div>
        </Section>

        {/* VALLET — centered, no left dash, reduced spacing */}
        <Section className="py-10 md:py-14 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src={car}
                alt="Vallet"
                loading="lazy"
                width={1024}
                height={640}
                className="w-full max-w-md mix-blend-multiply"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-center">
              <Title>Vallet</Title>
              <p className="font-serif italic text-[var(--ink-sage-deep)] leading-relaxed mt-6 max-w-md mx-auto">
                Haverá serviço de manobrista disponível para todos os convidados, com acesso pela
                Praça Júlio Prestes, nº 16. Recomendamos chegar com pelo menos 30 minutos de
                antecedência para acomodação dos veículos.
              </p>
              <p className="mt-6 font-display tracking-[0.3em] text-xs uppercase text-[var(--ink-sage)]">
                Manobrista cortesia · 16h30 às 02h00
              </p>
            </div>
          </div>
        </Section>

        {/* RSVP — refined */}
        <Section id="rsvp" className="py-10 md:py-14 px-6">
          <div className="max-w-xl mx-auto text-center">
            <Title>RSVP</Title>
            <form onSubmit={submitRsvp} className="space-y-6 text-left mt-10">
              {/* 1. Você irá ao evento? */}
              <div>
                <p className="font-serif italic text-[var(--ink-sage-deep)] mb-3 text-center">
                  Você irá ao evento?
                </p>
                <div className="flex gap-10 justify-center">
                  {(["sim", "nao"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setRsvp({ ...rsvp, going: v })}
                      className={`font-serif italic text-lg transition-all duration-200 pb-0.5 ${
                        rsvp.going === v
                          ? "text-[var(--rose-deep)] border-b border-[var(--rose-deep)]"
                          : "text-[var(--ink-sage-soft)] hover:text-[var(--rose-deep)]"
                      }`}
                    >
                      {v === "sim" ? "Sim" : "Não"}
                    </button>
                  ))}
                </div>
              </div>
              {/* 2. Nome */}
              <input
                className="invite-input"
                placeholder="Nome completo"
                value={rsvp.name}
                onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}
                maxLength={100}
              />
              {/* 3+4. Adultos / Crianças */}
              <div className="grid grid-cols-2 gap-6">
                <input
                  className="invite-input"
                  placeholder="Adultos"
                  inputMode="numeric"
                  value={rsvp.adults}
                  onChange={(e) =>
                    setRsvp({ ...rsvp, adults: e.target.value.replace(/\D/g, "").slice(0, 2) })
                  }
                />
                <input
                  className="invite-input"
                  placeholder="Crianças"
                  inputMode="numeric"
                  value={rsvp.kids}
                  onChange={(e) =>
                    setRsvp({ ...rsvp, kids: e.target.value.replace(/\D/g, "").slice(0, 2) })
                  }
                />
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="invite-btn">
                  Confirmar Presença
                </button>
              </div>
            </form>
          </div>
        </Section>

        {/* PRESENTES */}
        <Section className="py-20 md:py-28 px-6">
          <Title>Presentes</Title>
          <p className="text-center font-serif italic text-[var(--ink-sage-soft)] mt-3 max-w-md mx-auto">
            Sua presença já é o maior dos presentes. Mas, se desejar nos abençoar com algo mais,
            ficaremos imensamente gratos.
          </p>
          <div className="ink-line my-10 mx-auto w-40" />
          <Gifts />
        </Section>

        {/* MENSAGEM — no divider, compact textarea */}
        <Section id="mensagem" className="py-20 md:py-28 px-6">
          <div className="max-w-xl mx-auto text-center">
            <Title>Mensagem para os Noivos</Title>
            <form onSubmit={submitMsg} className="space-y-4 text-left mt-8">
              <input
                className="invite-input"
                placeholder="Seu nome"
                value={msg.name}
                onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                maxLength={100}
              />
              <textarea
                ref={textareaRef}
                className="invite-input resize-none overflow-y-auto"
                style={{ minHeight: "2.5rem", maxHeight: "300px" }}
                placeholder="Escreva uma mensagem aos noivos..."
                value={msg.message}
                onChange={(e) => setMsg({ ...msg, message: e.target.value })}
                maxLength={500}
                rows={1}
              />
              <div className="text-center pt-2">
                <button type="submit" className="invite-btn">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Section>

        {/* FOOTER — editorial, integrated */}
        <footer className="relative py-20 md:py-28 px-6 border-t border-[var(--ink-sage)]/15">
          <div className="max-w-lg mx-auto text-center">
            <p className="font-display text-xl md:text-2xl tracking-[0.15em] text-[var(--ink-sage)]">
              Henrique &amp; Luiza
            </p>
            <p className="font-display tracking-[0.35em] text-xs text-[var(--ink-sage-soft)] mt-4">
              03 &nbsp;.&nbsp; 07 &nbsp;.&nbsp; 2027
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}