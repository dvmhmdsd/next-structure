import { btnStyle } from "./styles";
import styles from "./button.module.css";

export default function Button() {
  return (
    <button className={styles.button} style={btnStyle}>
      Button
    </button>
  );
}
