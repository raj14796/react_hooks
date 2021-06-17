import React from 'react'
import useLocalStorage from './useLocalStorage'

const CustomHooks = () => {
    const [name, setName] = useLocalStorage('name','')
    return (
        <>
            <h1>Custom Hooks</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        </>
    )
}

export default CustomHooks
