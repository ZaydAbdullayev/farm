export const CitizensModal = ({ open }) => {
  return (
    <div className={`w100 df aic jcc modal ${open ? 'show' : ''}`}>
      <div className=" df fdc aic modal-content">
        <span className="close-modal">&times;</span>
        <h2>Citizens</h2>
        <div className="w100 df fw gap-10 citizen-container">
          <figure className="df fdc gap-5 citizen-info">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="citizen"
            />
            <p>John Doe</p>
          </figure>
          <figure className="df fdc gap-5 citizen-info">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="citizen"
            />
            <p>John Doe</p>
          </figure>
        </div>
      </div>
    </div>
  );
};
