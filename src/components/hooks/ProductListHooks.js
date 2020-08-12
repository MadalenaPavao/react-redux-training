import React, {useState, useEffect} from 'react'

const ProductListHooks = ()=> {

    const [count, setCount] = useState(100)
    const [name, setName] = useState('Godwin')
    
    useEffect(()=>{
        console.log("Count changed")

    }, [count])

    useEffect(()=>{
        console.log("Name changed")

    }, [name])

    useEffect(()=>{
        console.log("Any change")
    })
    
    console.log(count)
    return (
        <div>
        <h1>Vous avez cliqué {count} fois</h1>
        <h1>My name is {name} </h1>
        <button onClick={() => setCount(count + 1)}>
            Cliquez ici
        </button>

        <input 
            type="text"
            className="form-control"
            onChange={(event)=> setName(event.target.value)} 
            value={name}
            />
        </div>
    )

}
export default ProductListHooks