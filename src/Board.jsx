import { Row } from './Row'

export function Board({ tics }) {
    return (
        <div className="container">
            {tics.map(row => {
                return <Row tics={row.map(tic => tic)} key={crypto.randomUUID()} />; 
            })}
        </div>
    ); 
}