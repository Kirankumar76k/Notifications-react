const Notification = (props) => {
  //  Write your code here.
  const { className, imgSrc, msgText } = props;
  return (
    <div className={`card ${className}`}>
      <img src={imgSrc} className="imgClass" />
      <p className="text">{msgText} Message</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="notification-container">
      <h1 className="heading">Notifications</h1>
      <div className="msg-container">
        <Notification
          className="card1"
          imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          msgText="Information"
        />
        <Notification
          className="card2"
          imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          msgText="Success"
        />
        <Notification
          className="card3"
          imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          msgText="Warning"
        />
        <Notification
          className="card4"
          imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          msgText="Error"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
