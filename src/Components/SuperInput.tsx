import React, {ChangeEvent} from 'react';

export type SuperInputType = {
    callback: (value: any) => void
}

export const SuperInput: React.FC<SuperInputType> = ({callback}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.value)
    }
    return (
        <input onChange={onChangeHandler}/>
    );
};
