import React, { useState, useEffect, useCallback } from 'react'
import List from './List'

const LearnUseCallback = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // const getItems = (increment) => {
    //     return [number + increment, number + increment + 1, number + increment + 2]
    // }
    const getItems = useCallback((increment) => {
        return [number + increment, number + increment + 1, number + increment + 2]
    }, [number])

    // const themeStyle = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    const themeStyle = useCallback(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log("Changed Theme");
    }, [themeStyle])

    return (
        <>
            <h1>useCallback Hook</h1>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((prevDark) => !prevDark)}>Change theme</button>
            <div style={themeStyle()}>
                <List getItems={getItems} />
            </div>
        </>
    )
}

export default LearnUseCallback


// useCallback creates a cache to memorize a variable and compare the REFERENCES of the 
// variables when there is a change.
// Two Use Cases of useCallback : 
// 1) Handling unnecessary CREATION of slow function.
// 2) Handling referencial equality.
// 3) Increase the performance of program.