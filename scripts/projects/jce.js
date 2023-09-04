import {
  Location,
  DateTime,
} from "../modules/classes.js";

export default {
  id: 'jce',
  name: "Junta Central Electoral",
  shortName: "JCE",
  description: "Intervencion en la Remodelacion y Adecuacion de espacios adquiridos para localizar los elementos basicos de la Institucion (Oficialias, Juntas Electorales y Centros de Cedulacion) en toda la geografia nacional, asi como algunos mas especializados, como son los Centros de Servicios Regionales, y finalmente, la colaboracion en la elaboracion de un Modelo Institucional, notorio en su aspecto y optima distribucion, para identificar la institucion con una nueva imagen.",
  cover: {
    url: "https://placehold.co/1920x1080",
    thumbUrl: "https://placehold.co/350x197",
    description: "Preview del Proyecto",
  },
  cads: [
    {
      url: "https://placehold.co/1920x1080",
      description: "Preview del Proyecto 1",
    },
  ],
  sections: [
    {
      title: "1ra Oficialía del Estado Civil",
      date: new DateTime("07/01/2008", "month"),
      content: [
        "Diseño y Ejecución Remodelación espacio para alojar dicho organismo, así como un centro de Cedulación, en 2 niveles, Oficinas administrativas, Archivos, Baños público y de uso privado, Recepción y espera Público, Cobros.",
        "Calle Danae esquina calle Santiago, Santo Domingo, Distrito Nacional.",
      ],
      imgs: [],
    },
    {
      title: "2da Oficialía del Estado Civil",
      date: new DateTime("11/01/2007", "month"),
      content: [
        "Diseño y Ejecución Remodelación espacio para alojar dicho organismo, así como un centro de Cedulación, en 3 niveles, Oficinas administrativas, Archivos, Baños público y de uso privado, Recepción y espera Público, Cobros, Delegación de Defunciones.",
        "Calle Dr. Delgado esquina Av. 27 de Febrero, Santo Domingo, Distrito Nacional.",
      ],
      imgs: [],
    },
    {
      title: "3ra Oficialía del Estado Civil",
      date: new DateTime("11/01/2008", "month"),
      content: [
        "Diseño y Ejecución Remodelación espacio para alojar dicho organismo, así como un centro de Cedulación, en 2 niveles, Oficinas administrativas, Baños público y de uso privado, Archivos, Recepción y espera Público, Cobros.",
        "Calle 14 Norte esquina 31 Oeste, Ensanche Luperón, Santo Domingo, Distrito Nacional.",
      ],
      imgs: [],
    },
    {
      title: "EFEC (Escuela Nacional de Formación Electoral y del Estado Civil)",
      date: new DateTime("02/01/2008", "month"),
      content: [
        "Remodelación espacio para integrar a la edificación un Salón de Eventos, así como reordenamiento y mejoramiento físico de algunos espacios internos.",
        "Calle Eduardo Martínez Saviñón esquina Florinda Soriano, La Castellana, Santo Domingo, Distrito Nacional.",
      ],
      imgs: [],
    },
    {
      title: "Centro de Servicios y Legalizaciones (de caracter regional)",
      date: new DateTime("06/01/2008", "month"),
      content: [
        "Diseño y Ejecución Remodelación espacio para alojar dicho organismo, así como un centro de Cedulación, en un nivel, Oficinas administrativas, Recepción y espera Público, Cobros.",
        "Carretera Mella, Plaza Lumiere, Santo Domingo Este.",
      ],
      imgs: [],
    },
  ],
};