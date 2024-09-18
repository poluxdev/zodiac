import React from 'react';
import { Form } from 'react-bootstrap';
import './solar.css'; // Importa el archivo de estilos

// Información sobre los signos solares
const solarSignInfo = {
  Aries: "1. Aries (21 de marzo - 19 de abril)\nCaracterísticas: Energía, impulso, valentía.\nSignificado: El Sol en Aries da una personalidad dinámica, entusiasta y llena de iniciativa. Los Aries suelen ser líderes naturales, con una gran capacidad para tomar riesgos y empezar nuevos proyectos.",
  Tauro: "2. Tauro (20 de abril - 20 de mayo)\nCaracterísticas: Estabilidad, sensualidad, determinación.\nSignificado: El Sol en Tauro proporciona una personalidad firme, confiable y con una fuerte apreciación por los placeres sensoriales. La seguridad y la estabilidad son esenciales para ellos.",
  Géminis: "3. Géminis (21 de mayo - 20 de junio)\nCaracterísticas: Comunicación, curiosidad, adaptabilidad.\nSignificado: Con el Sol en Géminis, la persona es comunicativa, versátil y mentalmente aguda. Tienen una gran capacidad para aprender y adaptarse a nuevas situaciones y son excelentes para establecer conexiones sociales.",
  Cáncer: "4. Cáncer (21 de junio - 22 de julio)\nCaracterísticas: Emoción, intuición, cuidado.\nSignificado: El Sol en Cáncer resalta una personalidad emocionalmente profunda y protectora. Los Cancerianos valoran profundamente la familia y el hogar, mostrando una gran empatía y cuidado hacia los demás.",
  Leo: "5. Leo (23 de julio - 22 de agosto)\nCaracterísticas: Creatividad, liderazgo, generosidad.\nSignificado: Con el Sol en Leo, la persona tiende a ser carismática, creativa y segura de sí misma. Los Leos buscan brillar en sus actividades y son naturalmente atraídos hacia el liderazgo y la autoexpresión.",
  Virgo: "6. Virgo (23 de agosto - 22 de septiembre)\nCaracterísticas: Análisis, servicio, perfeccionismo.\nSignificado: El Sol en Virgo da una personalidad práctica, detallista y orientada al servicio. Los Virgo suelen ser meticulosos, organizados y buscan mejorar su entorno a través de su enfoque analítico.",
  Libra: "7. Libra (23 de septiembre - 22 de octubre)\nCaracterísticas: Equilibrio, armonía, sociabilidad.\nSignificado: Con el Sol en Libra, la persona busca la armonía en sus relaciones y en su entorno. Son diplomáticos, encantadores y tienen un fuerte sentido de la justicia y la belleza.",
  Escorpio: "8. Escorpio (23 de octubre - 21 de noviembre)\nCaracterísticas: Intensidad, transformación, pasión.\nSignificado: El Sol en Escorpio ofrece una profundidad emocional, intensidad y una gran capacidad para la transformación personal. Los Escorpio son apasionados, determinados y tienen una gran fuerza interior.",
  Sagitario: "9. Sagitario (22 de noviembre - 21 de diciembre)\nCaracterísticas: Aventura, optimismo, libertad.\nSignificado: Con el Sol en Sagitario, la persona es aventurera, optimista y busca expansión y conocimiento. Tienen una fuerte necesidad de libertad y disfrutan explorando nuevas ideas y culturas.",
  Capricornio: "10. Capricornio (22 de diciembre - 19 de enero)\nCaracterísticas: Disciplina, ambición, responsabilidad.\nSignificado: El Sol en Capricornio destaca una personalidad ambiciosa, responsable y orientada a la estructura. Los Capricornio tienden a ser pragmáticos y están enfocados en alcanzar sus metas a largo plazo.",
  Acuario: "11. Acuario (20 de enero - 18 de febrero)\nCaracterísticas: Innovación, independencia, humanitarismo.\nSignificado: Con el Sol en Acuario, la persona es innovadora, independiente y tiene un fuerte sentido de justicia social. Los Acuario tienden a ser visionarios y buscan hacer una diferencia en el mundo.",
  Piscis: "12. Piscis (19 de febrero - 20 de marzo)\nCaracterísticas: Imaginación, sensibilidad, compasión.\nSignificado: El Sol en Piscis resalta una personalidad soñadora, intuitiva y compasiva. Los Piscis son creativos y tienen una profunda conexión con el mundo emocional y espiritual."
};

const Solar = ({ solarSign, onChange }) => (
  <Form.Group controlId="solarSign" className="solar-container">
    <Form.Label>Signo Solar:</Form.Label>
    <Form.Control as="select" value={solarSign} onChange={onChange}>
      <option value="">Selecciona un signo</option>
      {Object.keys(solarSignInfo).map((sign) => (
        <option key={sign} value={sign}>{sign}</option>
      ))}
    </Form.Control>
    <p><strong>Información:</strong> {solarSignInfo[solarSign] || "Selecciona un signo para ver la información."}</p>
  </Form.Group>
);

export default Solar;
