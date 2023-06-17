import { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { End } from './End'
import { Reset } from './Reset'
import { Board } from './Board'
import { Title } from './Title'
import { GameTag } from './GameTag'
import './App.css'

function App() {
    const [started, setStart] = useState(() => false); 
    const [rows, setRows] = useState(3); 
    const [turn, setTurn] = useState(() => 'ex'); 
    const [tics, setTics] = useState(Array(rows).fill(Array(rows).fill({ type: "none", key: undefined }))); 
    const [ended, setEnd] = useState(() => 'none'); 

    useEffect(() => {
        // console.log(tics); 
        checkBoard(); 

        // Give all tics unqiue keys
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
    }, [tics]); 
    useEffect(() => console.log(), [ended]); 

    function setMenu() {
        let newRows = document.getElementById('rowBox').value; 
        if (newRows == '' || isNaN(newRows) || newRows < 1 || newRows > 10) {
            alert('Invalid row number (1-10)'); 
            return; 
        }
        newRows = parseInt(newRows); 

        setTics(() => Array(newRows).fill(Array(newRows).fill({ type: "none", key: undefined }))); 
        setRows(() => newRows);  
        setStart(() => true); 
    }

    function checkBoard() {
        let active = ''; 
        let count = 0; 
        let noneNum = 0; 

        function checkForEnd(i, j) {
            if (tics[i][j].type != active) {
                active = tics[i][j].type; 
                count = 1; 
            } else count++; 
            if (active == 'none') noneNum++; 
            if (count == rows && active != 'none') {
                setEnd(() => active); 
                return true; 
            }
            return false; 
        }

        // Checks for horizontal win
        for (let i = 0; i < tics.length; i++) {
            for (let j = 0; j < tics[0].length; j++) {
                if (checkForEnd(i, j)) return; 
            } active = ''; 
        } active = ''; 

        // Checks for vertical win
        for (let i = 0; i < tics[0].length; i++) {
            for (let j = 0; j < tics.length; j++) {
                if (checkForEnd(j, i)) return; 
            } active = ''; 
        } active = ''; 

        // Checks for diagonal wins (default win)
        for (let i = 0; i < tics.length; i++) {
            if (checkForEnd(i, i)) return; 
        } active = ''; 
        for (let i = 0; i < tics.length; i++) {
            if (checkForEnd(tics.length - i - 1, i)) return; 
        } active = ''; 
        
        if (noneNum == 0) setEnd(() => 'stalemate'); 
    }

    function resetState() {
        setEnd(() => 'none'); 
        setStart(() => false); 
        setTurn(() => 'ex'); 
    }

    function flipTile(e, key) {
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
            <Title turn={turn} started={started} ended={ended} />
            {started && 
                <Reset handleClick={resetState} />
            }
            <div id="tagContainer">
                {!started &&
                    <Menu setMenu={setMenu} />
                }
                {(started && ended == 'none') && 
                    <GameTag rows={rows} />
                }
                {ended != 'none' &&
                    <End condition={ended} />
                }
            </div>
            {(started && ended == 'none') && 
                <Board tics={tics} handleClick={flipTile} />
            }
        </>
    ); 
}

export default App