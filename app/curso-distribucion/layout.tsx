import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Canales de Distribución - Curso Completo | Importar de China",
  description: "Aprende los diferentes canales de distribución para importadores: mayoristas, minoristas, Amazon FBA, e-commerce. Estrategias multi-canal para maximizar ventas.",
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
