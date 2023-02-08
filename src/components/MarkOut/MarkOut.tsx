import styles from './MarkOut.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {markdown} from 'markdown';

export const MarkOut = ({className}:{className:string}) => {
  const text = useSelector((state:RootState)=>state.markdown.text)

  return (
    <pre
      id='mark-out'
      className={[styles.mark__text,className].join(' ')}
      dangerouslySetInnerHTML={{__html:markdown.toHTML(text)}}
    />
  )
}