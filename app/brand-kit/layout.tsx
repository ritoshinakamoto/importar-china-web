import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Kit — ImportarDeChina.com",
  description: "Guía completa de marca: colores, tipografía, logos, componentes y lineamientos de diseño.",
  robots: "noindex, nofollow",
};

export default function BrandKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
