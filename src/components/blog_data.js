import React from 'react';

export default function BlogData(props) {
    return (
        <div className="blog_card">
            <div className="thumbnail">
                <img src={props.customImage}/>
            </div>
            <div className="caption">
                <h3 className="headtitle">{props.name}</h3>
                <h4 className="subtitle">{props.jobtitle}</h4>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}



