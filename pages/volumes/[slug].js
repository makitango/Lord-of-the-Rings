import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function VolumeX() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, cover, books, color } = currentVolume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        src={cover}
        height={230}
        width={140}
        alt="A picture of the book cover"
      />
      <ul>
        <li>
          {books[0].ordinal}: {books[0].title}
        </li>
      </ul>
      <ul>
        <li>
          {books[1].ordinal}: {books[1].title}
        </li>
      </ul>
      <Link href="../volumes/the-two-towers">Next book</Link>
    </>
  );
}
