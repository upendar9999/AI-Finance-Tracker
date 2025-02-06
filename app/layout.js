import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Finance Tracker",
  description:
    "An ai finance app that helps you track your income, expenses, and savings using AI for better money management. 💰📊",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/*footer */}
          <footer className="bg-gray-300 py-8">
            <div className=" container mx-auto px-3 text-gray-600">
              <p className=" text-center">Made with 💗 </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
