import Image from "next/image";

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favColor, age, image } = data;

  return (
    <main>
      <h1 className="text-center">{name}</h1>

      <img src={data.image.url} width={data.image.width} height={data.image.height} alt="En hund" />
    </main>
  );
}
