import { useEffect, useState } from "react"


export const TodoDate = () => {

    const [datetime, setDatetime] = useState("");

    const haveDateTime = () => {
        const current = new Date();
        const myDate = current.toLocaleDateString();
        const myTime  = current.toLocaleTimeString();

        setDatetime(`${myDate} - ${myTime} `)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            haveDateTime()
        }, 1000);

        return () => clearInterval(interval);
    },[])

    return <h2> Clock {datetime}</h2>
}