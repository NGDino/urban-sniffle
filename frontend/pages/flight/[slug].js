import groq from 'groq'
import client from '../../client';

import {useState} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';

//for easy images
import imageUrlBuilder from '@sanity/image-url';

import FlightList from '../../components/FlightList';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
    >
        {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));


const Post = (props) => {
    // const router = useRouter()
console.log(props)
    
    const {
        name = 'Missing name', 
        about = 'Missing about',
        image,
        _id,
        wines,
    } = props

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Wines" {...a11yProps(0)} />
                    <Tab label="Tasting Tools" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <FlightList props = {wines}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
            </SwipeableViews>
        </div>
    )
}

const query = groq`
    *[_type == "flight" && slug.current == $slug][0]{
        _id,
        name,
        about,
        image,
        "wines":wine[]->{
        _id,
        name,
        year,
        slug,
        image,
        varietals,
        }
        
    
    }
`
Post.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    console.log('func works')
    const { slug = "" } = context.query
    return await client.fetch(query, {slug})
}

export default Post