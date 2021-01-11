//const GMAPS_API_KEY = process.env.KEY;
const alength = typeof(process.env.NEXT_PUBLIC_KEY);
console.log(dd)
export default function Admin() {
  return (
    <div>
      <p>This is the admin page</p>
      <p>123</p>
      <p>{alength}</p>
    </div>
  );
}
