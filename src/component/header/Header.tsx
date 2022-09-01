import Action from "./Actions";
import Logo from "./Logo";
import NavBar from "./NavBar";


export default function Header ({categories, checkCategories, checkCurrency, showMiniCart}: any){
    console.log(showMiniCart)
    return (
        <div className="header">
            <NavBar categories={categories} checkCategories={checkCategories} />
            <Logo />
            <Action checkCurrency={checkCurrency} showMiniCart={showMiniCart}/>
        </div>
    );
}