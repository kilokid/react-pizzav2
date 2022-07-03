function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => {
          return (
            <li onClick={() => onChangeCategory(i)} key={i} className={value === i ? 'active' : ''}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
