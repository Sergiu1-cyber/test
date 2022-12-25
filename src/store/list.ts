
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

  return {list, AddItem}
}
