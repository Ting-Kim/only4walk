const popup = {
  position: 'fixed',
  margin: 'auto',
  width: '100vw',
  height: '100vh',
  //left: '-50',
  //top: '-50',
  top: '50vh',
  //left: '-50vw',
  right: '50vw',
  bottom: '50vh',

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
  background: 'rgba(255, 255, 255, .8)',
  fontSize: 20,

};

//const popup_inner = {};
export {popup, popup_inner};
