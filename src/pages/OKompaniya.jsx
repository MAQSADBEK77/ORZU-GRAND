import "./oKompaniya.css";
import TitlePages from "../components/TitlePages";

function OKompaniya() {
  return (
    <div className="oKompaniya-page">
      <TitlePages
        pagesName="О компании"
        breadCrumps={[
          { name: "Главная", to: "/" },
          { name: "О компании", to: "/info" },
        ]}
      />
    </div>
  );
}

export default OKompaniya;
