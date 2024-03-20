import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Work from "./components/Work.jsx";
import PlayReel from "./components/PlayReel.jsx";
import News from "./components/News.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";
export default function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className="text-white font-['TWKLausanne']">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <News />
      <Footer />
    </div>
  );
}
