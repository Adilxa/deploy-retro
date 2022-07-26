import css from "./Jumbotron.module.scss";
import { useTranslation } from "react-i18next";

export default function Jumbotron() {
  const { t } = useTranslation();
  return (
    <div className={css.global}>
      <div className={css.left}>
        <div className={css.leftt}>
          <div className={css.textFire}>
            <h1>{t("jumbotron.title")}</h1>
          </div>
          <p>{t("jumbotron.paragraph")}</p>
          <button className={css.getStartedBtn}>{t("jumbotron.button")}</button>
        </div>
      </div>
      <div className={css.right}>
        <img src="./images/companies/jumbotron.png" />
      </div>
    </div>
  );
}
