export default function CloseButton({ onClick, style }) {
  return (
    <button onClick={onClick} style={{ ...style, border: 0, background: "transparent" }}>
      <span role="img" aria-label={`remove item link`}>
        ❌
      </span>
    </button>
  );
}
