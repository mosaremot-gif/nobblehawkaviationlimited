import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Skyline Air | Private Aviation & Luxury Charters",
  description: "Premier private jet charters, executive travel, and safari flights across Africa and worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-skyline-black text-skyline-white antialiased flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}