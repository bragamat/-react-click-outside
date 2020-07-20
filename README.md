### What is it?
- @react-click-outside is a very simple custom hook to handle clicks outside a
  component

### How to use it?
- To use it you just need to passe a node ref (or an array of refs) and a
  callback to be called when the click outisde any of those `refs`

### Examples

  ```javascriptreact
import React, { useRef } from 'react'
import { dispatchSomeAction } from './myActions'
import useClickOutside from '@react-click-outside'

const SomeComponent = () => {
    const myRef = useRef(null)
    useClickOutside(myRef, () => dispatchSomeAction())

    return (
     <div ref={myRef}>
       Doing some stuff
      </div>
    )
}

  ```
