import notebook from './assets/notebook.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Navbar">
        <nav className="Navigation">
          <ul className="Nav-List">
            <li className="Nav-Item">
              <a href="">Home</a>
            </li>
            <li className="Nav-Item">
              <a href="">Forum</a>
            </li>
            <li className="Nav-Item">
              <a href="">Detail</a>
            </li>
          </ul>
        </nav>
        <div className="Nav-Search">
          <select>
            <option value="everything">Everything</option>
            <option value="title">Titles</option>
            <option value="descriptions">Descriptions</option>
          </select>
          <input type="text" placeholder="Search..."/>
          <button>Q</button>
        </div>
      </div>

      <div className="Subforum">
        <div className="Subforum-Title">
          <h1>General Information</h1>
        </div>

        <div className="Subforum-Row">
          <div className="Subforum-Icon Subforum-Column Center">
            <img className="Subforum-Icon-Img" src={notebook} alt="Notebook Logo" width="50px" height="50px"/>
          </div>
          <div className="Subforum-Description Subforum-Column">
            <h1><a href="">Description Title</a></h1>
            <p>Description Content: Yeah. Oh, egads! My roast is ruined. But what if I were to purchase fast food and disguise it as my own cooking? Delightfully devilish, Seymour. Ah- Skinner with his crazy explanations The superintendent's gonna need his medication When he hears Skinner's lame exaggerations There'll be trouble in town tonight Seymour! Superintendent, I was just- uh, just stretching my calves on the windowsill. Isometric exercise. Care to join me? Why is there smoke coming out of your oven, Seymour? Uh- Oh. That isn't smoke. It's steam. Steam from the steamed clams we're having. Mmm. Steamed clams. Whew. Superintendent, I hope you're ready for mouthwatering hamburgers. I thought we were having steamed clams. D'oh, no. I said steamed hams. That's what I call hamburgers. You call hamburgers steamed hams? Yes. It's a regional dialect. </p>
          </div>
          <div className="Subforum-Stats Subforum-Column Center">
            <span>24 Posts | 15 Topics</span>
          </div>
          <div className="Subforum-Info Subforum-Column">
            <b><a href="">Last Post</a></b> by <a href="">JustAUser</a>
            <br/>
            on <small>22 Dec 2021</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
