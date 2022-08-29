/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Link({name, checkCategories}:any){
    const handleClick = (event:React.MouseEvent):void =>{
        event.preventDefault();
        checkCategories(((event.target) as HTMLElement).innerHTML);
    }

    return(
        <li className="link">
            <a className="header-link"
            href="#"
            onClick={handleClick}
            >{name}</a>
        </li>
    )
}