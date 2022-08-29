export default function Currency({checkCurrency}:any){

    const handleClick = (event:React.ChangeEvent):void =>{
        checkCurrency(((event.target) as HTMLSelectElement).value);
    }
    let currency = [
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
        <select className="header-active_currency" onChange={handleClick}>
            {
            currency.map(currency =>{
                return <option value={currency.value} key={Date.now()*Math.random()}>{currency.sign}</option>
            })
            }
        </select>
    )
}