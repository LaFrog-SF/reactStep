import {useEffect, useState} from "react";

export default function TimeOfMyLife() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            refreshTime();
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    function refreshTime() {
        setTime(new Date());
        document.title = time.toLocaleTimeString();
    }


}