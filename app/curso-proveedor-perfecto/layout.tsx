import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "El Proveedor Perfecto - Curso Completo | Importar de China",
  description: "Aprende a encontrar, evaluar y negociar con proveedores chinos en Alibaba. Curso paso a paso desde cero.",
};

export default function CursoProveedorLayout({
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
