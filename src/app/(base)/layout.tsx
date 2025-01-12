import { CTA, Footer } from "@/components";
import Header from "@/components/Header";

export default function BaseLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <div className="mt-4">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
