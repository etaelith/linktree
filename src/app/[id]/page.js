'use client';
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Main from "@/components/main/Main";


export default function Index({ params }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Main className="flex-grow" id={params.id} />
                <Footer />
            </div>
        </>
    )
}
