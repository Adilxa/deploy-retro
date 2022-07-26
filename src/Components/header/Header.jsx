import React, { useState } from "react";
import scss from "./header.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Jumbotron } from "../jumbotron/Jumbotron";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setActive(false);
  };
  return (
    <>
      <Container>
        <section className={scss.top_nav}>
          <Link to="/" className={scss.img}>
            <img src="/images/header/logo.svg" alt="" />
          </Link>
          <div className={scss.right + " " + (i18n.language === "ru" ? scss.active : "")}>
            <label
              className={scss.menu_button_container + " " + (open ? scss.active : "")}
              onClick={() => setOpen(!open)}
            >
              <div className={scss.menu_button}></div>
            </label>

            <div className={scss.menu}>
              <div className={scss.nav}>
                <Link to="/about">{t("header.about")}</Link>
                <Link to="/pricing">{t("header.pricing")}</Link>
                <Link to="/features">{t("header.features")}</Link>
                <Link to="/login">{t("header.login")}</Link>
                <Link to="/register">{t("header.register")}</Link>
              </div>
              <div className={scss.dropdown}>
                <div className={scss.dropdown_select}>
                  <span className={scss.select} onClick={() => setActive(!active)}>
                    {language}
                  </span>
                </div>
                <div className={scss.dropdown_list + " " + (active ? scss.active : "")}>
                  <div className={scss.dropdown_list__item} onClick={() => changeLanguage("en")}>
                    ENGLISH
                  </div>
                  <div className={scss.dropdown_list__item} onClick={() => changeLanguage("ru")}>
                    RUSSIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className={scss.modal + " " + (open ? scss.active : "")}>
        <Link to="/about">{t("header.about")}</Link>
        <Link to="/pricing">{t("header.pricing")}</Link>
        <Link to="/features">{t("header.features")}</Link>
        <Link to="/login">{t("header.login")}</Link>
        <Link to="/register">{t("header.register")}</Link>
      </div>
      <Jumbotron />
    </>
  );
};

export default Header;
