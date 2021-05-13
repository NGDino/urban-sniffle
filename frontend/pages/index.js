import HomeBanner from '../components/HomeBanner';
import AboutSection from '../components/AboutSection';
import Team from '../components/Team';


import groq from 'groq';
import client from '../client';


const Index = (props) => {
  const {winery} = props
    return (
      <div>
        <HomeBanner props = {winery}/>
        <AboutSection props = {winery}/>
        <Team props = {winery}/>
      
      </div>
    )
}

Index.getInitialProps = async () => ({
  winery: await client.fetch(groq`
  *[_type == "winery"][0]
  `)
})

export default Index;