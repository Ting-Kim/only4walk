// const K_SIZE = 40;
const K_SIZE = 20;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: "3px solid #f44336",
  borderRadius: K_SIZE,
  backgroundColor: "rgba( 255, 255, 255, 0 )",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 10,
  fontWeight: "bold",
  //padding: 4,
  cursor: "pointer",
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: "4px solid #3f51b5",
  color: "#f44336",
};
const markerStyleHover = {
  //position: 'absolute',
  //width: 100,
  //height: 100,
  //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: "inline-block",
  position: "absolute",
  width: "100px",
  //width: 'auto',
  padding: "8px",
  bottom: K_SIZE,
  right: 50,
  left: -50,
  WebkitBorderRadius: "8px",
  MozBorderRadius: "8px",
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
  fontSize: "14px",
  opacity: 0.5,
  zIndex: 1,
};

export { greatPlaceStyle, greatPlaceStyleHover, K_SIZE, markerStyleHover };
