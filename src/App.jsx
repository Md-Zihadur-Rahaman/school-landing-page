import Banner from './components/Banner'
import FavCrse from './components/FavCrse'
import FirstStep from './components/FirstStep'
import Footer from './components/Footer'
import GoodEdu from './components/GoodEdu'
import Instructors from './components/Instructors'
import LearnSkill from './components/LearnSkill'
import Navbar from './components/Navbar'
import PopularCourse from './components/PopularCourse'
import Review from './components/Review'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FavCrse />
      <PopularCourse />
      <LearnSkill />
      <GoodEdu />
      <Review />
      <Instructors />
      <FirstStep />
      <Footer />
    </div>
  )
}

export default App
