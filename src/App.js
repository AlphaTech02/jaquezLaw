import './App.css';
import homeBanner from './Assets/home_banner.jpg'
import profile from './Assets/jaquezLawProfile.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import {useSpring, animated} from 'react-spring'
import HomeCarousal from './Components/HomeCarousal/HomeCarousal'

import TopNav from './Components/TopNav/TopNav'
import { Button } from 'bootstrap';
 
const isMobile = window.innerWidth <= 767;

function App() {
  const animate_mobile = useSpring({config: { duration: 750 }, opacity: 1, from: {opacity: 0, transform: 'translate3d(-50%,0%,0)'}, to: {opacity: 1, transform: 'translate3d(0%,0,0)'}})
  const animate = useSpring({config: { duration: 1250 }, opacity: 1, from: {opacity: 0,}})
  
  return (
    <div className="App">
      <div className="App-header">
        <TopNav />
        <Container fluid style={{height: '60vh', paddingTop: '2vh'}}>
          <HomeCarousal />
        </Container>
        <Container fluid style={{height: '100vh', marginTop: '5vh', paddingLeft: '5vw'}}>
          <div className='row'>
            {/* LEFT SIDE */}
            <div className='col-6'>
              <div className='col-12' style={{}}>
                <h1 className='h1 text-left' style={{padding: '2vh 0px', fontSize: 'calc((2.8 - 1) * 1.2vw + 1rem)'}}>Advocating for immigrants since 2012.</h1>
              </div>
              <div className='col-12'>
                <p style={{fontSize: 'calc((1.1 - 1) * 1.2vw + 1rem)', textAlign: 'left'}}>Operating out of Los Angeles County, Sergio E. Fernandez has represented clients from many different backgrounds and in many different immigration situations. His firm specializes only in Immigration Law- from family petitions to business & employment visas, as well as deportation defense in immigration court.</p>
              </div>
              <div className='col-12'>
                <p style={{fontSize: 'calc((1.1 - 1) * 1.2vw + 1rem)', textAlign: 'left'}}>Whether you are only interested in temporarily working in the United States, or if your desire is to live here much longer, or even permanently, the Law Office of Sergio E. Fernandez will not only help you to achieve your ultimate goal,  but they will also take the time to make sure you are updated and clear on the progress of your case every step of the way.</p>
              </div>
              <div className='col-12'>
                <p style={{fontSize: 'calc((1.1 - 1) * 1.2vw + 1rem)', textAlign: 'left'}}>Sergio E. Fernandez and his staff bring extensive experience and professionalism to every case and customize their support to your individual needs and concerns.</p>
              </div>
              <div className='col-12' style={{marginTop: '5vh'}}>
                <div className='text-left'>
                  <button className='btn btn-outline-info btn-lg'>Learn More</button>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className='col-6'>
              <div className='row'>
                <div className='col-6' style={{paddingLeft: '4vw'}}>
                  <img src={profile} style={{width: '70%', height: 'initial'}}/>
                  <p style={{fontSize: '1.25rem', padding: '1vh'}}>Sergio E. Fernandez, Esq.</p>
                </div>
              </div>
              <div className='row' style={{marginTop: '10vh', marginLeft: '1vw'}}>
                <p className='col-12 h3 text-left'><strong>Contact Us</strong></p>
                <p className='col-12 h6 text-left' style={{marginTop: '1vh'}}>879 W 190th Street, Suite 400</p>
                <p className='col-12 h6 text-left'>Gardena, CA 90248</p>
                <p className='col-12 h6 text-left' style={{marginTop: '1vh'}}>(424) 888-0529</p>
              </div>
            </div>
          </div>
        </Container>
        {/* <Jumbotron fluid>
          <Container style={animate}>
              {isMobile ? 
                <animated.div style={animate_mobile} className='row'>
                  <div className='col-12'>
                    <img src={profile} />
                  </div>
                  <div className='col-12 header_info' style={{marginTop: "1rem"}}>
                    <p className='text-left h2' style={{marginBottom: "1rem"}} >Jaquez Law Office</p>
                    <p className='text-left'>879 W 190th Street, Suite 400</p>
                    <p className='text-left'>Gardena, CA 90248</p>
                    <p className='text-left'>(424) 888-0529</p>
                  </div>
                  <div className='row'>
                    <div className='col-4' style={{backgroundColor: '#03254e'}}></div>
                    <div className='col-4'></div>
                    <div className='col-4'></div>
                  </div>
                </animated.div>
              :
                <animated.div style={animate} className='row'>
                  <div className='col-6 header_info'>
                    <p className='text-left h2' style={{marginBottom: "1rem"}} >Jaquez Law Office</p>
                    <p className='text-left'>879 W 190th Street, Suite 400</p>
                    <p className='text-left'>Gardena, CA 90248</p>
                    <p className='text-left'>(424) 888-0529</p>
                  </div>
                  <div className='col-6'>
                    <img src={profile} />
                  </div>
                </animated.div>
              }
          </Container>
        </Jumbotron> */}
      </div>
    </div>


  );
}

export default App;
