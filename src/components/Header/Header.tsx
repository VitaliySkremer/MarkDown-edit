import styles from './Header.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {DropDown} from "../UI/DropDown/DropDown";

const listFile = [
  {name:'.md'},
  {name:'.html'},
  {name:'.txt'},
]

export const Header = () => {
  const text = useSelector((state:RootState)=> state.markdown.text)
  const textHtml = useSelector((state:RootState)=> state.markdown.mdText)
  const name = useSelector((state:RootState)=> state.nameDoc.name)

  const downloadFile = (file:string) =>{
    let element = document.createElement('a');
    element.setAttribute('href',
      'data:text/pain;charset=utf-8, '
      + encodeURIComponent(file.includes('html')? textHtml : text))
    element.setAttribute('download',`${name}${file}`)
    element.click();
    element.remove();
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>
          MarkDown
        </span>
        <DropDown
          button={
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.76471 4H5C4.44771 4 4 4.44772 4 5V16.5376C4 16.8309 4.12882 17.1095 4.35235 17.2995L8.42581 20.7619C8.60661 20.9156 8.83617 21 9.07346 21H19C19.5523 21 20 20.5523 20 20V5C20 4.44772 19.5523 4 19 4H16.2353M7.76471 4V9C7.76471 9.55228 8.21242 10 8.76471 10H15.2353C15.7876 10 16.2353 9.55228 16.2353 9V4M7.76471 4H16.2353" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        >
          <ul className={styles.list__drop}>
            {listFile.map(file=>
              <li key={file.name} className={styles.list__drop_item}>
                <button
                  onClick={()=>downloadFile(file.name)}
                  className={styles.list__btn}
                >
                  {file.name}
                </button>
              </li>
            )}
          </ul>
        </DropDown>
      </div>
    </header>
  )
}