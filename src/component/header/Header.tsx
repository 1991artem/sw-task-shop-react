import Action from "./Actions";
import Logo from "./Logo";
import NavBar from "./NavBar";


export default function Header ({checkCurrency, showMiniCart, style}: any){
    let classHeader = ['header', style? 'fixed':'']
    return (
        <div className={classHeader.join(' ')}>
            <NavBar />
            <Logo />
            <Action />
        </div>
    );
}