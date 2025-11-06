import Header from "./components/Header";
import Gallery from "./components/Gallery";
import BranchList from "./components/BranchList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Gallery />
      <BranchList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
