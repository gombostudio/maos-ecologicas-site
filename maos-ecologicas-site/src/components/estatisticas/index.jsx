import Card from "./card/card";
import styles from "./index.module.css";

const data = [
  { id: "3", description: "Campanhas de limpeza" },
  { id: "2", description: "Campanhas solidárias" },
  { id: "2", description: "Workshops" },
  { id: "+20", description: "Webinars" },
  { id: "+40", description: "Voluntários" },
];

const Index = () => {
  return (
    <div id="impacto" className={styles.container}>
      {data.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Index;
