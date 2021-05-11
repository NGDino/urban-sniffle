import groq from 'groq';
// import client from '../../client';

//api for queries


//for easy images
import imageUrlBuilder from '@sanity/image-url';

//materialUi components
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import client from '../../client';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

//styles
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         display: 'flex',
    //     },
    //     background: {
    //         backgroundAttachment: fixed,
    //         backgroundImage: {}
    //     }
    // }));

const HomeBanner = () => {

    return(
        <Box 
        component = "div"
        // className=''
        // backgroundImage ={}
        >

        </Box>
    )
}

export async function getStaticProps() {
    const winery = await client.fetch(groq`*[_type == "winery"][0]`)
    return winery
}



export default HomeBanner