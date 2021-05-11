import groq from 'groq'
import client from '../../client'

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
        flights,
    } = props

    return (
        
        <article>
            <h1>{name}</h1>
            <p>{about}</p>
            {image && (
            <div>
                <img
                    src={urlFor(image)
                    .width(300)
                    .url()}
                />
            </div>
        )}
            {flights && (
                <ul>
                    Which flight are you doing today?
                    {flights.map(flight => <li key={flight}>{flight}</li>)}
                </ul>
            )}
        </article>
    )
}

const query = groq`*[_type == "winery" && slug.current == $slug][0]{
    name,
    about,
    image,
    "flights":  flights[]->name
}`
Post.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    console.log('func works')
    const { slug = "" } = context.query
    return await client.fetch(query, {slug})
}

export default Post