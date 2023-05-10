import ColorProvider from "@/context/ColorProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ItemsProvider } from "@/context/ItemsProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Linktree practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ColorProvider>
        <ItemsProvider>
          <body className={inter.className}>
            {children}</body>
        </ItemsProvider>
      </ColorProvider>
    </html>
  );
}
