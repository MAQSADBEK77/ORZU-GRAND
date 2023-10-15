import { Link } from "react-router-dom";
import TitleComponent from "./TitleComponent";
function OKompaniyaComponent() {
  return (
    <div data-aos="fade-up" className="oKompaniya">
      <TitleComponent title="О КОМПАНИИ" />
      <div className="container">
        <div className="oKompaniya-left"></div>
        <div className="oKompaniya-right">
          <p>
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services". Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.{" "}
          </p>
          <Link to="/info">Узнать больше</Link>
        </div>
      </div>
    </div>
  );
}

export default OKompaniyaComponent;
