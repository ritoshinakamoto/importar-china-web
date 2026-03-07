import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Planificación Financiera - Curso Completo | Importar de China",
  description: "Herramientas y metodologías para planificar la tesorería, liquidez y rentabilidad de un negocio de importación desde China. Incluye gestión de stock, gastos fijos, proyección de cash flow y cuenta de resultados.",
};

export default function CursoPlanificacionLayout({ children }: { children: React.ReactNode }) {
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
