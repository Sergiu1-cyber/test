
import {useState} from "react";
import {IList} from "../types/list";

export function List() {

  const [list, setList] = useState<IList[]>([])

  function AddItem(title: string) {
    const item: IList = {
      id: Date.now(),
      title: title
    }
    setList([...list, item])
  }

  function RemoveItem(id: number) {
    setList(
      list.filter(item => item.id !== id)
    )
  }

  return {list, AddItem, RemoveItem}
}
