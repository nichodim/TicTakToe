import { useState, useEffect } from 'react'
import { Row } from './Row'
import './App.css'

function App() {
    const [rows, setRows] = useState(() => 3); 
    const [tics, setTics] = useState(Array(rows).fill(Array(rows).fill('none'))); 

    useEffect(() => console.log(tics), [tics]); 

    return (
        <>
            <h1>Tick Tack Toe</h1>
            <div className="container">
                {tics.map(row => {
                    return <Row tics={row.map(tic => tic)} key={crypto.randomUUID()} />; 
                })}
            </div>
        </>
    ); 
}

export default App
