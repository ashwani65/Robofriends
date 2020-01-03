import React from 'react';
import Card from './Card';

const CardList=({ robots })=>{
    return(
        <div>
            {
                robots.map((user,i) => {
                    return ( <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    />
                    );
                })
            }
        </div>
    );
}
export default CardList;


//Basic lecture notes
//whenever you do loop in react you have to give  unique key
// key prop should have something that dosent change ,for example,index(or i in our case) could chagne if array items getComputedStyle
// moved ,so a better key in this case would be something unique like id.
/*
const CardList=({ robots })=>{
    const cardArray=robots.map((user,i) => {
        return ( <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        />
        );
    })
    return(
        <div>
            {cardArray}
        </div>
    );
}*/