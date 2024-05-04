export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <div className="bg-branco text-preto min-h-screen flex flex-col grow">
        {children}
    </div>
  );
}
