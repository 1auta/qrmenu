import  {Header}  from "@/components/HomePage/Header/Header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Footer } from "@/components/HomePage/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const popins = Poppins ({ weight:["400","300","500","800"], subsets: ["latin"]});

export const metadata = {
  title: "QR menu",
  description: "1auta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${popins.className} flex flex-col justify-between h-full leading-normal `}
      >
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
