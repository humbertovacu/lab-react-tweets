import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
 
  const { tweet } = props;

  return (
    <div className="tweet">
      <ProfileImage image = {tweet.user.image}/>
    <div/>

      <div className="body">
        <div className="top">
          <User userData = {tweet.user}/>
          <Timestamp time = {tweet.timestamp}/>
        
        </div>

        <Message message = {tweet.message}/>

        <div className="actions">
         <Actions/>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
