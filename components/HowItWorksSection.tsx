'use client';

const steps = [
  {
    number: '01',
    title: 'Studio',
    description: 'A complete visual Dev Studio for building workflows, UI screens, business rules, data models, decision tables, connectors, and deployments, all drag-and-drop.',
  },
  {
    number: '02',
    title: 'Agentic AI Hub',
    description: 'Create, configure, and deploy AI agents directly inside your business workflows. Use them for interpretation, validation, decision-making, predictions, or fully automated actions.',
  },
  {
    number: '03',
    title: 'AI Models',
    description: 'Bring your own models or use pre-trained models for forecasting, classification, anomaly detection, or custom logic, seamlessly integrated into your flows.',
  },
  {
    number: '04',
    title: 'Automation & Orchestration',
    description: 'Parallel flows, wait states, conditional paths, cognitive decisions, and process orchestration for complex enterprise systems.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-black overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://brighthub.casethemes.net/wp-content/uploads/2025/07/bg-step.jpg" 
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-[80rem] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Steps */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full border border-white/20 text-white/80 font-medium" style={{ fontSize: '0.975rem' }}>
                Meet the Stackyon Platform
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              The Platform That Builds
              <br />
              Enterprise Apps Fast
            </h2>
            
            {/* Description */}
            <p className="text-white/70 mb-12 max-w-2xl" style={{ fontSize: '0.975rem' }}>
              A unified, AI-native platform that covers every part of the application lifecycle.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-base">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1" style={{ fontSize: '0.975rem' }}>
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed" style={{ fontSize: '0.975rem' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Mockup */}
          <div className="relative">
            {/* Image container with glow border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
              boxShadow: '0 0 0 1px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)'
            }}>
              <img 
                src="https://brighthub.casethemes.net/wp-content/uploads/2025/07/step-3.jpg" 
                alt="Stackyon Platform Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
