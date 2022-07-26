import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Benefits from "../Components/benefits/Benefits";
import Jumbotron from "../Components/jumbotron/Jumbotron";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </>
  );
}
