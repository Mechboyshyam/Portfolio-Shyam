import Profile from "./images/profile.jpg"
import './App.css'

import Arow from './images/Arrow.png';
function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-4">
            < img className="profile mt-5" src={Profile} alt="jpg" />
          </div>

          <div class="col-md-8 mt-5">
            <p class="mt-4 ms-2 text">
              Name : Shyam Diwakar Korade.
            </p>

            <div classname="btn-container">
              <button className="btn btn-1 ms-2">
                HTML
              </button>
              <button className="btn btn-2" >
                CSS
              </button>
              <button className="btn btn-3" >
                JAVA-SCRIPT
              </button>
              <button className="btn btn-4" >
                REACT-JS
              </button>
            </div>
          </div>
        </div>

          <div className="container-2 row mt-5">
            <hr></hr>

            <h2 className="bg-info heading">Skills</h2>
            <div className="cont-2-skill mt-4 col-6">
              <ul className="list-cont">
                <li>Full Stack Web Developement</li>
                <li>Communication Skill</li>
              </ul>
            </div>
            <div className="col-6 mt-4">
              <ul className="list-cont">
              <li>Presentation Skill</li>
              <li>Listening Skill</li>
              </ul>
            </div>
            <hr></hr>
      </div>

        <h2 className="bg-info heading">Experience</h2>
        <div className="mt-4">
            <ul className="list-cont">
              <li>Tata Motors (6 month's as a technician)</li>
            </ul>
        </div>
        <hr></hr>

        <h2 className="bg-info heading">Hobbies</h2>
        <div className="d-flex mt-4 row">
          <div className="col-6">
            <ul className="list-cont">
            <li>Designing Websites</li>
            <li>Explore new Skills</li>
            </ul>
          </div>
          <div className="col-6">
             <ul className="list-cont">
               <li>Visiting Places</li>
               <li>Playing(Volleyball , Running)</li>
             </ul>
          </div>
        </div>
        <hr></hr>


        <h2 className="bg-info heading">Projects</h2>
        <div className="projects mt-4">
          <div class="project-btn d-grid gap-2 ">
            <button className="btn btn-p ">Claculator
              <a className="project-link" href="https://calculator-mechboyshyam.netlify.app/" rel="noreferrer" target="_blank">
                <img className="project-arrow" src={Arow} alt="png" />
              </a>
            </button>
          </div>
          <div class="project-btn">
            <button className="btn btn-p ">Paytm First Page
              <a className="project-link" href="https://mechboyshyam-task-2-paytm.netlify.app/" rel="noreferrer" target="_blank">
                <img className="project-arrow" src={Arow} alt="png" />
              </a>
            </button>
          </div>
          <div class="project-btn">
            <button className="btn btn-p">Organic-Fruits (Group project)
              <a className="project-link" href="https://icp-group-d.netlify.app/index.html" rel="noreferrer" target="_blank">
                <img className="project-arrow" src={Arow} alt="png" />
              </a>
            </button>
          </div>
          <div class="project-btn">
            <button className="btn btn-p">Emoji-kit
              <a className="project-link" href="https://emoji-kit.netlify.app/" rel="noreferrer" target="_blank">
                <img className="project-arrow" src={Arow} alt="png" />
              </a>
            </button>
          </div>
        </div>
<hr></hr>
      </div>
    </>
  );
}

export default App;