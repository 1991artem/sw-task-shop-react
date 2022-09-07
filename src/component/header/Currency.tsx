import { useContext, useState } from 'react';
import {StoreContext} from '../../App';
import { IStorePropsObj } from '../interfaces';


export default function Currency(){
    const {currency}: IStorePropsObj = useContext(StoreContext);
    const [selectCurrency, setSelectCurrency] = useState('usd')
    const handleClick = (event:React.ChangeEvent):void =>{
        currency[0](((event.target) as HTMLSelectElement).value);
        setSelectCurrency(((event.target) as HTMLSelectElement).value)

    }
    let currencyValue = [
        {
            value: 'USD',
            sign: '$'
        },
        {
            value: 'GBP',
            sign: '£'
        },
        {
            value: 'AUD',
            sign: 'A$'
        },
        {
            value: 'JPY',
            sign: '¥'
        },
        {
            value: 'RUB',
            sign: '₽'
        },
    ]
    return (
        <select className="header-active_currency" onChange={handleClick} value={selectCurrency}>
            {
            currencyValue.map(value =>{
                return <option value={value.value} key={Date.now()*Math.random()}>{`${value.sign} ${value.value}`}</option>
            })
            }
        </select>
    )
}