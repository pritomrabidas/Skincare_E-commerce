import AboutSection from "../Components/Pages/About1/AboutSection"
import MissionSection from "../Components/Pages/About1/MissionSection"
import OurStory from "../Components/Pages/About1/OurStory"
import RevolutionSection from "../Components/Pages/RevolutionSection"

const Page = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      <OurStory />
      <MissionSection />
      <RevolutionSection/>
    </div>
  )
}

export default Page
