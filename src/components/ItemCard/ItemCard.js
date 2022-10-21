import "./../../blocks/ItemCard.css";

function ItemCard(clothingOption, handleCardClick) {
  return (
    <li className="card" onClick={() => handleCardClick}>
      <img
        className="card__image"
        src={clothingOption.image}
        alt={clothingOption.name}
      />
      <div className="card__title">{clothingOption.name}</div>
    </li>
  );
}

export default ItemCard;
