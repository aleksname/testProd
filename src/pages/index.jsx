import About from '../../Components/About';
import Advatages from '../../Components/Advatages';
import Hero from '../../Components/Hero';
import JoinUs from '../../Components/JoinUs';
import Questions from '../../Components/Questions';
import Header from './../../Components/Header';
import Footer from '../../../frontend/Components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Advatages/>
      <About />
      <JoinUs />
      <Questions />
      <Footer/>
    </>
  );
}
