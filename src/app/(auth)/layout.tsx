interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex items-start py-16 bg-black justify-center h-screen">
      {children}
    </main>
  );
}
