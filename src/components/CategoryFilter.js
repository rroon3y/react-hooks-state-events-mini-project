function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const categoryButtons = categories.map((cat) => (
    <button
      key={cat}
      className={cat === selectedCategory ? "selected" : ""}
      onClick={() => onCategoryChange(cat)}
    >
      {cat}
    </button>
  ));

  return <div className="categories">{categoryButtons}</div>;
}

export default CategoryFilter;
