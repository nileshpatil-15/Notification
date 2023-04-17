// const Notification = (props) => {
//   const { message, className, path } = props;
//   const containerClassName={`notification ${className}`}
//   return (
//     <div className={containerClassName}>
//       <img className="icon" src={path} />
//       <p className="message">{message}</p>
//     </div>
//   );
// };

const element = (
  <div className="inner-container">
    <h1 className="heading">Notifications</h1>
    {/* <Notification
      message="Success Message"
      className="Success-Message"
      path="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" 
    />  */}
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
