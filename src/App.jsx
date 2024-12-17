import ParallaxImage from "./component/ParallaxImage";
import portrait1 from "./assets/potraits/asset5.jpg";
import portrait10 from "./assets/potraits/asset10.jpg";
import portrait4 from "./assets/potraits/asset4.jpg";
import portrait7 from "./assets/potraits/asset7.jpg";
import portrait9 from "./assets/potraits/asset9.jpg";
import portrait8 from "./assets/potraits/asset8.webp";
import { ReactLenis } from '@studio-freight/react-lenis'


function App() {
  return (
    <>
    <ReactLenis root options={{
    duration: 1.2, 
    smoothWheel: true,
    smoothTouch: true,
    direction: "vertical",
    infinite: false
  }}>
      <div className="app">
        <section className="hero">
          <div className="img">
            <ParallaxImage src={portrait8} alt="portrait1" />
          </div>

          <div className="nav">
            <p>Tour</p>
            <p>Updates</p>
            <p>Contact</p>
            <p>Merch</p>
          </div>
        </section>
        <section className="projects">
          <div className="img">
            <ParallaxImage src={portrait10} alt="portrait10" />
          </div>

          <div className="projects-breif">
            <p>
              vid Kushner&apos;s 2023 hit “Daylight” reached the Billboard Hot
              100, earned multi-platinum certifications, and surpassed 1 billion
              streams within a year of its release.
            </p>
           
          </div>
          <div className="col projects-cover">
            <div className="img">
              <ParallaxImage src={portrait4} alt="portrait4" />
            </div>
          </div>

          <div className="col project-list">
            <div className="project">
              <h1>Sunrise</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Echoes Within</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Fading Memories</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
            <div className="project">
              <h1>Shadow&#39;s Edge</h1>
              <p>Apple Music / Spotify / YouTube</p>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="col intro">
            <p>Introduction</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              excepturi, odit assumenda optio ex quis maiores non eius
              veritatis! A officia ex nesciunt temporibus explicabo deserunt
              provident id reprehenderit harum!
            </p>
          </div>
          <div className="col portrait">
            <div className="portrait-container">
              <div className="img">
                <ParallaxImage src={portrait7} alt="portrait7" />
              </div>
            </div>
          </div>
        </section>
        <section className="banner">
          <div className="img">
            <ParallaxImage src={portrait9} alt="portrait9" />
          </div>

          <div className="banner-copy">
            <p>Be the</p>
            <h1>First to Know</h1>
            <p>
              Want to hear the latest news on my upcoming music releases,
              touring, and merch?
            </p>

            <button>Join the newsletter</button>
          </div>
        </section>
        <section className="footer">
          <div className="col ">
            <p>Instagram / Tiktok / Discord</p>
         

          <div className="footer-links">
            <p>Menu</p>
            <h1>Tour</h1>
            <h1>Updates</h1>
            <h1>Merch</h1>
            <h1>Contact</h1>
          </div>

          <p>&copy; Developed by <a href="https://prasanna-portfolio11.netlify.app/" target="_blank">Prasanna</a></p>
          </div>
          <div className="col">
            <p>
              Join the newsletter <br /> <button>Subscribe</button>
            </p>

            <div className="shop">
              <div className="img">
                <ParallaxImage src={portrait1} alt="portrait8" />
              </div>
            </div>

            <p>Spotify / Apple Music / YouTube</p>
          </div>
        </section>
      </div>
      </ReactLenis>
    </>
  );
}

export default App;
