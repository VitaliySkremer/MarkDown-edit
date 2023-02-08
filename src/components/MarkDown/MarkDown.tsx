import { MarkText } from '../MarkText/MarkText'
import styles from './MarkDown.module.scss'
import {MarkOut} from "../MarkOut/MarkOut";

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
        <MarkText className={styles.cell}/>
        <MarkOut className={styles.cell}/>
      </div>
    </section>
  )
}