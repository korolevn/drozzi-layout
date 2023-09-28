import { Header } from "./components/Header/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { About } from "./components/About/About";
import { Feedback } from "./components/Feedback/Feedback";
import { Footer } from "./components/Footer/Footer";

export function App() {
    return (
        <>
        <Header/>
            <main>
            <Portfolio/>
            <About/>
            <Feedback/>
            </main>
        <Footer/>
        </>
    )
}