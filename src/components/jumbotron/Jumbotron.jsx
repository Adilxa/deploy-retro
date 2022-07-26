import css from "./Jumbotron.module.scss";
import { useTranslation } from "react-i18next";

const Jumbotron = () => {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <div className={css.right}>
        <img src="./images/companies/jumbotron.png" />
      </div>
    </div>
  );
}

export default Jumbotron;
