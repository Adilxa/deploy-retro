import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Benefits from "../Components/benefits/Benefits";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </div>
  );
}
