import { makeStyles } from '@material-ui/core/styles';
import {Box, Container, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    about: {
        textAlign:'justify',
        margin: '7px'
    }
}))

const AboutSection = (props) => {
    const {about} = props.props
    console.log(about)
    const classes = useStyles() 

    return(
        <div >
            <Container>
                <Typography variant = 'subtitle1' className = {classes.about}>
                    {about}
                </Typography>
            </Container>
            
        </div>
    )
}

export default AboutSection;