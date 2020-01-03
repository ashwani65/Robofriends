import React from 'react';
/*State
props
children*/
const Scroll = (props)=>{
    console.log('props');
    return (
        <div style={{ overflow: 'scroll',border:'1px solid black',height:'800px'}}>
            {props.children}
        </div>

    ); 
};

export default Scroll;

/*
CSS: overflow-y
jsx: overflowY
*/