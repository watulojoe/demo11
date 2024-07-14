import React from 'react'
import Button from "./Button"

function Header({title}) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button title="Add" color="green"/>
    </header>
  )
}

export default Header