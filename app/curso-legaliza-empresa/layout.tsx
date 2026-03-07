import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Legaliza Tu Empresa - Curso Completo | Importar de China",
  description: "Guía completa para legalizar tu negocio de importación. Aprende a constituir empresa en tu país, Europa (e-Residency) o Estados Unidos (Stripe Atlas).",
};

export default function CursoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
