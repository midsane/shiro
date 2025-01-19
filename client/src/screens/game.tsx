import { Ground } from "../components/Ground/Ground";
import { PlayerCharacter } from "../components/player";

export function GameScreen(){
        return(<div className=" bg-green-300" >
        <Ground />
        <PlayerCharacter />
    </div>)
}