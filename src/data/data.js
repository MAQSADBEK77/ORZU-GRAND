import slide1 from "../images/slide/slide1.png";
import slide2 from "../images/slide/slide2.png";
import slide3 from "../images/slide/slide3.png";
import slide4 from "../images/slide/slide4.png";
import product5 from "../images/products/product5.png";
import product6 from "../images/products/product6.png";
import product7 from "../images/products/product7.png";
import product8 from "../images/products/product8.png";
import product9 from "../images/products/product9.png";
import product10 from "../images/products/product10.png";
import product11 from "../images/products/product11.png";
import product12 from "../images/products/product12.png";
import product13 from "../images/products/product13.png";
import newsCart from "../images/newsCart.png";
export const carouselData = [
  [
    {
      img: slide1,
      title: "Анализатор ABL800 FLEX",
      desciption:
        "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      id: 1,
    },
    {
      img: slide2,
      title: "Аппарат ИК-лазерный МАКДЭЛ-09.1",
      desciption:
        "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      id: 2,
    },
    {
      img: slide3,
      title: "Глюкометр для измерения глюкозы",
      desciption:
        "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      id: 3,
    },
    {
      img: slide4,
      title: "Система для аутогемотрансфузии",
      desciption:
        "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
      id: 4,
    },
  ],
];
export const productsData = [
  {
    img: product5,
    title: "Эндоваскулярная хирургия",
    id: "5",
  },
  {
    img: product6,
    title: "Лабораторная диагностика",
    id: "6",
  },
  {
    img: product7,
    title: "Кардиохирургия",
    id: "7",
  },
  {
    img: product8,
    title: "ДИАБЕТ",
    id: "8",
  },
  {
    img: product9,
    title: "ЭНДОУРОЛОГИЯ",
    id: "9",
  },
  {
    img: product10,
    title: "АРИТМОЛОГИЯ",
    id: "10",
  },
];
export const servisesCartdata = [
  {
    img: product11,
    title: "СЕРВИС ОБОРУДОВАНИЯ",
    desciption:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
    id: "11",
  },
  {
    img: product12,
    title: "СЕРВИС ОБОРУДОВАНИЯ",
    desciption:
      "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
    id: "12",
  },
  {
    img: product13,
    title: "СЕРВИС ОБОРУДОВАНИЯ",
    desciption:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
    id: "13",
  },
];
let homeNewsCartss = [];
for (let i = 1; i <= 9; i++) {
  homeNewsCartss = [
    ...homeNewsCartss,
    {
      img: newsCart,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      date: "26.07.2021",
      desciption:
        "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      id: 13 + i,
    },
  ];
}
export const homeNewsCarts = homeNewsCartss;
