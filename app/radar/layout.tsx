import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChinaRadar — Descubre qué importar de China esta semana | ImportarDeChina.com",
  description: "Productos con alta demanda, buenos márgenes y baja competencia — seleccionados cada semana para que empieces ya. Actualizado semanalmente.",
  keywords: "importar de china, productos trending, oportunidades importación, productos rentables china, alibaba productos, qué importar",
  openGraph: {
    title: "ChinaRadar — Descubre qué importar de China esta semana",
    description: "Ranking semanal de productos con alta demanda y buenos márgenes. Ahorra semanas de investigación.",
    type: "website",
  },
};

export default function RadarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
