import Profile from "./components/Profile";
import imgProfile from "./assets/imgProfile.jpeg"

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar = {imgProfile}
        name = "Pedro Ferrari Martinez"
        bio = "Front-end React Developer and Graduated in Information Systems"
        phone = "+55 11 942606458"
        email = "pedroferrarimartinez12@gmail.com"
        githubUrl = "https://github.com/pedrofm2002"
        linkedinUrl = "https://www.linkedin.com/in/pedro-ferrari-martinez-6805001a1"
        instagramUrl = "https://www.instagram.com/pedro.ferrari02"
      
      
      />
    </div>
  )
}
