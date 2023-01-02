import {IList} from "../../types/list"
import Item from "../item/Item"

interface IProps {
  list: IList[]
  removeItem: (id: number) => void
}

export default function ListRender({list, removeItem}: IProps) {

  const RenderList = list.map( I => <Item item={I} Remove={removeItem} key={I.id}/> )

  return (
    <div className="w3-container">
      {list && RenderList}
    </div>
  )
}
