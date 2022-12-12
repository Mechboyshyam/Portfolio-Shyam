import Profile from "./images/profile.jpg"
import './App.css'
function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-4">
            < img className="profile mt-5" src={Profile} alt="jpg" />
          </div>

          <div class="col-md-8 mt-5">
            <p class="mt-4 ms-5 text">
              Name : Shyam Diwakar Korade.
            </p>

            <div classname="btn-container">
              <button className="btn btn-1 ms-5">
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
          <div className="cont-2-skill col-md-6">
            <h2 className="bg-info heading">Skills</h2>
            <ul className="list-cont ">
              <li>Full Stack Web Developement</li>
              <li>Communication Skill</li>
              <li>Presentation Skill</li>
              <li>Listening Skill</li>
            </ul>
          </div>

          <div className="col-md-6">
                <h2 className="bg-info heading">Experience</h2>
                <ul>
                  <li>Tata Motors (6 month's as a technician)</li>
                </ul>
          </div>
        </div>
          <hr></hr>
        <div>
          <h2 className="bg-info">Hobbies</h2>
          <ul>
            <li>Designing Websites</li>
            <li>Explore new Skills</li>
            <li>Visiting Places</li>
            <li>Playing(Volleyball , Running)</li>
          </ul>
        </div>

        <div className="projects">
          <button className="btn"><a href="https://calculator-mechboyshyam.netlify.app/">Claculator project</a></button>
          <button className="btn"><a href="https://mechboyshyam-task-2-paytm.netlify.app/">Paytm first page</a></button>
          <button className="btn"><a href="https://icp-group-d.netlify.app/index.html">Group project</a></button>
          <button className="btn"><a href="https://emoji-kit.netlify.app/">Emoji kit fun project</a></button>
        </div>
      </div>
    </>
  );
}

export default App;