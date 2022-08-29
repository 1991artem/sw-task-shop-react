import Action from "./Actions";
import Logo from "./Logo";
import NavBar from "./NavBar";


export default function Header ({categories, checkCategories, checkCurrency}: any){
    return (
        <div className="header">
            <NavBar categories={categories} checkCategories={checkCategories} />
            <Logo />
            <Action checkCurrency={checkCurrency}/>
        </div>
    );
}