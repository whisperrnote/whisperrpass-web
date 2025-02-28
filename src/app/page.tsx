import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl">WhisperrPass</div>
          <div className="space-x-4">
            <Link href="/login" className="hover:text-gray-600">Login</Link>
            <Link 
              href="/register" 
              className="bg-foreground text-background px-4 py-2 rounded-full hover:bg-foreground/90"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Secure Password Management
              <br />
              Made Simple
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Store, generate, and manage your passwords securely across all your devices
              with military-grade encryption.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/register"
                className="bg-foreground text-background px-6 py-3 rounded-full text-lg font-medium hover:bg-foreground/90"
              >
                Start Free Trial
              </Link>
              <Link
                href="/features"
                className="border border-foreground/10 px-6 py-3 rounded-full text-lg font-medium hover:bg-foreground/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-2xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} WhisperrPass. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "🔐",
    title: "End-to-End Encryption",
    description: "Your data is encrypted before it leaves your device."
  },
  {
    icon: "🔄",
    title: "Cross-Platform Sync",
    description: "Access your passwords on any device, anytime."
  },
  {
    icon: "⚡",
    title: "Password Generator",
    description: "Create strong, unique passwords with one click."
  }
];
