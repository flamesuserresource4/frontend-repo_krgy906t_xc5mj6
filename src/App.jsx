import Header from "./components/Header";
import Hero from "./components/Hero";
import Flow from "./components/Flow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />

      <main>
        <Hero />
        <Flow />
      </main>

      <Footer />
    </div>
  );
}
