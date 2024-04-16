import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["greek"] });

export const metadata : Metadata = {
  title:"Threads",
  description : 'A Next JS 13 Thread Project'
  

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme:dark}}>
    <html lang="en">
      <body className={`${inter.className}`}>
        <TopBar/>


        <main className="flex flex-row">
          <LeftSideBar/>

          <section className="main-container">
            
            <div className="w-full max-w-xl">
            {children}
            </div>

          </section>

          <RightSideBar/>
        </main>
        

        <BottomBar/>
        </body>
    </html>
    </ClerkProvider>
  );
}
