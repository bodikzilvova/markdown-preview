import styles from "./EditorWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMarkdown, toggleEditorExpand } from "../../store.js";

export const EditorWrapper = () => {
  const markdown = useSelector((state) => state.markdown);
  const isEditorExpanded = useSelector((state) => state.isEditorExpanded);
  const dispatch = useDispatch();

  const handleToggleExpand = () => {
    dispatch(toggleEditorExpand());
  };

  const handleChange = (event) => {
    dispatch(setMarkdown(event.target.value));
  };

  return (
    <div
      className={`${styles.editorWrapper} ${
        isEditorExpanded ? styles.expanded : ""
      }`}
    >
      <div className={styles.toolbar}>
        <i
          className={`${styles.fa} ${styles.faFreeCodeCamp}`}
          title="no-stuck-dub-sack"
        ></i>
        Editor
        <i
          className={`${styles.fa} ${
            isEditorExpanded ? styles.faCompress : styles.faArrowsAlt
          }`}
          title="no-stuck-dub-sack"
          onClick={handleToggleExpand}
        ></i>
      </div>

      <textarea
        id="editor"
        type="text"
        value={markdown}
        onChange={handleChange}
        style={{ minHeight: isEditorExpanded ? "95vh" : "200px" }}
      ></textarea>
    </div>
  );
};
