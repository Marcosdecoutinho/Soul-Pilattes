import React, { useEffect } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Reception from "./components/Reception";
import Studio from "./components/Studio";
import Oasis from "./components/Oasis";
import Therapy from "./components/Therapy";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { err: false };
    }
    static getDerivedStateFromError() {
        return { err: true };
    }
    render() {
        if (this.state.err) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-ink font-sans text-paper/70">
                    Algo deu errado. Recarregue a página.
                </div>
            );
        }
        return this.props.children;
    }
}

function Landing() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-ink text-paper" data-testid="landing-page">
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <Reception />
                <Studio />
                <Oasis />
                <Therapy />
                <Plans />
                <Testimonials />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}

export default function App() {
    return (
        <ErrorBoundary>
            <Landing />
        </ErrorBoundary>
    );
}
