export function Title({ turn, started, ended }) {
    if (!started || ended != 'none') return <h1>Tic Tak Toe</h1>; 
    return <h1 className={turn + 'Color'}>Tic Tak Toe</h1>; 
}