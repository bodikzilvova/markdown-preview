import { useSelector } from "react-redux";
import styles from "./PreviewWrapper.module.css";
import { marked } from "marked";

export const PreviewWrapper = () => {
  const markdown = useSelector((state) => state.markdown);

  return (
    <div className={styles.previewWrap}>
      <div className={styles.toolbar}>
        <i
          className={`${styles.fa} ${styles.faFreeCodeCamp}`}
          title="no-stuck-dub-sack"
        ></i>
        Editor
        <i
          className={`${styles.fa} ${styles.faArrowsAlt}`}
          title="no-stuck-dub-sack"
        ></i>
      </div>

      <div
        id="preview"
        type="text"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
};
