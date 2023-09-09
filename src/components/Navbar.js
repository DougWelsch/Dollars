function Navbar(props) {
  return (
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
  );
};

export default Navbar;