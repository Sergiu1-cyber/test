import {IList} from "../../types/list"

interface IProps {
  item: IList
  Remove: (id: number) => void
}

export default function Item({item, Remove}: IProps) {
  return (
    <div className="">
      <h1>{item.title}</h1>
      <button onClick={() => Remove(item.id)}>x</button>
    </div>
  )
}
