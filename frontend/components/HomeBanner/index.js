import groq from 'groq';
// import client from '../../client';

//api for queries


//for easy images
import imageUrlBuilder from '@sanity/image-url';

//materialUi components
import {Box, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import client from '../../client';
import winery from '../../../sanity/schemas/winery';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    background: {
        height: 300,
        position: 'fixed'
        
    
    },
    textBackground: {
        position: 'absolute',

    
    }
}));


const HomeBanner = (props) => {
    const {name,image} = props.props
    console.log(image)



    

    const classes = useStyles()
    
    // console.log(name, image)
    return(
        <Box component= 'div'>
            <Box 
            container 
            className={classes.background}
            component='img'
            src = {urlFor(image)}
            />
            <Grid 
            container
            className= {classes.textBackground}
            justify= 'center'
            alighnItems = 'center'
            >
                <Grid item component='h2'>
                    
                        {name}
                    
                </Grid>
                
            </Grid>
            
        </Box>

    )
}

// HomeBanner.getInitialProps = async () => ({
//     winery: await client.fetch(groq`
//     *[_type == "winery"]
//     `)
// })



export default HomeBanner