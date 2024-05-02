import css from './Feedback.module.css';

export default function Feedback({good, neutral, bad}){
    return (
        <><ul className={css.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {good + neutral + bad}</li>
            <li>Positive: </li>

        </ul>
        </>
    )
}