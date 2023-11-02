import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;

  return (
    <main>
      <h1 className="text-center">{name}</h1>
      <p>
        {name} er {age} år gammel og hans yndlingsfarve er {favouriteColor}
      </p>

      <img src={data.image.url} width={data.image.width} height={data.image.height} alt="En hund" />
    </main>
  );
}
