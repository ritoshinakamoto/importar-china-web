import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Crea Tu Propia Marca - Curso Completo | Importar de China",
  description: "Aprende a crear una marca profesional desde cero: naming, registro legal, diseño de logo, identidad visual y lanzamiento web. Experiencia real importando de China.",
};

export default function CursoCreaTuMarcaLayout({
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
