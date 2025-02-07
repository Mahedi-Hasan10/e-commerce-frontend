
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export const metadata = {
  title: "M Shop",
  description: "A shop where you can get all items here",
};

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
        {children}
        <div className="">
          <Footer />
        </div>
    </div>
  );
}
