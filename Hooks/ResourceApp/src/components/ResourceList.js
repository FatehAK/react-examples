import React from 'react';
import useResources from './useResources';

const ResourceList = (props) => {
    let data = useResources(props.resource);

    return (
        <div>
            {data.map((dt) => (
                <li key={dt.id}>{dt.title}</li>
            ))}
        </div>
    );
};

export default ResourceList;

//Class Component Fix instead of useEffect()
// async componentDidUpdate(prevProps) {
//     console.log('prev', prevProps);
//     if (prevProps.resource !== this.props.resource) {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//         this.setState({ resources: response.data });
//     }
// }
