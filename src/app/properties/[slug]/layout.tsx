import { CTA, Footer } from "@/components";
import Header from "@/components/Header";

export default function PropertyPageLayout({ children }) {
  return (
    <main>
      {" "}
      <Header />
      {children}
      <div className="mt-4">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
