import {Functions} from "./Functions"

interface IProps {
  addItem: (title: string) => void
}

export default function Input({addItem}: IProps) {

  const {inputBynd, Save} = Functions({addItem})

  return (
    <div>
      <input 
        {...inputBynd}
        type='text' 
      />
      <button 
        onClick={() => Save()}
      >
        save
      </button>
    </div>
  )
}
