import BottomCompanies from "../component/bottomCompanies/BottomCompanies";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Benefits from "../component/benefits/Benefits";
import Jumbotron from "../component/Jumbotron/Jumbotron";
import Companies from "../component/Companies/Companies";
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
