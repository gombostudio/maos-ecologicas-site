import styles from "./style.module.css";

const imagens = [
  "/img/parceiros/3dp.png",
  "/img/parceiros/aba.png",
  "/img/parceiros/cafago.png",
  "/img/parceiros/ecoangola.png",
  "/img/parceiros/ecoselecta.png",
  "/img/parceiros/flotek.png",
  "/img/parceiros/kissama.png",
  "/img/parceiros/muxima.png",
  "/img/parceiros/uma.png",
];

export default function Parceiros() {
  const lista = [...imagens, ...imagens]; // duplicar a lista

  return (
    <section className={styles.marquee} id="parceiros">
     

      <div className={styles.track}>
        {lista.map((src, i) => (
          <div key={i} className={styles.item}>
            <img src={src} alt={`Parceiro ${i}`} className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  );
}
