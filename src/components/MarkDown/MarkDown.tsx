import { MarkText } from '../MarkText/MarkText'
import styles from './MarkDown.module.scss'

export const MarkDown = () => {
  return (
    <section className={styles.section_mark}>
      <div className={styles.mark__down}>
        <div className={[styles.cell, styles.cell__top].join(' ')}>
          <div>
            MARKDOWN
          </div>
        </div>
        <div className={[styles.cell, styles.cell__top].join(' ')}>
          <div>
            PREVIEW
          </div>
        </div>
        <div className={styles.cell}>
          <MarkText/>
        </div>
        <div className={styles.cell}>
          fgfdh
        </div>
      </div>
    </section>
  )
}