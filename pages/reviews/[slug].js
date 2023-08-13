import { useRouter } from "next/router";
import reviews from "../data/reviews";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgresBar";

function Review() {
  const router = useRouter();
  const { slug } = router.query;
  const review = reviews.find((r) => r.slug === slug);

  if (!review) return <p>No se encontró la revisión</p>;

  return (
    <>
      <ProgressBar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
        <div
          className="prose max-w-none mb-4"
          dangerouslySetInnerHTML={{ __html: review.content }}
        ></div>
        <Link href="/" className="text-sm underline">
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

export default Review;
