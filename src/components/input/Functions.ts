import {useState} from "react";

interface IProps {
  addItem: (title: string) => void
}

export function Functions({addItem}: IProps) {

  const [title, setTitle] = useState<string>('')

  const inputBynd = {
    value: title,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  }

  function Save() {
    if(title.trim() !== '') {
      addItem(title)
      setTitle('')
    }
    setTitle('')
  }

  return {inputBynd, Save}

}
