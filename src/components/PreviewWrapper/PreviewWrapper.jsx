import { useDispatch, useSelector } from "react-redux";
import styles from "./PreviewWrapper.module.css";
import { marked } from "marked";
import { togglePreviewExpand } from "../../store";

marked.setOptions({
  breaks: true,
});

export const PreviewWrapper = () => {
  const markdown = useSelector((state) => state.markdown);
  const isPreviewExpanded = useSelector((state) => state.isPreviewExpanded);
  const dispatch = useDispatch();

  const handleToggleExpand = () => {
    dispatch(togglePreviewExpand());
  };

  return (
    <div
      className={`${styles.previewWrap} ${
        isPreviewExpanded ? styles.expanded : ""
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
            isPreviewExpanded ? styles.faCompress : styles.faArrowsAlt
          }`}
          title="no-stuck-dub-sack"
          onClick={handleToggleExpand}
        ></i>
      </div>

      <div
        id="preview"
        className={styles.preview}
        type="text"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
};
