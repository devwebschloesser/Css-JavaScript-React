import styles from "./styles.module.css";

export default function Card({ title, poster, description }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  );
}
