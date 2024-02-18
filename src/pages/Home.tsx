import Hero from '../components/Home/Hero/Hero'
import LinkBoxList from '../components/Home/LinkBoxes/LinkBoxList'
import Main from '../components/Home/Main'
import Navbar from '../components/Home/Navbar/Navbar'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main>
        <LinkBoxList/>
      </Main>
    </>
  )
}

export default Home
