import Hero from '../components/hero'
import About from '../components/about'
import Jac from '../components/joinAClan'
import Feat from '../components/features'
import Footer from '../components/footer'
function Home() {
    return(
        <div>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="join"><Jac /></div>
            <div id="features"><Feat /></div>
            <Footer />
        </div>
    )
    
}

export default Home;