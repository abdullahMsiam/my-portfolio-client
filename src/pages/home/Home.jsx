import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";
import Qualifications from "./Qualifications";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Qualifications />
        </div>
    );
};

export default Home;