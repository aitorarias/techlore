// pages/index.js

import { useState } from "react";
import reviews from "./data/reviews";
import Link from "next/link";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const results = reviews.filter((review) => {
      return (
        review.title.toLowerCase().includes(lowercasedQuery) ||
        (review.tags &&
          review.tags.some((tag) =>
            tag.toLowerCase().includes(lowercasedQuery)
          ))
      );
    });
    setFilteredReviews(results);
  };

  return (
    <div className="container mx-auto p-8">
      <SearchBar onSearch={handleSearch} />
      {filteredReviews.length ? (
        filteredReviews.map((review) => (
          <div key={review.slug} className="mb-8">
            <h2 className="text-2xl mb-2">{review.title}</h2>
            {review.tags && (
              <div className="mb-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Link
              className="text-blue-500 hover:underline"
              href={`/reviews/${review.slug}`}
            >
              Leer más
            </Link>
          </div>
        ))
      ) : (
        <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
}
