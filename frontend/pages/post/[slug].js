import { useRouter } from 'next/router'
import client from '../../client'

const Post = (props) => {
    // const router = useRouter()
    const { name = 'Missing name', about = 'Missing about', flight ="missing Flight" } = props

    return (
        
        <article>
            <h1>{name}</h1>
            <p>{about}</p>
            <h4>{flight}</h4>
        </article>
    )
}

Post.getInitialProps = async function(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await client.fetch(`
      *[_type == "winery" && slug.current == $slug][0]{name, about,  "flight" => flight->name}
    `, {slug})
}

export default Post