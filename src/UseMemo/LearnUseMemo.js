import React, { useEffect, useMemo, useState } from 'react'

const LearnUseMemo = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    //const doubleNumber = slowFunction(number);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number])

    // const themeStyle = {
    //     backgroundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }
    const themeStyle = useMemo(()=>{
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark])

    useEffect(()=>{
        console.log("Changed Theme");
    },[themeStyle])

    return (
        <>
            <h1>useMemo Hook</h1>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((prevDark) => !prevDark)}>Change theme</button>
            <div style={themeStyle} >{doubleNumber}</div>
        </>
    )
}

const slowFunction = (num) => {
    console.log("Calling Slow Function");
    for (let i = 0; i < 100000000; i++) { }
    return num * 2;
}

export default LearnUseMemo

// useMemo creates a cache to memorize a variable and compare the VALUES of the 
// variables when there is a change.
// Two Use Cases of useMemo : 
// 1) Handling unnecessary CALLS of slow function.
// 2) Handling referencial equality.
// 3) Increase the performance of program.