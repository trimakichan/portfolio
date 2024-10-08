/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainItem from "../../components/MainItem/MainItem";
import "./homeScreen.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import SkillSection from '../../components/SkillSection/SkillSection';
import SkillScrollSlider from '../../components/SkillScrollSlider/SkillScrollSlider';
import About from '../../components/About/About';
import { ScreenSizeContext } from '../../contexts/ScreenSizeContext';
import { NavContext } from '../../contexts/NavContext';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from '../../components/Modal/Modal';

import sprinkle from '../../assets/images/sprinkle.svg';
import doodle1 from '../../assets/images/doodle1.svg';
import doodle2 from '../../assets/images/doodle2.svg';
import arrow from '../../assets/images/arrow1.svg';
import Loading from '../../components/Loading/loading';
import ProfileImage from '../../components/ProfileImage/ProfileImage';

const HomeScreen = () => {

    //scroll animation----------------------------
    const { ref: aboutRef, inView: aboutIsVisible } = useInView();
    const { ref: contactRef, inView: contactIsVisible } = useInView();


    //Contexts----------------------------
    const { isDesktop } = useContext(ScreenSizeContext);
    const { showNav, setShowNav } = useContext(NavContext)
    const { theme } = useContext(ThemeContext);
    const { modalStatus } = useContext(ModalContext);


    //This is how intersection Observer works-----------------------
    // const scrollRef = useRef();
    // const [isVisible, setIsVisible] = useState();

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //        const entry = entries[0];
    //        inView(entry.isIntersecting)
    //     })

    //     observer.observe(scrollRef.current)
    // }, [])

    function showNavToFalse() {
        if (!isDesktop && showNav) {
            setShowNav(!showNav)
        }
    }

    return (
        <div className={theme}>
            {/* onClick={showNavToFalse} */}
            <div className='scroll-watcher scroll-bg'></div>

            <div className="home color-background-primary">
                <Header />

                {modalStatus && <Modal />}
                
                <div className="home__background">
                    <MainItem />
                    <div className={`wavy_top ${theme}`}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>

                <div className='color-background-secondary'>
                    <SkillSection  />
                </div>

                <div className="wavy_bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>


                {/* ABOUT SECTION--------------------------------------------------------------------------------------------------------------------- */}

                 <p className='japanese-text section-padding' id="about" >ウェブディベロッパー</p>
                <section className={`section home-about ${aboutIsVisible ? 'showFadeIn' : 'hiddenFadeIn'}`} ref={aboutRef}>
                    <About />
                    <img className='doodle1' src={doodle1} alt='doodle illustration' />
                    <img className='doodle2' src={doodle2} alt='doodle illustration' />
                    <img className='arrow' src={arrow} alt='pink arrow illustration' />
                </section>
               {isDesktop  && <p className='japanese-text text-right'>北海道出身</p>}

    

                 {/* <div className="skillScroll-container">
                <SkillScrollSlider />
                </div>   */}

                {/*--------------------------------------------------------------------------------------------------------------------- */}
               
                <section className='section section-top section-bottom ' id="projects" >
                    <Projects />
                </section>



                <section className={`section section-top home-contact ${contactIsVisible ? 'showFadeIn' : 'hiddenFadeIn'} `} id="contact" ref={contactRef}>
                    <Contact />
                    <img className='sprinkle1' src={sprinkle} alt='sprinkle illustration' />
                    <img className='sprinkle2' src={sprinkle} alt='sprinkle illustration' />
          
                    
                </section>
                   
                <Footer />
            </div>
        </div>

    )

};

export default HomeScreen;
