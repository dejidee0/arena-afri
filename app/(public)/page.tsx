import Link from 'next/link'
import { ArrowRight, Trophy, Users, BarChart3, Shield, Zap, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-void via-surface to-void text-text-primary overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-brand-purple via-brand-violet to-brand-pink bg-clip-text text-transparent">
              Arena Africa
            </div>
            <div className="hidden md:flex gap-8">
              <Link href="#features" className="text-text-secondary hover:text-text-primary transition">
                Features
              </Link>
              <Link href="#how-it-works" className="text-text-secondary hover:text-text-primary transition">
                How It Works
              </Link>
              <Link href="#contact" className="text-text-secondary hover:text-text-primary transition">
                Contact
              </Link>
            </div>
            <Link
              href="/auth/login"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-brand-purple to-brand-violet text-white font-medium hover:opacity-90 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-brand-purple via-brand-violet to-brand-pink bg-clip-text text-transparent">
                  Football Tournament Management
                </span>
                <br />
                <span className="text-text-primary">Reimagined for Africa</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Connect teams, manage tournaments, track statistics, and build the future of African football with a platform designed for the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/signup"
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-violet text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-3 rounded-lg border border-border bg-elevated hover:bg-hover text-text-primary font-medium transition"
                >
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="mt-16 relative rounded-2xl border border-border bg-elevated p-8 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-elevated via-card to-surface rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Trophy size={64} className="mx-auto mb-4 text-semantic-prize opacity-50" />
                  <p className="text-text-secondary">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Everything you need to manage football tournaments at scale
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Tournament Management',
                description: 'Create, manage, and track tournaments with ease. Handle brackets, schedules, and results in real-time.',
              },
              {
                icon: Users,
                title: 'Team & Player Profiles',
                description: 'Build comprehensive profiles for teams and players. Track performance history and statistics.',
              },
              {
                icon: BarChart3,
                title: 'Advanced Statistics',
                description: 'Deep analytics and insights into player performance, team dynamics, and tournament trends.',
              },
              {
                icon: Shield,
                title: 'Referee Management',
                description: 'Organize referees, assign matches, and maintain integrity across all tournaments.',
              },
              {
                icon: Zap,
                title: 'Real-time Updates',
                description: 'Live score updates, instant notifications, and real-time match information for all participants.',
              },
              {
                icon: Globe,
                title: 'Pan-African Network',
                description: 'Connect with teams and organizations across the continent. Build a unified football community.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border bg-gradient-to-br from-elevated via-card to-surface hover:border-brand-purple transition group"
              >
                <feature.icon size={40} className="text-brand-purple mb-4 group-hover:text-brand-violet transition" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-elevated/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Sign Up', description: 'Create your account as a team, organization, or referee' },
              { step: 2, title: 'Create Tournament', description: 'Set up your tournament with custom rules and schedules' },
              { step: 3, title: 'Invite Teams', description: 'Recruit teams and manage participants' },
              { step: 4, title: 'Track & Manage', description: 'Monitor progress and manage all tournament aspects' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-purple to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform African Football?</h2>
          <p className="text-xl text-text-secondary mb-8">
            Join thousands of teams, tournaments, and players on Arena Africa
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-brand-purple to-brand-violet text-white font-medium hover:opacity-90 transition text-lg"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-void py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-violet bg-clip-text text-transparent mb-4">
                Arena Africa
              </div>
              <p className="text-text-secondary text-sm">
                The football tournament management platform for Africa
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><Link href="#" className="hover:text-text-primary transition">Features</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><Link href="#" className="hover:text-text-primary transition">About</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><Link href="#" className="hover:text-text-primary transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-text-primary transition">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-text-tertiary text-sm">
            <p>&copy; 2024 Arena Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
