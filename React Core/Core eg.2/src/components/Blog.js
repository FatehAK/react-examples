import React from 'react';

const Blog = (props) => {
    //Direct  + Nested props(children)
    console.log('Props in Blog', props);
    return (
        <div className="blog">
            <p>Head</p>
            <p>{props.blogTitle}</p>
            <div>{props.children}</div>
        </div>
    );
};

export default Blog;
