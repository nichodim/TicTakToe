export function Menu({ setMenu }) {
    return (
        <>
            <p className="menuText" id="firstPrompt">How many rows?</p>
            <input id="rowBox" type="text"></input>
            <div id="playDiv">
                <button id="playButton" type="button" onClick={setMenu} >PLAY</button>
            </div>
        </>
    )
}