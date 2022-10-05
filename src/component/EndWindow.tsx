import Loading from "./Loading";
import Scandiweb from "./Scandiweb";

export default function EndWindow(): JSX.Element{
    return(
        <div className="end-window dark-body">
            <Scandiweb />
            <Loading />
        </div>
    )
}