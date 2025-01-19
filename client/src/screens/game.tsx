import { PlayerCharacter } from "../components/player";

export function GameScreen(){
    return(<div className="w-screen h-screen bg-green-300" >
        <PlayerCharacter />
    </div>)
}