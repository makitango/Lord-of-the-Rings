import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function VolumeX() {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  console.log(nextVolume);

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

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
      {previousVolume ? (
        <button>
          <Link href={`/volumes/${previousVolume.slug}`}>
            Previous book: {previousVolume.title}
          </Link>
        </button>
      ) : null}
      <br />
      {nextVolume ? (
        <button>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next book: {nextVolume.title}
          </Link>
        </button>
      ) : null}
    </>
  );
}
