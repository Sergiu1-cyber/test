import {IList} from "../../types/list"

interface IProps {
  item: IList
  Remove: (id: number) => void
}

export default function Item({item, Remove}: IProps) {
  return (
    <div className="w3-row w3-border w3-display-container"> 
      <div className="w3-padding">
        <h1>{item.title}</h1>
      </div>    
      <div className="w3-padding w3-display-right">
        <button className="w3-btn w3-circle w3-red" onClick={() => Remove(item.id)}>x</button>
      </div>
    </div>
  )
}
