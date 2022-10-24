import "./ItemModal.css";

function ItemModal({ isOpen, name, card, onClose }) {
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
          alt="close button"
        ></button>
        <img src={card.link} alt={`${card.name}`} className="modal__image" />
        <p className="modal__title">{card.name}</p>
        <p className="modal__desc">Weather: {card.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
