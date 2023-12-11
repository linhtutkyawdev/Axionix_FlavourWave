import Banner from "@/components/home/banner";
import HeroSection from "@/components/home/hero";
import ScrollVelocity from "@/components/home/scroll-velocity";

export default function Home() {
  return (
    <main>
      {/* main banner that including header */}
      <Banner />

      {/* scroll velocity section to display our products */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our delicious <span className="text-emerald-600">Products</span>
        </h2>
        <ScrollVelocity />
      </div>

      {/* hero section */}
      <div className="my-24">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-bold ">
          Our delicious <span className="text-emerald-600">Products</span>
        </h2>
        <HeroSection />
      </div>
    </main>
  );
}
