type ErrorProps = { text: string; triggerReload?: () => void };

export const Error = ({ text, triggerReload }: ErrorProps) => (
  <div className="loading loading-error yellow-card">
    <h1>{text}</h1>

    <button className="loading-error__button" onClick={triggerReload}>
      Try again
    </button>
  </div>
);
