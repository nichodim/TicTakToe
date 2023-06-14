export function Tile({ tic, handleClick }) {
    return (
        <button className="tile" type="button" onClick={e => handleClick(e, tic.key)}>{tic.key}</button>
    ); 
}