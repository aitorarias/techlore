// pages/index.js

import { useState } from "react";
import reviews from "../data/reviews";
import Link from "next/link";
import SearchBar from "../components/SearchBar/SearchBar";
import TagFilter from "../components/TagFilter/TagFilter";
import Divider from "../components/Divider/Divider";

import { estimateReadingTime } from "../lib/estimateReadingTime";

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
    <main className="container mx-auto p-8">
      <SearchBar onSearch={handleSearch} />
      <nav>
        <TagFilter tags={uniqueTags} onTagSelect={handleTagSelect} />
      </nav>
      {filteredReviews.length ? (
        filteredReviews.map((review, index) => {
          const readingTime = estimateReadingTime(review.content);

          return (
            <>
              <article key={review.slug} className="mb-8 flex">
                <div className="flex-grow mr-4">
                  <Link href={`/reviews/${review.slug}`}>
                    <h2 className="text-2xl mb-2">{review.title}</h2>
                    <p className="mb-2">{review.description}</p>
                  </Link>
                  {review.tags && (
                    <div className="mb-2 pt-8">
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
                  <div className="text-gray-500 text-sm mb-2">
                    🕰️ {readingTime} min de lectura
                  </div>
                </div>
                <div className="w-1/5">
                  <img
                    src={`${review.imageURL}?w=96&h=96&c=fill&q=80&f=auto`}
                    alt={review.title}
                    className="w-24 h-24 object-cover mb-2"
                  />
                </div>
              </article>
              <hr className="my-4 mx-8 border-t border-gray-200" />
            </>
          );
        })
      ) : (
        <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
      )}
    </main>
  );
}
