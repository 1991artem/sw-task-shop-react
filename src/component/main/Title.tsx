interface ITitle {
    name: string
}

export default function Title({name}:ITitle){
    return (
        <div className="main-title">
            <p>{`Category ${name}`}</p>
        </div>
    )
}