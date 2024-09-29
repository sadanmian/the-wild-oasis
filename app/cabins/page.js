export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
  return (
    <div>
      <h1>Cabins Pageeee</h1>
      <ul>
        {data.map((e) => (
          <li key={e?.id}>{e?.name}</li>
        ))}
      </ul>
    </div>
  );
}
