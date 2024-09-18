import React from 'react';
import { Form } from 'react-bootstrap';
import './ascendente.css'; // Importa el archivo de estilos

// Información sobre los signos
const signInfo = {
  Aries: "El signo Aries es conocido por ser audaz y enérgico. Los arianos son líderes naturales con una gran determinación y entusiasmo por la vida.",
  Tauro: "Tauro es un signo de tierra que se caracteriza por su fiabilidad y persistencia. Los taurinos valoran la estabilidad y tienen un fuerte sentido de la seguridad material.",
  Géminis: "Géminis es un signo de aire conocido por su versatilidad y curiosidad. Los geminianos son comunicativos y tienen una mente rápida y adaptable.",
  Cáncer: "El signo de Cáncer es emocional y protector. Los cancerianos son muy intuitivos y están profundamente conectados con sus sentimientos y su hogar.",
  Leo: "Leo es un signo de fuego que se destaca por su confianza y generosidad. Los leoninos son líderes carismáticos y disfrutan siendo el centro de atención.",
  Virgo: "Virgo es un signo de tierra asociado con la atención al detalle y la perfección. Los virginianos son prácticos y meticulosos, con un enfoque en la mejora personal.",
  Libra: "Libra es un signo de aire conocido por su amor por la armonía y la justicia. Los librianos valoran las relaciones equilibradas y la belleza en todas sus formas.",
  Escorpio: "El signo de Escorpio es intenso y apasionado. Los escorpianos son profundos, con una gran capacidad para la transformación y el autoconocimiento.",
  Sagitario: "Sagitario es un signo de fuego que se destaca por su optimismo y amor por la aventura. Los sagitarianos buscan constantemente nuevas experiencias y la verdad.",
  Capricornio: "Capricornio es un signo de tierra conocido por su ambición y disciplina. Los capricornianos trabajan arduamente para alcanzar sus metas y valoran la estructura y el orden.",
  Acuario: "Acuario es un signo de aire asociado con la originalidad y el pensamiento progresista. Los acuarios son innovadores y tienen una visión humanitaria del mundo.",
  Piscis: "Piscis es un signo de agua que se caracteriza por su sensibilidad y empatía. Los piscianos son intuitivos y soñadores, con una profunda conexión con el mundo emocional.",
  AscendenteAries: "El ascendente en Aries es audaz, enérgico y directo. Los ascendentes en Aries son líderes naturales y tienen una actitud valiente.",
  AscendenteTauro: "El ascendente en Tauro es estable, práctico y busca seguridad. Los ascendentes en Tauro valoran la comodidad y son persistentes.",
  AscendenteGéminis: "El ascendente en Géminis es curioso, comunicativo y adaptable. Los ascendentes en Géminis disfrutan del cambio y la interacción social.",
  AscendenteCáncer: "El ascendente en Cáncer es emocional, protector y conectado con el hogar. Los ascendentes en Cáncer son intuitivos y sensibles.",
  AscendenteLeo: "El ascendente en Leo es carismático, confiado y expresivo. Los ascendentes en Leo disfrutan ser el centro de atención y son generosos.",
  AscendenteVirgo: "El ascendente en Virgo es meticuloso, analítico y práctico. Los ascendentes en Virgo valoran el orden y buscan mejorar su entorno.",
  AscendenteLibra: "El ascendente en Libra es diplomático, encantador y busca equilibrio. Los ascendentes en Libra son sociables y tienen un buen ojo para la estética.",
  AscendenteEscorpio: "El ascendente en Escorpio es intenso, profundo y transformador. Los ascendentes en Escorpio tienen una fuerte intuición.",
  AscendenteSagitario: "El ascendente en Sagitario es optimista, aventurero y busca libertad. Los ascendentes en Sagitario son exploradores natos.",
  AscendenteCapricornio: "El ascendente en Capricornio es responsable, ambicioso y disciplinado. Los ascendentes en Capricornio valoran el éxito y el logro.",
  AscendenteAcuario: "El ascendente en Acuario es innovador, independiente y progresista. Los ascendentes en Acuario buscan formas no convencionales de expresión.",
  AscendentePiscis: "El ascendente en Piscis es soñador, empático y sensible. Los ascendentes en Piscis tienen una profunda conexión con su intuición."
};

const Ascendente = ({ ascendant, onChange }) => (
  <Form.Group controlId="ascendant" className="ascendente-container">
    <Form.Label>Signo Ascendente:</Form.Label>
    <Form.Control as="select" value={ascendant} onChange={onChange}>
      <option value="">Selecciona un signo</option>
      {Object.keys(signInfo).filter(sign => sign.startsWith('Ascendente')).map((sign) => (
        <option key={sign} value={sign}>{sign.replace('Ascendente', '')}</option>
      ))}
    </Form.Control>
    <p><strong>Ascendente:</strong> {signInfo[ascendant] || "Selecciona un signo para ver la información."}</p>
  </Form.Group>
);

export default Ascendente;
