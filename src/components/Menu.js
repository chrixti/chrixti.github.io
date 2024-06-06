import React from 'react';
import "../assets/projectplaceholder.png";

function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    const categories = item.category.split(', ');
                    return (
                        <div className="item-con" key={item.id}>
                            <div className="project-image">
                                <a href={item.link}>
                                    <img src={item.image} alt="project img" />
                                </a>
                            </div>
                            <div className="project-content">
                                <h2>{item.title}</h2>
                                <div>
                                    {categories.map((category, idx) => (
                                        <span key={idx} className="category-bubble">{category}</span>
                                    ))}
                                </div>
                                <p>{item.description}</p>
                                <div className="view-code">
                                    {
                                        item.comingSoon ? (
                                            <span className="bubble">Coming Soon</span>
                                        ) : (
                                            <a className="bubble" href={item.link}> View Project </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Menu;
