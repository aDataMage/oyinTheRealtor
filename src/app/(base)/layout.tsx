import { CTA, Footer } from "@/components";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/live";

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
