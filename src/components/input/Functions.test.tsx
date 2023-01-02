import {renderHook, act} from "@testing-library/react"
import Functions from './Functions'

describe('Functions worck', () => {
  it('save item', () => {
    const {result} = renderHook(() => Functions())
    const item = "Functioneaza"

    act(() => {
      result.current.inputBynd.onChange(item)
    })
    expect(result.current.inputBynd.value).toEqual(item)
  })
})