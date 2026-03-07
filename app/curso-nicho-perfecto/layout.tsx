import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "El Nicho Perfecto - Curso Completo | Importar de China",
  description: "Aprende a encontrar productos con rentabilidades >50% mediante segmentación de mercado y localización de productos nicho",
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
