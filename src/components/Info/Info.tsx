import styles from './Info.module.scss'

export const Info = () => {
  return (
    <section>
      <div className={styles.container}>
        <div>
          <p className={styles.doc__name_title}>DOCUMENT NAME</p>
          <p className={styles.doc__name}>Untitled Document.md</p>
        </div>
        <div className={styles.info__stat}>
          <p className={styles.time_and_word}>
            <span className={styles.gray__text}>READING TIME:</span> 3 MIN READ <span className={styles.gray__text}>WORDS: </span> 549
          </p>
          <div>
            <p>
              <span className={styles.gray__text}>CHARACTERS:</span> 3743
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}