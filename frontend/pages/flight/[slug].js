import groq from 'groq'
import client from '../../client';

//for easy images
import imageUrlBuilder from '@sanity/image-url';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

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

    return (
        
        <article>
     
        </article>
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