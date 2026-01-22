export function ProblemSection() {
  return (
    <section className="bg-[#fc6432] relative">
      {/* Dotted top border */}
      <div className="absolute top-0 left-0 right-0 border-t border-dashed border-foreground/30" />
      
      {/* Label */}
      <div className="absolute top-4 left-4 md:left-6">
        <span className="bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-wider">
          The Problem
        </span>
      </div>

      {/* Content */}
      <div className="px-6 py-32 md:py-40 bg-sidebar-accent">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
            The algorithm is a black box.
            <br />
            <em>We&apos;re here to open it.</em>
          </h2>

          {/* Body text */}
          <div className="mt-10 md:mt-12 space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p className="text-balance">
              Every post is a gamble. Creators spend hours crafting content, only to watch it disappear into the void. The X algorithm decides what gets seen—but nobody knows why.
            </p>
            <p className="text-balance">
              XANAI is changing that. We&apos;re turning the recommendation algorithm into clear, actionable insights. Real scoring based on actual signals. Specific suggestions to improve reach. Tools that give creators back control of their content&apos;s destiny.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

