import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Footer from "../../src/Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Benefits from "../Components/benefits/Benefits";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Companies from "../Components/Companies/Companies";
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
