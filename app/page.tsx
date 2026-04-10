import BubblingEffect from '@/components/BubblingEffect';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <BubblingEffect />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]" />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">NOW IN BETA</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Run Your Business on
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Engine AI
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            The infrastructure platform that positions your business to thrive in the AI era.
            <span className="block mt-2 text-gray-400">Scalable. Secure. Built for the future.</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border border-gray-600 hover:border-cyan-500/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-cyan-950/20">
              Schedule Demo
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm uppercase tracking-widest">Trusted by forward-thinking companies</p>
            <div className="flex items-center gap-8 opacity-40">
              <div className="w-24 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded" />
              <div className="w-24 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded" />
              <div className="w-24 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded hidden sm:block" />
              <div className="w-24 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded hidden md:block" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the AI-First Enterprise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to deploy, scale, and manage AI-powered applications at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powering Every Use Case
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From intelligent automation to generative AI, Engine AI handles it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-950/30 border border-gray-800 hover:border-cyan-500/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-6">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join hundreds of companies already running on Engine AI. Start building today — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30">
                Start Building Free
              </button>
              
              <button className="px-8 py-4 border border-gray-600 hover:border-cyan-500/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300">
                Talk to Sales
              </button>
            </div>

            <p className="mt-8 text-gray-500 text-sm">
              Free tier includes 10K requests/month • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-white font-semibold">Engine AI</span>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2026 Engine AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Feature icons as simple SVG components
const ServerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const features = [
  {
    icon: ServerIcon,
    title: 'Serverless Infrastructure',
    description: 'Deploy globally without managing servers. Auto-scaling from zero to millions of requests.',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, SSO, and role-based access control.',
  },
  {
    icon: ChartIcon,
    title: 'Real-time Analytics',
    description: 'Monitor performance, track costs, and gain insights with built-in observability dashboards.',
  },
  {
    icon: BoltIcon,
    title: 'Lightning Fast',
    description: 'Sub-millisecond cold starts with our optimized runtime. Your AI responds instantly.',
  },
  {
    icon: CodeIcon,
    title: 'Developer First',
    description: 'SDKs for every language, CLI tools, and APIs that just work. Build in minutes, not days.',
  },
  {
    icon: DatabaseIcon,
    title: 'Vector Database',
    description: 'Built-in vector storage with semantic search. RAG pipelines ready out of the box.',
  },
];

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ChatIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const useCases = [
  {
    icon: BrainIcon,
    title: 'AI Agents & Assistants',
    description: 'Build autonomous agents that can reason, plan, and execute complex tasks.',
    examples: [
      'Customer support chatbots',
      'Personal assistants and schedulers',
      'Research and analysis agents',
    ],
  },
  {
    icon: ChatIcon,
    title: 'Conversational AI',
    description: 'Deploy sophisticated LLM-powered applications with memory and context.',
    examples: [
      'Enterprise knowledge bases',
      'Sales and marketing automation',
      'Internal communication tools',
    ],
  },
  {
    icon: DocumentIcon,
    title: 'Document Intelligence',
    description: 'Extract insights, summarize, and query documents at scale.',
    examples: [
      'Contract review and analysis',
      'Automated reporting',
      'Legal and compliance scanning',
    ],
  },
  {
    icon: ChartIcon,
    title: 'Predictive Analytics',
    description: 'Forecast trends, optimize operations, and make data-driven decisions.',
    examples: [
      'Demand forecasting',
      'Churn prediction',
      'Dynamic pricing engines',
    ],
  },
];
