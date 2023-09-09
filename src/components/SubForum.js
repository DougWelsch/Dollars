import notebook from '../assets/notebook.png';
import SubForum_Row from './SubForum_Row';

function SubForum(props) {
    return (
        <div className="Subforum">
            <div className="Subforum-Title">
                <h1>{props.title}</h1>
            </div>

            {/* Temporary Data */}
            <SubForum_Row/>
            <hr className="Subforum-Divider"/>
            <SubForum_Row/>
        </div>
    );
  };
  
  export default SubForum;