import { type TextCheck } from '../team/text';
import { FLAG_LABEL } from '../team/view';

/** A text line by line, numbered, with its flags (skillLines(), noteLines()). */
export function TextLines({ lines }: { lines: TextCheck['lines'] }) {
  return (
    <ol className="tp-lines">
      {lines.map((line, i) => (
        <li key={i} className={line.flags.length > 0 ? 'flagged' : undefined}>
          <span className="tp-num" aria-hidden="true">
            {i + 1}
          </span>
          <code>{line.text === '' ? ' ' : line.text}</code>
          {line.flags.map((flag) => (
            <span key={flag} className="tp-pill tp-pill-flag">
              {FLAG_LABEL[flag]}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
}
