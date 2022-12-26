import {renderHook, act} from "@testing-library/react"
import { List } from "./list"


describe('List', () => {

  it('testing AddItem', () => {

    const {result} = renderHook(() => List())
    const title = "Item 1"
    const title2 = "Item 2"

    expect(result.current.list).toEqual([])

    // testing function AddItem
    act(() => {
      result.current.AddItem(title)
    })
    expect(result.current.list[0].title).toEqual(title)

    // testing function RemoveItem
    const id = result.current.list[0].id

    act(() => {
      result.current.AddItem(title2)
    })

    act(() => {
      result.current.RemoveItem(id)
    })

    expect(result.current.list[0].title).toEqual(title2)

  })

})
