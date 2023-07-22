import React from 'react'
import "../assets/projectplaceholder.png";


function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}> 
                        <div className="item-container">
                            <a href={item.link}> <img src={item.image} alt="project img"/> </a>
                            <a href={item.link}> <h2>{item.title}</h2></a>
                            <h5>{item.category}</h5>
                            <p>{item.description}</p>
                           <div className="view-code"> 
                                <a href={item.link}> <small>View Project</small></a> 
                           </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;