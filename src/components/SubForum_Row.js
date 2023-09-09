import notebook from '../assets/notebook.png';

function SubForum_Row(props) {
    return (
        <div className="Subforum-Row">
            <div className="Subforum-Icon Subforum-Column Center">
                <img className="Subforum-Icon-Img" src={notebook} alt="Notebook Logo" width="50px" height="50px"/>
            </div>

            <div className="Subforum-Description Subforum-Column">
                <h1><a href="">Description Title</a></h1>
                <p>Description Content: Yeah. Oh, egads! My roast is ruined. But what if I were to purchase fast food and disguise it as my own cooking? Delightfully devilish, Seymour. Ah- Skinner with his crazy explanations The superintendent's gonna need his medication When he hears Skinner's lame exaggerations There'll be trouble in town tonight Seymour!</p>
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
    );
  };
  
  export default SubForum_Row;