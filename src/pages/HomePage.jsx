import Jumbotron from "../components/jumbotron/Jumbotron";
import Companies from "../components/companies/Companies";
import Benefits from "../components/benefits/Benefits";
import BottomCompanies from "../components/bottomCompanies/BottomCompanies";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Companies />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </div>
  );
}
