import styles from "../styles/Switch.module.css";

export default function Switch() {
  return (
    <svg
      viewBox="0 0 38 38"
      width="38"
      height="38"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo_underscore}
    >
      <g className={styles.sunmoon}>
        <circle className={styles.body} cx="19" cy="19" r="5" />
        <circle className={styles.shadow} cx="27" cy="8" r="5" />
        <g className={styles.rays}>
          <path d="M19 11V7" />
          <path d="M19 27L19 31" />
          <path d="M27 19L31 19" />
          <path d="M11 19L7 19" />
          <path d="M24.6569 13.3431L27.4853 10.5147" />
          <path d="M13.3431 24.6569L10.5147 27.4853" />
          <path d="M24.6569 24.6569L27.4853 27.4853" />
          <path d="M13.3431 13.3431L10.5147 10.5147" />
        </g>
      </g>
      <path d="M38 35H0V38H38V35Z" />
    </svg>
  );
}
