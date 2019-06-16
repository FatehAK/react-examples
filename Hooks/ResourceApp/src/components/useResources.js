import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [data, setData] = useState([]);

    //combination of componentDidMount() + componentDidUpdate()
    //the array passed at the end is used for props comparison
    //if props change call the arrow callback else if no change don't call the callback
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setData(response.data);
        };
        //we call it immediately
        fetchData();
    }, [resource]);

    return data;
};

export default useResources;
