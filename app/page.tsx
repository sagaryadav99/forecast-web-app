export default async function Home() {
  const data = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ foreCastHorizon: 4 }),
  });
  return <div>helloworld</div>;
}
