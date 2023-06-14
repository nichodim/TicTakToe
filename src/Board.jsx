import { Row } from './Row'
import shortid from 'shortid';

export function Board({ tics, handleClick }) {
    return (
        <div className="container">
            {tics.map(row => {
                return <Row tics={row.map(tic => tic)} key={`row${shortid.generate()}`} handleClick={handleClick} />; 
            })}
        </div>
    ); 
}