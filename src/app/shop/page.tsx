import Pageheader from '@/components/Pageheader';
import Productgrid from '@/components/Productgrid';
import Gallery from '@/components/Gallery';

export default function ProductCatalogPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Productgrid />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Gallery />
      </section>
    </main>
  );
}