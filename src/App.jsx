import { useState, useEffect } from 'react'
import { Board } from './Board'
import { Title } from './Title'
import { GameTag } from './GameTag'
import './App.css'

function App() {
    const [rows, setRows] = useState(() => 10); 
    const [turn, setTurn] = useState(() => 'circle'); 
    const [tics, setTics] = useState(Array(rows).fill(Array(rows).fill('none'))); 

    useEffect(() => console.log(tics), [tics]); 

    return (
        <>
            <Title turn={turn} />
            <div id="tagContainer">
                <GameTag rows={rows} />
            </div>
            <Board tics={tics} />
        </>
    ); 
}

export default App
