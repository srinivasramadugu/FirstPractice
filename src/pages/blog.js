import React from 'react';
import BlogData from '../components/blog_data';

import srinivasprofile from '../assets/images/srinivas-pic.jpg';
import sreeprofile from '../assets/images/srinivas-pic2.jpg';
import userprofile from '../assets/images/user.jpg';

export default function Blog() {
    return (
        <div className="blog_list">
            <BlogData customImage={srinivasprofile} name="srinivas" jobtitle="senior front end developer" desc="Eiusmod excepteur 1"/>
            <BlogData customImage={sreeprofile} name="sree" jobtitle=" front end developer" desc="Eiusmod excepteur 2"/>
            <BlogData customImage={userprofile} name="vaibhav" jobtitle="Chartered accountant" desc="Eiusmod excepteur 3im."/>
        </div>
    )
}
