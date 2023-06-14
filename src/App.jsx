import { useState, useEffect } from 'react'
import { Board } from './Board'
import { Title } from './Title'
import { GameTag } from './GameTag'
import './App.css'

function App() {
    const [rows, setRows] = useState(() => 5); 
    const [turn, setTurn] = useState(() => 'ex'); 
    const [tics, setTics] = useState(Array(rows).fill(Array(rows).fill({ type: "none", key: undefined }))); 

    // Give all tics unqiue keys
    useEffect(() => {
        if (tics[0][0].key != undefined) return; 
        for (let i = 0; i < tics.length; i++) {
            for (let j = 0; j < tics[0].length; j++) {
                setTics(prevTics => {
                    return [
                        ...prevTics.slice(0, i), 
                        [
                            ...prevTics[i].slice(0, j), 
                            {...prevTics[i][j], key: (i + '-' + j)}, 
                            ...prevTics[i].slice(j + 1, prevTics[i].length)
                        ], 
                        ...prevTics.slice(i + 1, prevTics.length)
                    ]; 
                }); 
            }
        }
    }, []); 

    useEffect(() => console.log(tics), [tics]); 

    function fliptile(e, key) {
        const rowNum = key.substring(0, 1); 
        const colNum = key.substring(2, 3); 
        if (tics[rowNum][colNum].type != 'none') return; 

        setTics(prevTics => {
            return prevTics.map(row => {
                return row.map(tile => {
                    if (tile.key == key) return {...tile, type: turn}; 
                    else return tile; 
                })
            })
        }); 

        setTurn(prevTurn => {
            if (prevTurn == 'ex') return 'circle'; 
            else return 'ex'; 
        })
    }

    return (
        <>
            <Title turn={turn} />
            <div id="tagContainer">
                <GameTag rows={rows} />
            </div>
            <Board tics={tics} handleClick={fliptile} />
        </>
    ); 
}

export default App
