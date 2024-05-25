export default async function Page() {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo', { cache: "no-store" })
  const {datetime} = (await res.json()) as { datetime: string };

  return (
      <>
          <h1>CURRENT TIME: {datetime}</h1>
      </>
  )
}