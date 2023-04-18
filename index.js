const Notification = (props) => {
  const { message, className, path } = props;
  const containerClassName=`notification ${className}`
  return (
      <div className={containerClassName}>
      <img className='img' src={path}/>
      <p className='message'>{message}</p>

      </div> 
  )

};

const element = (
  <div className="inner-container">
    <h1 className="title">Notifications</h1>
    <div className='notification-list-container'>
    <Notification 
    className ='primary-blue'
    message='Information Message'
    path='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'/>

    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
