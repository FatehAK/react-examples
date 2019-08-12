//Action creator

export const fetchCoords = () => {
    //return a function which in turn returns an action object later
    return async (dispatch) => {
        const response = await fetch('http://uitest.lynk.co.in/getLongLat');
        const coords = await response.json();
        dispatch({ type: 'FETCH_COORDS', payload: coords });
    };
};

export const fetchVideos = (obj) => {
    //return a function which in turn returns an action object later
    return async (dispatch) => {
        const response = await fetch(`http://uitest.lynk.co.in/getVideos?long=${obj.lng}&lat=${obj.lat}`);
        const result = await response.json();
        dispatch({ type: 'FETCH_VIDEOS', payload: result });
    };
};
