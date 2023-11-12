import { useEffect, useState } from 'react'

const useLiveStatus = () => {
    const [liveStatus, setLiveStatus] = useState(true);
    useEffect(() => {
     window.addEventListener("online", () => setLiveStatus(true));
     window.addEventListener("offline", () => setLiveStatus(false));
    }, []);

  return liveStatus;
}

export default useLiveStatus