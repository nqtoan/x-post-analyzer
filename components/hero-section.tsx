export function HeroSection() {
  return (
    <section className="border border-border m-4 md:m-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-[#fc6432]/10">
      <div className="relative py-16 md:py-24 px-6">
        {/* Gradient Accent Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fc6432]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fc6432]/10 rounded-full blur-2xl pointer-events-none" />
        
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none font-serif text-black">
            OPTIMIZE FOR THE ALGORITHM.
          </h1>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/analyze" className="bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors inline-flex items-center gap-2">
              Analyze a Post
              <span>→</span>
            </a>
            <a href="/analyze" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              View X Recommendation Algorithm →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

