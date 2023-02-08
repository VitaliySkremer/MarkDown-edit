import {ReactNode, useEffect, useRef, useState} from "react";
import styles from './DropDown.module.scss'
interface IDropsDownProps {
  button:ReactNode;
  children:ReactNode;
}

export const DropDown = ({button, children}:IDropsDownProps) => {

  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  const createMenu = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    event.stopPropagation()
    setIsActive(prevState => !prevState)
  }

  useEffect(()=>{
    const click = (event: MouseEvent) =>{
      if(!ref.current?.contains(event.target as Node)){
        setIsActive(false)
      }
    }
    document.addEventListener('click', click);

    return ()=>{
      document.removeEventListener('click', click);
    }
  },[])

  return (
    <div className={styles.dropdown}>
      <button onClick={createMenu} className={styles.btn}>
        {button}
      </button>
      {isActive && (
        <div ref={ref} className={styles.menu}>
          {children}
        </div>
      )}
    </div>
  )
}