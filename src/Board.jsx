import { Row } from './Row'

export function Board({ tics, handleClick }) {
    return (
        <div className="container">
            {tics.map(row => {
                return <Row tics={row.map(tic => tic)} key={crypto.randomUUID()} handleClick={handleClick} />; 
            })}
        </div>
    ); 
}