import {IList} from "../../types/list"
import classes from "./Item.module.css"

interface IProps {
  item: IList
  Remove: (id: number) => void
}

export default function Item({item, Remove}: IProps) {
  return (
    <div className={classes.listContainer}>     
      <h1>{item.title}</h1>
      <button className={classes.listBtn} onClick={() => Remove(item.id)}>x</button>
    </div>
  )
}
