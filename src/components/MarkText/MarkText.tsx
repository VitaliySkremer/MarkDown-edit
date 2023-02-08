import styles from './MarkText.module.scss'
import {setMarkDown} from "../../store/slices/textSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useRef} from "react";

export const MarkText = ({className}:{className:string}) => {
  const text = useSelector((state:RootState)=>state.markdown.text)
  const dispatch = useDispatch();

  const ref = useRef<HTMLTextAreaElement>(null)

  const scroll = () =>{
    const out = document.getElementById('mark-out');
    const procentLeft = ref.current!.scrollTop *100 / ref.current!.scrollHeight
    out!.scrollTop = Math.ceil(out!.scrollHeight/100 * procentLeft)
  }

  return (
    <textarea
      onScroll={scroll}
      ref={ref}
      value={text}
      onChange={(event)=> dispatch(setMarkDown(event.target.value))}
      placeholder='Пишите разметку здесь...'
      className={[styles.mark__text, className].join(' ')}/>
  )
}