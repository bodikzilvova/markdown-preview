import styles from "./EditorWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown } from "../../store.js";

export const EditorWrapper = () => {
  const markdown = useSelector((state) => state.markdown);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setMarkdown(event.target.value));
  };

  return (
    <div className={styles.editorWrapper}>
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

      <textarea
        id="editor"
        type="text"
        value={markdown}
        onChange={handleChange}
       
      ></textarea>
    </div>
  );
};
