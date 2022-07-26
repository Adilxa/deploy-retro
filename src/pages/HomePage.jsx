import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Benefits from "../Components/benefits/Benefits";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </div>
  );
}
