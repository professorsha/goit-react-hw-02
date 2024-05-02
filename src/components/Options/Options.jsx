
import css from './Options.module.css';

export default function Options({ onCount, children }) {
  return (
    <button className={css.button} onClick={onCount} type="button">
      {children}
    </button>
  );
}
