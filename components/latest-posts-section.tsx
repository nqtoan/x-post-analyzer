export function LatestPostsSection() {
  const posts = [
    {
      date: "December 4, 2025",
      title: "How X's Algorithm Evaluates Engagement Signals",
      type: "BLOG POST",
      image: (
        <div className="bg-[#f5f3f0] p-6 h-40 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-foreground/60 mb-1">XANAI</div>
            <div className="font-bold text-foreground">Algorithm</div>
            <div className="text-2xl font-bold text-foreground">Signals</div>
          </div>
        </div>
      ),
    },
    {
      date: "November 24, 2025",
      title: "Improving Dwell Time on X with Better Copy",
      type: "BLOG POST",
      image: (
        <div className="bg-[#1a1a1a] p-6 h-40 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs text-white/60 mb-1">Guide</div>
            <div className="w-12 h-12 mx-auto border-4 border-[#fc6432] rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#fc6432] rounded-full flex items-center justify-center">
                <div className="text-[#fc6432] text-xs">DT</div>
              </div>
            </div>
            <div className="text-white text-xs mt-2">DWELL TIME</div>
          </div>
        </div>
      ),
    },
    {
      date: "June 10, 2025",
      title: "Breaking Down Tier-Based Scoring for Tweets",
      type: "VIDEO",
      image: (
        <div className="bg-[#f5f3f0] p-6 h-40 flex items-center justify-center relative">
          <div className="text-center">
            <div className="text-[#fc6432] font-bold text-lg">Scoring/</div>
            <div className="font-bold text-2xl text-foreground">Tiers</div>
            <div className="mt-2 bg-[#1a1a1a] text-white text-xs px-2 py-1 inline-block">
              {'<< VIDEO TUTORIAL >>'}
            </div>
          </div>
        </div>
      ),
    },
    {
      date: "June 10, 2025",
      title: "Using AI to Rewrite High-Performing Posts",
      type: "VIDEO",
      image: (
        <div className="bg-[#1a1a1a] p-6 h-40 flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#fc6432] font-mono text-sm">
              AI Rewrite<sup className="text-[8px]">TM</sup>
            </div>
            <div className="text-white text-xs mt-1">@</div>
            <div className="text-white font-bold">XANAI</div>
            <div className="text-white/60 text-xs">+demo</div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section className="bg-[#2a2a2a] py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Latest posts & videos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden">{post.image}</div>
              <div className="mt-4">
                <p className="text-white/60 text-sm">{post.date}</p>
                <h3 className="text-white font-medium mt-1 group-hover:text-[#fc6432] transition-colors">
                  {post.title}
                </h3>
                <span className="inline-block mt-2 text-xs border border-white/30 text-white/60 px-2 py-0.5">
                  {post.type}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-white hover:text-[#fc6432] transition-colors inline-flex items-center gap-2">
            View the Blog
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

