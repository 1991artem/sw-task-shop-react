import Action from "./Actions";
import Logo from "./Logo";
import NavBar from "./NavBar";


export default function Header (){
    return (
        <div className='header'>
            <NavBar />
            <Logo />
            <Action />
        </div>
    );
}