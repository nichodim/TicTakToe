import { Tile } from './Tile'

export function Row({ tics, handleClick }) {
    return (
        <div className="row">
            {tics.map(tic => {
                return <Tile tic={tic} key={tic.key} handleClick={handleClick} />; 
            })}
        </div>
    )
}