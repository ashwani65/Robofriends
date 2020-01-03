import React from 'react';

const SearchBox =({ searchfield,searchChange })=>{
    return(
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
//we are using destructing here:
// ({...})-allows us to grab the props object and grab its properties **searchfiel is actually not used and will be removed in upcoming video
// onChange is an event like click or hover that we did earlier