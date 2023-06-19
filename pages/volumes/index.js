import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import { introduction } from "../../lib/data";

export default function Books() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>List of books</title>
      </Head>
      <h1>List of books</h1>
      <p>{introduction}</p>
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
