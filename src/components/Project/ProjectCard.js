import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({project}) {
    const { name, desc, image, url} = project;

    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={title}></img>
            <p>{desc}</p>
            <a href={url}></a>
        </div>
    )
}