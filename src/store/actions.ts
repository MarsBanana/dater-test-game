import {actionTypes,ActionTypes, Game, GameData} from "./types"

export const saveName = (name: string): ActionTypes => ({
    type: actionTypes.SAVE_NAME,
    payload: name
})

export const createGame = (gameName: string, playersAmount: number): ActionTypes => ({
    type: actionTypes.CREATE_GAME,
    payload: {
        gameName,
        playersAmount
    }
})

export const fetchGamesList = (): ActionTypes => ({
    type: actionTypes.FETCH_GAMES_LIST
})

export const addGamesList = (games: Array<Game>): ActionTypes => ({
    type: actionTypes.ADD_GAMES_LIST,
    payload: games
})

export const saveCurrentId = (id?: string): ActionTypes => ({
    type: actionTypes.SAVE_CURRENT_ID,
    payload: id
})

export const updateGameState = (game: GameData | null): ActionTypes => ({
    type: actionTypes.UPDATE_GAME_STATE,
    payload: game
})

export const quitGame = (): ActionTypes => ({
    type: actionTypes.QUIT_GAME
})

export const saveDisconnect = (disconnect?: () => void): ActionTypes => ({
    type: actionTypes.SAVE_DISCONNECT,
    payload: disconnect
})