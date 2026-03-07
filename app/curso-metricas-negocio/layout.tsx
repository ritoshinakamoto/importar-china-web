import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Métricas de Negocio de Importación - Curso Completo | Importar de China",
  description: "Aprende a medir, analizar y optimizar tu negocio de importación. Métricas financieras, productividad, ventas y marketing.",
};

export default function CursoMetricasLayout({
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
