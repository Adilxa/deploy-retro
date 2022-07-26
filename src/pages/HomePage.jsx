import BottomCompanies from "../сomponents/bottomCompanies/BottomCompanies";
import Benefits from "../сomponents/benefits/Benefits";
import Jumbotron from "../сomponents/jumbotron/Jumbotron";
import Footer from "../сomponents/footer/Footer";
import Header from "../сomponents/header/Header";
import Companies from "../сomponents/companies/Companies";
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
