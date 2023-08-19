import { useState } from "react";
import styles from "./TagFilter.module.css";

const TagFilter = ({ tags, onTagSelect }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    onTagSelect(tag);
  };

  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`m-1 px-3 py-1 border rounded ${
            tag === selectedTag ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
