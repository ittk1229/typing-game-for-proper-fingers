import styles from "./keyboard.module.css";

const Keyboard = ({ nextKey, wrongKey }) => {
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "?"],
  ];

  return (
    <div className={styles.keyboard}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row} style={{ marginLeft: `${rowIndex * 30}px` }}>
          {row.map((key) => {
            const isNextKey = key === nextKey;
            const isWrongKey = key === wrongKey;
            const keyClassName = isNextKey ? styles.nextKey : isWrongKey ? styles.wrongKey : "";
            return (
              <div key={key} className={`${styles.key} ${keyClassName}`}>
                {key}
              </div>
            );
          })}
        </div>
      ))}
      <div className={styles.row}>
        <div className={`${styles.key} ${styles.spaceKey} ${" " === nextKey ? styles.nextKey : ""}`}>␣</div>
      </div>
    </div>
  );
};

export default Keyboard;