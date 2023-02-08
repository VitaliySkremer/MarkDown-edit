import styles from './Info.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useState} from "react";
import {setNameDoc} from "../../store/slices/nameDocSlice";

export const Info = () => {
  const [onEditName, setOnEditName] = useState(false);

  const text = useSelector((state:RootState)=>state.markdown.text)
  const name = useSelector((state:RootState) => state.nameDoc.name)
  const dispatch = useDispatch();

  const timeRead = () =>{
    return Math.ceil(text.split(/[ \n]/).length / 150)
  }

  return (
    <section>
      <div className={styles.container}>
        <div>
          <p className={styles.doc__name_title}>DOCUMENT NAME</p>
          <p className={styles.doc__name}>
            {!onEditName
              ? <span>
                  {name}
                </span>
              : <input
                  className={styles.input__name}
                  value={name}
                  onChange={(event)=> dispatch(setNameDoc(event.target.value))}
                  type="text"/>
            }
            <button onClick={()=> setOnEditName(prevState => !prevState)} className={styles.edit__name}>
              {onEditName
                ? <svg width="22px" height="22px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 11.5L10.5 16.5L19.5 7.60001" stroke="green" strokeWidth="2"/>
                  </svg>
                : <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M277.974 49.076c65.267-65.379 171.733-65.49 237.448 0l232.186 232.187 1055.697 1055.809L1919.958 1920l-582.928-116.653-950.128-950.015 79.15-79.15 801.792 801.68 307.977-307.976-907.362-907.474L281.22 747.65 49.034 515.464c-65.379-65.603-65.379-172.069 0-237.448Zm1376.996 1297.96-307.977 307.976 45.117 45.116 384.999 77.023-77.023-385-45.116-45.116ZM675.355 596.258l692.304 692.304-79.149 79.15-692.304-692.305 79.149-79.15ZM396.642 111.88c-14.33 0-28.547 5.374-39.519 16.345l-228.94 228.94c-21.718 21.718-21.718 57.318 0 79.149l153.038 153.037 308.089-308.09-153.037-153.036c-10.972-10.971-25.301-16.345-39.63-16.345Z" fillRule="evenodd"/>
                  </svg>
              }
            </button>
          </p>
        </div>
        <div className={styles.info__stat}>
          <p className={styles.time_and_word}>
            <span className={styles.gray__text}>READING TIME:</span> {timeRead()} MIN READ <span className={styles.gray__text}>WORDS: </span> {text.length===0 ? '0' :text.split(/[ \n]/).length}
          </p>
          <div>
            <p>
              <span className={styles.gray__text}>CHARACTERS:</span> {text.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}