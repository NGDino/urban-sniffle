import {Typography} from '@material-ui/core';
import Image from 'next/image';

const TastingTools= () => {

    return(
        <div>
            <Typography variant ='h6'>
                Aroma Wheel
            </Typography>
            <Image 
            src = '/aroma-wheel.jpg' alt="me" width="500px" height='500px'
            />
            <Typography variant ='h6'>
                Color Chart
            </Typography>
            
        </div>
    )
}

export default TastingTools;

