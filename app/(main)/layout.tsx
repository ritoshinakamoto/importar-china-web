import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TelegramFloatingButton from "@/components/TelegramFloatingButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <TelegramFloatingButton />
    </>
  );
}
