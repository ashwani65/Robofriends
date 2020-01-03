import React from 'react';

const Card=({ name, email,id })=>{
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
//br3-border of 3px,pa3-padding,ma2-margin,grow some css style ,these things is using "tachyons"
//props.name becoz this is js expression so i need to wrap it in {} bracktes like in JSX
// <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/> 

// const Card=({ name, email,id }) {this is called distructors}
// we had template string becoz this was template string we had wrapped in js express { `alkfjssl${props.id}`}