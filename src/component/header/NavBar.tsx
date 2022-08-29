import Link from './Link';
export default function NavBar({categories, checkCategories}:any){
        return (
            <div className='nav'>
                <ul>
                    {
                    categories.map((name: any)=>{
                        return  <Link name={name} checkCategories={checkCategories} key={Date.now()*Math.random()}/>
                    })
                    }
                </ul>
            </div>
        )
}