import 'bootstrap/dist/css/bootstrap.css';
import { HeaderComponent } from '../header/header';
import { HomeSliderComponent } from '../home/carousalcomponent';
import { HomeCategories } from '../popularitems/popularitems';

export function SampleComponet(){
    return(
        <div>
            <HeaderComponent></HeaderComponent>
            <br />
            <HomeCategories></HomeCategories>
        </div>
    )
 }
 