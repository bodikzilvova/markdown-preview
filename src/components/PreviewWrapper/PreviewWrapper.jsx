import styles from "./PreviewWrapper.module.css"

export const PreviewWrapper = ()=> {
    return <div className={styles.previewWrap}>

<div className={styles.toolbar}>

<i className={`${styles.fa} ${styles.faFreeCodeCamp}`} title="no-stuck-dub-sack"></i>
Editor
<i className={`${styles.fa} ${styles.faArrowsAlt}`} title="no-stuck-dub-sack"></i>
</div>

<textarea id="preview" type="text"></textarea>



    </div>
}