import '../styles/BoardMessage.css';

import profile from '../assets/profile.png';

function BoardMessage(props) {
    return (
        <div className="BoardMessage">
            <div className="BoardMessage-Header">
                <h1 className="BoardMessage-Header-Time">1 hour ago</h1>
                <h1 className="BoardMessage-Header-Index">#1</h1>
            </div>

            <div className="BoardMessage-Body">
                <div className="BoardMessage-Body-Profile">
                    <div className="BoardMessage-Body-Profile-User"><a href="">RandomUser</a></div>
                    <img className="BoardMessage-Body-Profile-Img" src={profile} alt="Profile Image" width="50px" height="50px"/>
                    <div className="BoardMessage-Body-Profile-Status">Offline</div>
                    <div className="BoardMessage-Body-Profile-Age">Joined: <u>Mar 2020</u></div>
                    <div className="BoardMessage-Body-Profile-Posts">Posts: <u>1390</u></div>
                    <div className="BoardMessage-Body-Profile-Points">Points: <u>13</u></div>
                </div>
                <div className="BoardMessage-Body-Content">
                    <p>You misunderstood from the very beginning. You just believed what you wanted to believe.</p>
                    <hr/>
                    Signed by XXX
                </div>
            </div>
        </div>
    );
  };
  
  export default BoardMessage;