//for easy images
import imageUrlBuilder from '@sanity/image-url';

//materialUi components
import {Box, Grid, Typography, Button, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import client from '../../client';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '100%'
    },
    background: {
        height: 300,
        // width: '100vw',
        position: 'relative',
        borderBottom: 'double 15px #ab5c00',
        borderRight: 'none'
        
    },
    textBackground: {
        position: 'absolute',
        width: '70%',
        top: '22vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backGroundColor: '#fff',
        border: '10px solid rgba(0, 0, 0, 0.4)',
        padding:'5px 5px 5px 5px',
        backdropFilter: 'blur(6px)',
        boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
        borderRadius: '25% 10%;'
    },

}));


const HomeBanner = (props) => {
    const {name,image} = props.props
    console.log('homebanner', props)

    const classes = useStyles()
    
    // console.log(name, image)
    return(
        <Box component= 'div' display = 'block' >
            <Box 
            className={classes.background}
            component='img'
            src = {urlFor(image)}
            />
                <Grid 
                container
                className= {classes.textBackground}
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
                >
                    <Grid item component='h3' xs={12} className = {classes.firstItem}>
                            Welcome to 
                    </Grid>                
                    <Grid item component='h2' xs={12} color = '#fff'>
                            {name}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                           
                        >
                            Start Flight

                        </Button>
                    </Grid>
                    
                </Grid>
                
            
        </Box>

    )
}


export default HomeBanner