import { useRouter } from "next/router";
import reviews from "../../data/reviews";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgresBar";

import { estimateReadingTime } from "../../lib/estimateReadingTime";

function ReviewContent({ content }) {
  return (
    <>
      {content.map((item, index) => {
        switch (item.type) {
          case "h2":
            return (
              <h2 key={index} className="text-xl mb-4">
                {item.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="text-lg mb-3">
                {item.text}
              </h3>
            );
          case "p":
          default:
            return (
              <p key={index} className="mb-4">
                {item.text}
              </p>
            );
        }
      })}
    </>
  );
}

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
        <Link href={review.amazonUrl}>{review.amazonUrl}</Link>
        <img
          src={`${review.imageURL}?w=full&h=auto&c=fill&q=80&f=auto`}
          alt={review.title}
          className="w-full object-cover mb-8"
        />
        <h1 className="text-3xl font-bold mb-4">{review.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {readingTime} min de lectura
        </p>
        <ReviewContent content={review.content} />
        <Link href={review.amazonUrl}>{review.amazonUrl}</Link>
        <Link href="/" className="text-sm underline">
          Volver al inicio
        </Link>
      </div>
    </>
  );
}

export default Review;
