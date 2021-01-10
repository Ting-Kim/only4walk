const popup = {
  position: 'fixed',
  margin: 'auto',
  width: '150vw',
  height: '150vh',
  //left: '-50',
  //top: '-50',
  top: '75vh',
  left: '-75vw',
  right: '75vw',
  bottom: '75vh',
  zIndex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const popup_inner = {
  position: 'absolute',
  left: '25%',
  right: '25%',
  top: '25%',
  bottom: '25%',
  margin: 'auto',
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 1)',
  fontSize: '20px',
};

//const popup_inner = {};
export {popup, popup_inner};
