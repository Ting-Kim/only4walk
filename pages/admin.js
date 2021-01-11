const GMAPS_API_KEY = process.env.KEY;
export default function Admin() {
  return (
    <div>
      <p>This is the admin page</p>
      <p>123</p>
      <p>{GMAPS_API_KEY.length}</p>
    </div>
  );
}
