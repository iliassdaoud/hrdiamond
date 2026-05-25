import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Erreur de rendu HRDIAMOND", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] px-6 text-[#07142E]">
          <section className="max-w-xl rounded-3xl bg-white p-8 shadow-[0_24px_80px_rgba(7,20,46,0.16)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C8A24A]">
              HRDIAMOND
            </p>
            <h1 className="mt-3 text-2xl font-extrabold">
              La page n'a pas pu se charger correctement.
            </h1>
            <p className="mt-4 leading-7 text-slate-600">
              Rechargez la page ou relancez le serveur avec
              <code className="mx-1 rounded bg-slate-100 px-2 py-1">
                npm run dev
              </code>
              puis ouvrez http://127.0.0.1:5173/.
            </p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
