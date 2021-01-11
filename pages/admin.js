const alength = typeof(process.env.NEXT_PUBLIC_KEY);
export default function Admin() {
  return (
    <div>
      <p>This is the admin page</p>
      <p>123</p>
      <p>{alength}</p>
    </div>
  );
}
