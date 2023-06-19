import Link from "next/link";

export default function Level1() {
  return (
    <div>
      <h1>Level1</h1>
      <Link href="/volumes">Go to books overview</Link>
    </div>
  );
}

// function getRandomElement(volumes) {
//   return volumes[Math.floor(Math.random() * volumes.length)];
// }
