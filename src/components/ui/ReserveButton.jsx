import "./reserve-button.css";

const ReserveButton = ({ text = "Réserver maintenant" }) => {
  return (
    <button className="button-container" type="button">
      <div className="b-m-container">
        <div className="b-m-text">{text}</div>
        <div className="b-m-icon">
          <svg viewBox="0 0 24 24" height="100%" width="100%">
            <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ReserveButton;
