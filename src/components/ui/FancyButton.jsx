import "./fancy-button.css";

const FancyButton = () => {
  return (
    <button className="button" type="button">
      <div className="outline"></div>

      <div className="state state--default">
        <div className="icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <g>
              <path
                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63Z"
                fill="currentColor"
              />
              <path
                d="M10.11 14.4C9.92 14.4 9.73 14.33 9.58 14.18C9.29 13.89 9.29 13.41 9.58 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>

        <p>
          {Array.from("SendMessage").map((char, i) => (
            <span key={i} style={{ "--i": i }}>
              {char}
            </span>
          ))}
        </p>
      </div>

      <div className="state state--sent">
        <div className="icon">
          <svg viewBox="0 0 24 24" width="1em" height="1em">
            <path
              fill="currentColor"
              d="M10.58 15.58L7.22 12.53 8.28 11.47 10.58 13.77 15.72 8.63 16.78 9.69z"
            />
          </svg>
        </div>

        <p>
          {Array.from("Sent").map((char, i) => (
            <span key={i} style={{ "--i": i + 5 }}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </button>
  );
};

export default FancyButton;
