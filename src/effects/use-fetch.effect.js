import { useState, useEffects } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffects(()=>{
        const fetchData = async () => {
            const res = await fetch(url);
            const dataArray = await res.json();
            setData(dataArray[0])
        };

        fetchData();
    }, [url]);

    return data;
}

export default useFetch;