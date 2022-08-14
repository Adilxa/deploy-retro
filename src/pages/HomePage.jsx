import Benefits from "../components/benefits/Benefits";
import Companies from "../components/companies/Companies";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import BottomCompanies from "../components/bottomCompanies/BottomCompanies";
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
