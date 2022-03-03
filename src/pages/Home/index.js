import Activities from "sections/home/Activities";
import Blog from "sections/home/Blog";
import Community from "sections/home/Community";
import Presentation from "sections/home/Presentation";
import Roadmap from "sections/home/Roadmap";
import Suscribe from "sections/home/Suscribe";

function Home() {
  return (
    <main className="main">
      <Presentation />
      <Community />
      <Activities />
      <Blog />
      <Roadmap/>
      <Suscribe />
    </main>
  )
}

export default Home;
