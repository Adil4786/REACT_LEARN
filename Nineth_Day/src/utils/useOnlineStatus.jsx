import { useEffect,useState } from "react";

const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        const onlineFunction = () => setOnlineStatus(true);
        const offlineFunction = () => setOnlineStatus(false);

        window.addEventListener("online",onlineFunction);
        window.addEventListener("offline",offlineFunction);

        return ()=>{
            window.removeEventListener("online",offlineFunction);
            window.removeEventListener("offline",offlineFunction)
        }
    },[])

    return onlineStatus;
}

export default useOnlineStatus;