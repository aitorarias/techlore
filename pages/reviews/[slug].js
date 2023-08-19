import { useRouter } from "next/router";
import reviews from "../../data/reviews";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgresBar";

import { estimateReadingTime } from "../../lib/estimateReadingTime";

function Review() {
  const router = useRouter();
  const { slug } = router.query;

  const review = reviews.find((r) => r.slug === slug);

  const readingTime = estimateReadingTime(review.content);

  if (!review) return <p>No se encontró la revisión</p>;

  return (
    <>
      <ProgressBar />
      <div className="container mx-auto p-8">
        <img
          src={`${review.imageURL}?w=full&h=auto&c=fill&q=80&f=auto`}
          alt={review.title}
          className="w-full object-cover mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {readingTime} min de lectura
        </p>
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
