import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Optimiza Tus Compras en China - Curso Completo | Importar de China",
  description: "Aprende a calcular el coste real de tus importaciones desde China. Domina Incoterms, transporte, aranceles y optimiza cada euro.",
};

export default function CursoOptimizaLayout({
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
