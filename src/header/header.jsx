import { Link } from 'react-router-dom';
import './header.css';
import { HomeSliderComponent } from '../home/carousalcomponent';
import { HomeCategories } from '../popularitems/popularitems';
 export function HeaderComponent() {
    return (
        <div>
        <header className='header' >
            <h1 style={{ marginRight: 'auto', fontVariant:'small-caps'}}>Find Dubai</h1>
            <div style={{ marginLeft: '900px',color:'white' }}>
            <Link to="/signup" style={{color:'white',textDecoration:'none',fontFamily:'roboto'}}>signup</Link>
                
            </div>
            <div  
            style={{ marginLeft: 'auto',color:'white' }}>
                <Link to="/login" style={{color:'white',textDecoration:'none',fontFamily:'roboto'}}>login</Link>
                
            </div>
        </header>
       
        </div>
    );
}

