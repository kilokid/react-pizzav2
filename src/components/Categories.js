import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => {
          return (
            <li
              onClick={() => setActiveIndex(i)}
              key={i}
              className={activeIndex === i ? 'active' : ''}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
