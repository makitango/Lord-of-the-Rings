import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";

export default function Books() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleButtonClick = () => {
    const randomVolume = getRandomElement(volumes);
    const randomPage = randomVolume.slug;
    window.location.href = `volumes/${randomPage}`;
  };

  return (
    <>
      <Head>
        <title>List of books</title>
      </Head>
      <h1>List of books</h1>
      <p>{introduction}</p>
      <button onClick={handleButtonClick}>Random article</button>
      <ul>
        {volumes.map(({ slug, title, description, cover, books }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
