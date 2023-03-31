import MainContainer from "@/components/MainContainer"
import Contact from "@/components/Index/Contact/Contact"
import MoveString from "@/components/UI/MoveString/MoveString"
import ForHR from "@/components/Index/ForHR/ForHR"
import HeaderContainer from "@/components/Index/Header/HeaderContainer"
import StackContainer from "@/components/Index/Stack/StackContainer"
import AboutMeContainer from "@/components/Index/AboutMe/AboutMeContainer"
import Navbar from "@/components/Navbar/Navbar"



export default function Home() {
  return (
    <MainContainer title={"masleeh.com"}>
      <Navbar />
      <HeaderContainer />
      <AboutMeContainer />
      <MoveString text="* my actual stack" />
      <StackContainer />
      <Contact />
      <MoveString text="* are you still here? " />
      <ForHR />
    </MainContainer>
  )
}
