export type plusActionType = { type: 'ADD_CUSTOMER', payload: any }
export type minusActionType = { type: 'DELETE_CUSTOMER', payload: any }
const initialState = {customer: []}
export type CustomerStateType = {
    customer: any;
};

type ActionsType = plusActionType | minusActionType

export const customerReducer = (state: CustomerStateType = initialState, action: ActionsType): CustomerStateType => {
    switch (action.type) {
        case "ADD_CUSTOMER": {
            return {...state, customer: [...state.customer, action.payload]}
        }
        case "DELETE_CUSTOMER": {
            return {...state, customer: state.customer.filter((el: any) => el.id !== action.payload)}
        }
        default:
            return state
    }
};

export const plusCustomerAc = (payload: any): plusActionType => {
    return {type: 'ADD_CUSTOMER', payload}
}
export const minusCustomerAc = (payload: any): minusActionType => {
    return {type: 'DELETE_CUSTOMER', payload}
}



