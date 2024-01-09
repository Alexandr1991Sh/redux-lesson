import React from 'react';

export type SuperButtonType = {
    callback: (value: any) => void
    name: string
}

export const SuperButton: React.FC<SuperButtonType> = ({name, callback}) => {
    const onClickHandler = (value: any) => {
        callback(prompt(value))
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};
