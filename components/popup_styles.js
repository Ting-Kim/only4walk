const popup = {
  position: "fixed",
  margin: "auto",
  width: "150vw",
  height: "150vh",
  //left: '-50',
  //top: '-50',
  top: "75vh",
  left: "-75vw",
  right: "75vw",
  bottom: "75vh",
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const popup_inner = {
  ...popup,
  position: "fixed",
  width: "50vw",
  height: "70vh",
  top: "25vh",
  left: "-75vw",
  right: "25vw",
  bottom: "25vh",
  margin: "auto",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 1)",
  fontSize: "20px",
  padding: "auto",
  zIndex: 2,
};

const popup_button = {
  float: "right",
  display: "block",
  padding: "2px 5px",
  //fontWeight: 700,
  textShadow: "0 1px 0 #fff",
  fontSize: "1.3rem",
  background: "none",
  border: "none",
};
export { popup, popup_inner, popup_button };
