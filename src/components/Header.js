import React from 'react'
import Button from './Button'

const Header = ({title, showAddTask, onAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? "red" : 'green'} onClick={onAdd} />
        </header>
    )
}

export default Header