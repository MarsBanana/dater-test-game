import firebase from "../firebase"
import {Player} from "../store/types"
import {collections} from "./constants"

const db = firebase.firestore()

interface IPlayerLeave {
    playerName: string
    currentGameId: string
    players: Array<Player>
}

const playerLeave = ({playerName, currentGameId, players}: IPlayerLeave) => {
    const disconnectingPlayerIndex = players.findIndex((player) => player.name === playerName)

    const playersBeforeDisconnecting = players.slice(0, disconnectingPlayerIndex)
    
    const playersAfterDisconnecting = players.slice(disconnectingPlayerIndex + 1, players.length)

    const newPlayers = [
        ...playersBeforeDisconnecting,
        ...playersAfterDisconnecting,
    ]

    db.collection(collections.GAMES_LIST)
        .doc(currentGameId)
        .update({
            players: newPlayers,
        })
        .catch((e) => {
            console.log(e)
        })
}

export default playerLeave
