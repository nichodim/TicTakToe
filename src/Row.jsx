import { Tile } from './Tile'

export function Row({ tics }) {
    return (
        <div className="row">
            {tics.map(tic => {
                return <Tile tic={tic} key={crypto.randomUUID()} />; 
            })}
        </div>
    )
}