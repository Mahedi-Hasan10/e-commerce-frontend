import BestDeal from "./components/home/bestdeal";
import Hero from "./components/home/hero";
import Newsletter from "./components/home/newsletter";
import Shopcategory from "./components/home/shopcategory";

export default function Home() {
  return (
    <div>
      <Hero />
      <BestDeal />
      <Shopcategory />
      <Newsletter />
    </div>
  );
}
