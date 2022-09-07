import { useContext } from 'react';
import Link from './Link';
import { StoreContext } from '../../App';
import { IStorePropsObj } from '../interfaces';


export default function NavBar(){
    const {categoriesName}: IStorePropsObj = useContext(StoreContext);
        return (
            <div className='nav'>
                <ul>
                    {
                    categoriesName[1].map((name: string)=>{
                        return  <Link name={name} key={Date.now()*Math.random()}/>
                    })
                    }
                </ul>
            </div>
        )
}