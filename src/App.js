import './styles/App.css';

import Navbar from './components/Navbar';
import SubForum from './components/SubForum';
import BoardMessage from './components/BoardMessage';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navbar/>

      <BoardMessage/>

      <SubForum title="General Information"/>
      <SubForum title="Administration"/>

      <div className="App-Info">
        <div className="Chart">
          My Forum - Stats
        </div>
        <div>
          <span><u>178</u> Posts in <u>24</u> Topics by <u>343</u> Users</span>
          <br/>
          <span>Latest Post: <b><a href="#">Random Post</a></b> on 1 Jan 2020 by <a href="">RandomUser</a></span>
        </div>
      </div>

      <footer>
        <span>(Author notes and legal information)</span>
      </footer>
    </div>
  );
}

export default App;
