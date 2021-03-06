import {IState, actionTypes, ActionTypes} from "./types"

const initialState: IState = {
    playerName: null,
    gamesList: [],
    currentGame: null,
}

const reducer = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case actionTypes.SAVE_NAME:
            return {
                ...state,
                playerName: action.payload
            }
        case actionTypes.UPDATE_GAMES_LIST:
            return {
                ...state,
                gamesList: action.payload
            }
        case actionTypes.SAVE_CURRENT_ID:
            return {
                ...state,
                currentGameId: action.payload
            }
        case actionTypes.UPDATE_GAME_STATE:
            return {
                ...state,
                currentGame: action.payload
            }
        default:
            return state
    }
}

export default reducer