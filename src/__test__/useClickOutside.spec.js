import React, { useRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import useClickOutside from '../main'

console.log = jest.fn()

const SomeComponent = () => {
  const ref = useRef(null)
   useClickOutside(ref, () => console.log('This was triggerd'))

  return (
    <div>
      <label data-testid="some-node">
        Some content here
      </label>
       <section ref={ref} data-testid="trigger-click">
         When clicking outside here, a callback is trigerred
       </section>
     </div>
   )
 }
describe('useClickOutside', () => {
  it('dispatchs action that is passed as argument', () => {
    const { getByTestId } = render(<SomeComponent />)
    fireEventi.click(getByTestId('some-node'))
    fireEventi.click(getByTestId("trigger-click"))
    expect(console.log).toHaveBeenCalledTimes(1)
  })
})
