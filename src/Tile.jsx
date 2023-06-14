export function Tile({ tic, handleClick }) {
    return (
        <button className={`tile-${tic.type}`} type="button" onClick={e => handleClick(e, tic.key)}>
            {tic.type == 'ex' && 
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#e24569">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                </svg>
            }
            {tic.type == 'circle' && 
                <svg height="55" width="55">
                    <circle cx="27.5" cy="27" r="24" stroke="#3236ff" stroke-width="8" fill="rgb(0, 11, 41)" />
                </svg>
            }
        </button>
    ); 
}