export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-void text-text-primary">
      {/* Admin navigation will be added here */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
