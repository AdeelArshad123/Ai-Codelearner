export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          🚀 SaaS Learning Platform
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          AI-powered learning platform for programmers and beginners
        </p>
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              🤖 AI Code Generation
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Get AI-powered code examples with detailed explanations
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              🎯 Interactive Quizzes
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Test your knowledge with adaptive learning quizzes
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              📈 Progress Tracking
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Monitor your learning journey with detailed analytics
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">
              🔍 Smart Search
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Search across topics, tools, and learning channels
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}