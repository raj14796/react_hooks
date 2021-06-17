import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(1))
        console.log("Updating Items");
    }, [getItems])
    return (
        items.map((ele) => (
            <div key={ele}>{ele}</div>
        ))
    )
}

export default List
