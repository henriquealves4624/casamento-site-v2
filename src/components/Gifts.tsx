import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import bouquet from "@/assets/bouquet.png";
import moon from "@/assets/moon.png";
import dress from "@/assets/dress.png";

const GIFTS = [
  { id: 1, title: "Jogo de Taças de Cristal", price: "R$ 480", img: bouquet },
  { id: 2, title: "Jantar à Luz de Velas", price: "R$ 320", img: moon },
  { id: 3, title: "Lua de Mel · Toscana", price: "R$ 1.200", img: dress },
  { id: 4, title: "Aparador de Mogno", price: "R$ 890", img: bouquet },
];

export function Gifts() {
  const [open, setOpen] = useState<null | (typeof GIFTS)[number]>(null);
  const [method, setMethod] = useState<"pix" | "card" | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
        {GIFTS.map((g) => (
          <button
            key={g.id}
            onClick={() => {
              setOpen(g);
              setMethod(null);
            }}
            className="group flex flex-col items-center text-center bg-[var(--paper)]/30 backdrop-blur-[1px] border border-[var(--ink-sage)]/20 p-4 transition-all hover:bg-[var(--paper)]/60 hover:border-[var(--ink-sage)]/40"
            style={{ minHeight: "351px" }}
          >
            <div className="w-full aspect-[3/4] flex items-center justify-center overflow-hidden">
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-sm md:text-base text-[var(--ink-sage)] mt-3 leading-tight">
              {g.title}
            </h3>
            <p className="font-serif italic text-xs text-[var(--ink-sage-soft)] mt-1">{g.price}</p>
            <span className="invite-btn mt-3 text-[0.65rem] py-2 px-4">Presentear</span>
          </button>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="bg-[var(--paper)] border-[var(--ink-sage)]/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-[var(--ink-sage)] text-center">
              {open?.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-center font-serif italic text-[var(--ink-sage-soft)]">{open?.price}</p>
          <div className="ink-line my-2" />
          {!method && (
            <div className="flex flex-col gap-3">
              <button onClick={() => setMethod("pix")} className="invite-btn">
                Pix
              </button>
              <p className="text-center text-xs text-[var(--ink-sage-soft)] -mt-1 italic">
                Pagamento instantâneo pelo seu banco
              </p>
              <button onClick={() => setMethod("card")} className="invite-btn mt-2">
                Cartão ou Boleto
              </button>
              <p className="text-center text-xs text-[var(--ink-sage-soft)] -mt-1 italic">
                Pagamento seguro via Mercado Pago
              </p>
            </div>
          )}
          {method === "pix" && (
            <div className="text-center space-y-3">
              <p className="text-sm">Use a chave Pix abaixo:</p>
              <code className="block text-xs bg-[var(--ink-sage)]/10 p-3 break-all">
                luiza.henrique@casamento.com
              </code>
              <button onClick={() => setMethod(null)} className="invite-btn">
                Voltar
              </button>
            </div>
          )}
          {method === "card" && (
            <div className="text-center space-y-3">
              <p className="text-sm">Você será redirecionado ao Mercado Pago.</p>
              <button onClick={() => setMethod(null)} className="invite-btn">
                Voltar
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
