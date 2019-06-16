import { useState, useEffect } from 'react';

//our custom hook
const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setError] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setError(err.message)
        );
    }, []);

    return [lat, errorMessage];
}

export default useLocation;
