import HomeBanner from '../components/HomeBanner';

import groq from 'groq';
import client from '../client';


const Index = (props) => {
  const {winery} = props
    return (
      <div>
        <HomeBanner props = {winery}/>
      
      </div>
    )
}

Index.getInitialProps = async () => ({
  winery: await client.fetch(groq`
  *[_type == "winery"][0]
  `)
})

export default Index;