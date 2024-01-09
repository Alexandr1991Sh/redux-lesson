export type plusActionType = { type: 'PLUS', payload: any }
export type minusActionType = { type: 'MINUS', payload: any }
const initialState = {count: 0}
export type CounterStateType = {
    count: any;
};

type ActionsType = plusActionType | minusActionType

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "PLUS": {
            return {...state, count: state.count + action.payload}
        }
        case "MINUS": {
            return {...state, count: state.count - action.payload}
        }
        default:
            return state
    }
};

export const plusAc = (payload: number): plusActionType => {
    return {type: 'PLUS', payload}
}
export const minusAc = (payload: number): minusActionType => {
    return {type: 'MINUS', payload}
}



