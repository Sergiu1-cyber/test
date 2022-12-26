import {IList} from "./list";

export interface IStore {
  list: IList[]
  AddItem: (title: string) => void 
  RemoveItem: (id: number) => void
}
