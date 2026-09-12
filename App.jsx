import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Load the technology data from the local JSON file (not hardcoded here).
  useEffect(() => {
    let isMounted = true;

    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setTechnologies(data);
      })
      .catch(() => {
        if (isMounted) toast.error("Couldn't load the technology list.");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack]);

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(id) {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-3xl font-bold text-ink">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
    </div>
  );
}
