export function End({ condition }) {
    return (
        <>
            <div id="endDiv"></div>
            {condition == 'ex' && 
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="#e24569">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                </svg>
            }
            {condition == 'circle' && 
                <svg height="250" width="250">
                    <circle cx="125" cy="125" r="100" stroke="#3236ff" stroke-width="15" fill="rgb(0, 25, 41)" />
                </svg>
            }
            {condition != 'stalemate' && 
                <h2 id="endText" className={`${condition}Color`}>{condition} has won!</h2>
            }
            {condition == 'stalemate' && 
            (<>
                <svg width="250px" height="250px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title/><g id="Complete"><g id="alert-circle"><g>
                <line fill="none" stroke="rgb(203, 245, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="8" y2="12"/>
                <line fill="none" stroke="rgb(203, 245, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16" y2="16"/>
                <circle cx="12" cy="12" data-name="--Circle" fill="none" id="_--Circle" r="10" stroke="rgb(203, 245, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </g></g></g></svg>
                <h2 id="endText">Stalemate</h2>
            </>)
            }
        </>
    )
}