// pages/index.js

import { useState } from "react";
import reviews from "../data/reviews";
import Link from "next/link";
import SearchBar from "../components/SearchBar/SearchBar";
import TagFilter from "../components/TagFilter/TagFilter";

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

  const handleTagSelect = (selectedTag) => {
    if (selectedTag) {
      setFilteredReviews(
        reviews.filter((review) => review.tags.includes(selectedTag))
      );
    } else {
      setFilteredReviews(reviews);
    }
  };

  const uniqueTags = [...new Set(reviews.flatMap((review) => review.tags))];

  return (
    <div className="container mx-auto p-8">
      <SearchBar onSearch={handleSearch} />
      <TagFilter tags={uniqueTags} onTagSelect={handleTagSelect} />
      {filteredReviews.length ? (
        filteredReviews.map((review) => (
          <div key={review.slug} className="mb-8">
            <div key={review.slug} className="mb-8 flex">
              <div className="flex-1 mr-4">
                {" "}
                {/* Bloque de título, descripción y etiquetas */}
                <h2 className="text-2xl mb-2">{review.title}</h2>
                <p className="mb-2">{review.description}</p>{" "}
                {/* Asumiendo que tienes un campo de 'description' en tus datos */}
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

              <div className="w-1/6">
                {" "}
                {/* Bloque de imagen */}
                <img
                  src={`${review.imageURL}?w=96&h=96&c=fill&q=80&f=auto`}
                  alt={review.title}
                  className="w-24 h-24 object-cover mb-2"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
}
