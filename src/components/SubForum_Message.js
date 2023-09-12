import profile from '../assets/profile.png';

function SubForum_Message(props) {
    return (
        <div className="Subforum-Message">
            <div className="Subforum-Message-Header">
                <h1 className="Subforum-Message-Header-Time">1 hour ago</h1>
                <h1 className="Subforum-Message-Header-Index">#1</h1>
            </div>

            <div className="Subforum-Message-Body">
                <div className="Subforum-Message-Body-Profile">
                    <div className="Subforum-Message-Body-Profile-User"><a href="">RandomUser</a></div>
                    <img className="Subforum-Message-Body-Profile-Img" src={profile} alt="Profile Image" width="50px" height="50px"/>
                    <div className="Subforum-Message-Body-Profile-Status">Offline</div>
                    <div className="Subforum-Message-Body-Profile-Age">Joined: Mar 2020</div>
                    <div className="Subforum-Message-Body-Profile-Posts">Posts: 1390</div>
                </div>
                <div className="Subforum-Message-Body-Content">
                    <p>You misunderstood from the very beginning. You just believed what you wanted to believe.</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default SubForum_Message;