// import Image from 'next/image'
// import Hero from '@/components/Layout/Hero';
// import QuickView from '@/components/ecommerce/QuickView';
import CategoryTab from '@/components/ecommerce/categoryTab';
import Products from "app/products/page.jsx";
import Hero from '@/components/component/HeroStore';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="product-tabs section-padding position-relative"  >
        <div className="container">
          <div className="col-lg-12">
            {/* <CategoryTab /> */}
            <Products />
          </div>
        </div>
      </section>
      {/* <QuickView /> */}
    </>
  );
}
