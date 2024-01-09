import style from './Components/AppWithRedux.module.css';
import {SuperButton} from "./Components/SuperButton";
import {CounterStateType, minusAc, plusAc} from "./Reducer/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {CustomerStateType, minusCustomerAc, plusCustomerAc} from "./Reducer/CustomerReducer";
import {v1} from "uuid";

function AppWithRedux() {

    const count = useSelector((state: CounterStateType) => state.count.count);
    const customer = useSelector((state: CustomerStateType) => state.customer.customer);

    const dispatch = useDispatch();

    const callbackPlusCount = (count: number) => dispatch(plusAc(count))
    const callbackMinusCount = (count: number) => dispatch(minusAc(count))

    const callbackPlusCustomer = (name: string) => {
        const customers = {
            name,
            id: v1()
        }
        dispatch(plusCustomerAc(customers))
    }

    const callbackMinusCustomer = (customer: any) => dispatch(minusCustomerAc(customer.id))

    return (
        <>
            <div className={style.app}>
                <SuperButton callback={callbackPlusCount} name={'Plus count'}/>
                <SuperButton callback={callbackMinusCount} name={'Minus count'}/>
                <span>{count}</span>
            </div>

            <div className={style.app}>
                <SuperButton callback={callbackPlusCustomer} name={'Plus customer'}/>

                {customer.length > 0
                    ? customer.map((customers: any) => <div onClick={() => callbackMinusCustomer(customers)}
                                                            style={{color: 'red'}}
                                                            key={customers.id}>{customers.name}</div>)
                    : <span>Клиенты отсутствуют</span>}
            </div>
        </>
    );
}

export default AppWithRedux;
