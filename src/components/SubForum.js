import '../styles/SubForum.css';

import BoardPreview from './BoardPreview';

function SubForum(props) {
    return (
        <div className="Subforum">
            <div className="Subforum-Title">
                <h1>{props.title}</h1>
            </div>

            {/* Temporary Data */}
            <BoardPreview/>
            <hr className="Subforum-Divider"/>
            <BoardPreview/>
        </div>
    );
  };
  
  export default SubForum;