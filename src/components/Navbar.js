import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

/*<form>
                <input type='text'></input>
                <button><SearchIcon/></button>
            </form>*/
function Navbar(){
    return(
        <div className='navbar'>
            <h1>CRYPTODASH</h1>
            <button>
                <SearchIcon/>
            </button>
        </div>
    )
}



export default Navbar;