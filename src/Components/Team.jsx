import React from 'react'; 
import { useNavigate } from 'react-router-dom';

  

const Team = () => { 

    const history = useNavigate();

    const handleClick = () => { 
        console.log("bru u trippin fr")
        console.log("bro wtf")
        history('./Port')
    }
    
    return(
            <div className ="bg-orange-600">
                <div>
                <span className="text-2xl font-bold col-auto">Team 10195 Presents Portfolio </span> 
               <button href="/port">Hi</button>
               <button className='px-3.5'>Portfolio Searcher</button>

                </div>
              
            </div>
        );
}
export default Team ; 