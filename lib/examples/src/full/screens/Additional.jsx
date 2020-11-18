/* eslint-disable no-unused-vars */
import React, { useRef, forwardRef, useEffect } from 'react'

function Input(props) {
  const { inputRef } = props
  return (<input ref={inputRef} defaultValue="isi ref 3" type="text" />)
}

const Input2 = forwardRef((props, ref) => (
  <input ref={ref} defaultValue="isi ref 4" type="text" />
))

function useClickOutside(ref, callback) {
  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(
    () => {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    },
  )
}

function Additional() {
  const ref1 = useRef(1)
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()

  function changeRef1() {
    ref1.current += 1
  }

  function consoleRef1() {
    console.log(ref1.current)
  }

  function consoleRef2() {
    console.log(ref4.current)
    console.log(ref4.current.value)
    ref2.current.focus()
    console.log(ref2.current.value)
  }

  useClickOutside(ref5, () => console.log('click outside'))

  return (
    <div>
      val:
      {' '}
      { ref1.current }
      <input ref={ref2} name="password" data-src="ini data" defaultValue="isi ref 2" type="text" />
      <Input inputRef={ref3} />
      <Input2 ref={ref4} />
      <button type="button" onClick={changeRef1}>Change Ref 1</button>
      <button type="button" onClick={consoleRef1}>Console Ref 1</button>
      <button type="button" onClick={consoleRef2}>Console Ref 2</button>
      <div ref={ref5} style={{ width: '200px', height: '200px', backgroundColor: 'grey' }}>
        [inside]
      </div>
    </div>
  )
}

export default Additional
