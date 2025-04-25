import HeroImg from "../../assets/hackhero.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg bg-secondary/75 p-10 rounded-2xl shadow-2xl">
          <h1 className="mb-5 text-5xl font-bold">Frontend Deployment Speedrun</h1>
          <p className="mb-5">
            This [unfinished] website was made during a Hack@UCI workshop :D
          </p>
          <a href="https://github.com/YKawesome/hack_workshop"><button className="btn btn-primary">View Repo</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
