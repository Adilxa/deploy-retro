import Jumbotron from "../Components/jumbotron/Jumbotron";
import Companies from "../Components/companies/Companies";
import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import Benefits from "../Components/benefits/Benefits";
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
