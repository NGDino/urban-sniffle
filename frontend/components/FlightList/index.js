import {useState} from 'react';

import{Container, Typography, Box, Button, Hidden} from '@material-ui/core'
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root:{
        marginBottom:'70px'
    },
    wineName: {
        display: 'block'
    }
}))



export default function FlightList(props) {
    const [ moreInfo, setMoreInfo] = useState('');

    const classes = useStyles()

    const wines = props.props
    console.log('accordion props', wines)


    return (
    <div>
        
        <Container className={classes.root}>
            <Typography variant ='h4' align='center' gutterBottom>
                Bordeaux Flight
            </Typography>
            {wines.map((wine,index) => {
                return(
                    <Box>
                        <Typography variant='h5'>
                            {wine.year} {wine.name}
                        </Typography>
                        <Typography variant='subtitle2'>
                            {wine.specialAttribute} 
                        </Typography>
                        <Typography variant='subtitle1'>
                            {wine.description} 
                        </Typography>
                        <Box component='div' >
                        {moreInfo == wine._id ?
                            <Button onClick= {() => setMoreInfo('') }>
                                less Info
                            </Button>
                            :
                            <Button onClick= {() => setMoreInfo(wine._id) }>
                                More Info
                            </Button>
                        }
                            {moreInfo == wine._id && 
                            <Typography variant='body1' >
                            Just when I thought I was out... they pull me back in. When they come... they come at what you love. Leave the gun. Take the cannoli. I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Very well. You want to do business with me. I will do business with you.

                            Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship. My father is no different than any powerful man, any man with power, like a president or senator. I don't feel I have to wipe everybody out, Tom. Just my enemies. I see you took the name of the town. What was your father's name? It's a Sicilian message. It means Luca Brasi sleeps with the fishes
                        </Typography>
                            }
                        </Box>
                    </Box>
                )
            
        })}
        

        </Container>
    </div>
    );
}