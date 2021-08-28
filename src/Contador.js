export default function Contador({ classe, incrementar, decrementar, valor }) {
  return (
    <div className={classe}>
      <button className="decrement" onClick={decrementar}>
        -
      </button>{" "}
      {valor}{" "}
      <button className="increment" onClick={incrementar}>
        +
      </button>
    </div>
  );
}
