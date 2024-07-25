import styles from "./EditorWrapper.module.css"

export const EditorWrapper = () => {
    return <div className={styles.editorWrapper}>

<div className={styles.toolbar}>
<i className={`${styles.fa} ${styles.faFreeCodeCamp}`} title="no-stuck-dub-sack"></i>
Editor
<i className={`${styles.fa} ${styles.faArrowsAlt}`} title="no-stuck-dub-sack"></i>
</div>

<textarea id="editor" type="text">
    
</textarea>


    </div>
}