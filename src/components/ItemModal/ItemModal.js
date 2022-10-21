import "./../../blocks/ItemModal.css";

function ItemModal({ isOpen, name, onClose, card }) {
  return (
    <div
      className={
        isOpen ? `modal modal_type_${name}` : `modal_type_${name} modal_hidden`
      }
    >
      <div className="modal__container">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.image} alt={`${card.name}`} className="modal__image" />
        <h3 className="modal__title">{card.name}</h3>
        <p className="modal__desc">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
