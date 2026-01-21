export function HeroSection() {
  return (
    <section className="border border-border m-4 md:m-6 relative overflow-hidden">
      <div className="relative py-16 md:py-24 px-6">
        {/* ASCII Art Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30 pointer-events-none">
          <pre className="text-[8px] md:text-[10px] text-foreground/60 font-mono leading-tight whitespace-pre">
{`        @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
       @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
      @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
     @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
    @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
  @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
 @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @   @
@|@|@|*|*|@\'*@'·_· ·*·               @@@@@       ··*····················@   @   @
@@||@|@|@'$##|'*#@·$#+'*#+'':·#          @@@@@@@@@@     *'''@@@@@@@@@@@@@@   @   @
||@|@|'@'@'$##|'*·@·'$#·'*#·''|:·#    ·    @@@@'*·'@'·*·'#·'#·····'#'''**''@''|#  @   @
||#|'*#''##+'·:#·@·_··'$#'''%'·|  ·'#@'''|@||@|@|@|'·'*'@'·'#'+'·'+'·''@''|'+'|·|#   @
#|#'*#''###+'·:#·@·_··'$$'''''%'·|  ·'#@'''|@||@|@|@|@|'·'*'@'·'#'+'·'+'·''@''|'+'|·|#`}
          </pre>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-none">
            OPTIMIZE FOR THE ALGORITHM.
          </h1>
          <p className="mt-6 text-foreground/70 text-lg max-w-lg mx-auto">
            X Post Analyzer evaluates your posts using real recommendation signals and AI, helping you understand what performs well and how to improve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/analyze" className="bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
              Analyze a Post
              <span>→</span>
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              View sample analysis →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

