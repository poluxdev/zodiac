import React from 'react';
import { Form } from 'react-bootstrap';
import './lunar.css'; // Importa el archivo de estilos

// Información sobre los signos lunares
const lunarSignInfo = {
  Aries: "La Luna en Aries refleja una necesidad de estímulo emocional constante. Las personas con esta posición suelen ser apasionadas, enérgicas y tienen reacciones emocionales rápidas.",
  Tauro: "La Luna en Tauro proporciona una profunda necesidad de seguridad emocional y material. Las personas valoran la estabilidad y el confort, siendo prácticas y leales.",
  Géminis: "La Luna en Géminis sugiere una mente inquieta y curiosa, con una manera versátil y cambiante de manejar las emociones. La comunicación es clave para su bienestar emocional.",
  Cáncer: "La Luna en Cáncer intensifica las emociones y la necesidad de conexión con el hogar y la familia. Las personas son protectoras y empáticas, buscando establecer un entorno seguro.",
  Leo: "La Luna en Leo busca la autoexpresión y el reconocimiento. Las personas tienen una necesidad emocional de ser apreciadas, con una presencia cálida y generosa.",
  Virgo: "La Luna en Virgo se manifiesta en un enfoque detallado y analítico de las emociones. Las personas son prácticas y reservadas, encontrando satisfacción en el servicio y la mejora continua.",
  Libra: "La Luna en Libra busca la armonía y la paz en las relaciones. Las personas tienen una fuerte necesidad de equilibrio emocional, siendo diplomáticas y encantadoras.",
  Escorpio: "La Luna en Escorpio amplifica la intensidad emocional y la capacidad de transformación. Las personas tienen sentimientos profundos y buscan conexiones significativas.",
  Sagitario: "La Luna en Sagitario refleja una necesidad emocional de expansión y aventura. Las personas buscan la libertad y la exploración, con una actitud optimista hacia la vida.",
  Capricornio: "La Luna en Capricornio sugiere una necesidad de logro y estabilidad emocional. Las personas son prácticas y responsables, encontrando seguridad en el trabajo duro y en la estructura.",
  Acuario: "La Luna en Acuario busca la independencia emocional y la conexión con causas mayores. Las personas tienen una visión única y progresista, encontrando satisfacción en la innovación.",
  Piscis: "La Luna en Piscis intensifica la sensibilidad emocional y la capacidad de empatía. Las personas son intuitivas y creativas, buscando una conexión profunda con el mundo espiritual y emocional."
};

const Lunar = ({ lunarSign, onChange }) => (
  <Form.Group controlId="lunarSign" className="lunar-container">
    <Form.Label>Signo Lunar:</Form.Label>
    <Form.Control as="select" value={lunarSign} onChange={onChange}>
      <option value="">Selecciona un signo</option>
      {Object.keys(lunarSignInfo).map((sign) => (
        <option key={sign} value={sign}>{sign}</option>
      ))}
    </Form.Control>
    <p><strong>Información:</strong> {lunarSignInfo[lunarSign] || "Selecciona un signo para ver la información."}</p>
  </Form.Group>
);

export default Lunar;
