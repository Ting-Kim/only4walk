const GMAPS_API_KEY = process.env.KEY;
const alength = GMAPS_API_KEY.length;
export default function Admin() {
  return (
    <div>
      <p>This is the admin page</p>
      <p>123</p>
      <p>{alength}</p>
    </div>
  );
}
