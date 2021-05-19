import HomeBanner from '../components/HomeBanner';
import AboutSection from '../components/AboutSection';
import Team from '../components/Team';


import groq from 'groq';
import client from '../client';



const Index = (props) => {
  const {winery} = props
  const team = winery.team
    return (
      <div>
        <HomeBanner props = {winery}/>
        <AboutSection props = {winery}/>
        <Team props = {team}/>
      
      </div>
    )
}

Index.getInitialProps = async () => ({
  winery: await client.fetch(groq`
  *[_type == "winery"][0] {
    name,
    about,
    image,
    "team": staff[]-> {
      name, 
      staffImage,
      position,
      favoriteWine,
      description
    },
    "flights": flights[]->{
      _id,
      name,
      slug
    }
  }
  `)
})

export default Index;