import React from 'react';

// Define the shape of our feature cards for type safety
interface LabFeature {
  title: string;
  desc: string;
  icon: string;
}

const Home = (): React.JSX.Element => {
  // Explicitly typed array of features
  const features: LabFeature[] = [
    { 
      title: "Vitest Quality Gates", 
      desc: "Automated Unit Testing & Linting ensuring that only verified code reaches the main branch.",
      icon: "🧪"
    },
    { 
      title: "GHCR Publication", 
      desc: "Images are automatically tagged with SHA hashes and pushed to GitHub Container Registry.",
      icon: "📦"
    },
    { 
      title: "Multi-Stage Docker", 
      desc: "Next.js 'standalone' output mode utilized to create ultra-lightweight production images.",
      icon: "🐳"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center p-8 font-sans selection:bg-indigo-500/30">
      {/* CI/CD Status Badge */}
      <div className="max-w-3xl text-center space-y-8 mt-12">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm font-medium text-indigo-400 mb-4 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
          Pipeline Status: All Checks Passed
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Automated <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-600">
            Cloud Native Pipeline
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          In <strong>Lab 5</strong>, I established a robust CI/CD workflow. This
          environment leverages <strong>Vitest</strong> for logic validation and{" "}
          <strong>GitHub Actions</strong> for secure container delivery.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="https://github.com/ArtemPylhun/web-deployment-lab-5/pkgs/container/web-deployment-lab-5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
          >
            Pull Docker Image
          </a>
          <a
            href="https://github.com/ArtemPylhun/web-deployment-lab-5/actions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all border border-gray-800 hover:border-gray-700 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View Workflows
          </a>
        </div>
      </div>

      {/* Lab 5 Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl w-full pb-12">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 transition-all group"
          >
            <div className="text-3xl mb-4" role="img" aria-label={item.title}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;