import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Main from "@/components/main/Main";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main className="flex-grow" />
        <Footer />
      </div>
    </>
  )
}
