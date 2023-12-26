import { useRouteError } from "react-router";

const Error = () =>{
    const error = useRouteError();
    return(
        <div>
            <h1>OOPS , Encountered an Error</h1>
            <h2>Status :{error.status}</h2>
            <h2>Status Text :{error.statusText}</h2>
            <p>Error Detail :{error.data}</p>
        </div>
    )
}

export default Error;