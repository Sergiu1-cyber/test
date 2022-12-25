import {renderHook, act} from "@testing-library/react"
import { List } from "./list"


describe('List', () => {

  it('testing AddItem', async () => {

    const {result} = renderHook(() => List())
    const title = "Item 1"

    expect(result.current.list).toEqual([])

    act(() => {
      result.current.AddItem(title)
    })

    expect(result.current.list[0].title).toEqual(title)
  })

})
