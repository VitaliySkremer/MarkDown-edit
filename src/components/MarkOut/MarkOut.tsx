import styles from './MarkOut.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const MarkOut = ({className}:{className:string}) => {
  const text = useSelector((state:RootState)=>state.markdown.mdText)

  return (
    <pre
      id='mark-out'
      className={[styles.mark__text,className].join(' ')}
      dangerouslySetInnerHTML={{__html:text}}
    />
  )
}