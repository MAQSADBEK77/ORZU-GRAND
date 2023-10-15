import { Link } from "react-router-dom";
import "./footer.css";
import HeaderLocation from "./HeaderLocation";
import Logo from "./Logo";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="zoom-out-down" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-contact-par">
              <h1 className="contact-title">Контакты</h1>
              <div className="footer-contact">
                <HeaderLocation />
                <a href="mailto:info@medol.uz" className="location">
                  <div className="imgParent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none">
                      <g clip-path="url(#clip0_502_285)">
                        <path
                          d="M20.9785 2.74023H2.02149C1.71031 2.74023 1.41899 2.81674 1.15544 2.94283L11.4551 13.2425L13.7636 11.0239C13.7636 11.0239 13.7637 11.0237 13.7638 11.0236C13.7638 11.0235 13.764 11.0234 13.764 11.0234L21.8449 2.94301C21.5813 2.81683 21.2898 2.74023 20.9785 2.74023Z"
                          fill="#0D4C93"
                        />
                        <path
                          d="M22.7977 3.896L15.1932 11.5001L22.7974 19.1043C22.9235 18.8408 23 18.5495 23 18.2383V4.76173C23 4.45074 22.9237 4.15946 22.7977 3.896Z"
                          fill="#0D4C93"
                        />
                        <path
                          d="M0.202598 3.89551C0.076502 4.15906 0 4.45038 0 4.76156V18.2381C0 18.5491 0.0764121 18.8405 0.202418 19.1039L7.80693 11.4998L0.202598 3.89551Z"
                          fill="#0D4C93"
                        />
                        <path
                          d="M14.2403 12.4532L11.9315 14.672C11.7999 14.8037 11.6275 14.8695 11.4551 14.8695C11.2828 14.8695 11.1103 14.8037 10.9787 14.672L8.75977 12.4531L1.15512 20.0573C1.41873 20.1835 1.71022 20.2601 2.02149 20.2601H20.9785C21.2897 20.2601 21.581 20.1836 21.8446 20.0575L14.2403 12.4532Z"
                          fill="#0D4C93"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_502_285">
                          <rect width="23" height="23" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>info@medol.uz </p>
                </a>
                <Link className="toContacts" to="/contacts">
                  Оставить заявку
                </Link>
              </div>
            </div>
            <div className="footer-logo">
              <Logo />
              <p>
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить
                огромную пользу населению, путем решения глобальных вопросов.
                Внедряя инновационные технологии на рынок Узбекистана.
              </p>
            </div>
          </div>
          <div className="footer-right footer-menu">
            <div className="footer-menu-child">
              <h6>О компании</h6>
              <a href="#">История</a>
              <a href="#"> Партнеры</a>
              <a href="#"> Вакансии</a>
            </div>
            <div className="footer-menu-child">
              <h6>Продукция </h6>
              <a href="#">Эндоваскулярная хирургия</a>
              <a href="#"> Аритмология</a>
              <a href="#"> Кардиохирургия</a>
              <a href="#"> Лабораторная диагностика</a>
              <a href="#"> Хирургия</a>
              <a href="#"> Эндоурология</a>
              <a href="#"> Нейрохирургия</a>
              <a href="#"> Анестезиология и реанимация</a>
              <a href="#"> Диабет</a>
            </div>
            <div className="footer-menu-child">
              <h6>Услуги</h6>
              <a href="#"> Сервис</a>
              <a href="#"> Регистрации</a>
              <a href="#"> Услуги </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2021 ООО «Medical Online Services»</p>
          <p>
            Сайт разработан компанией www<span>.uz</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
