
import css from './Options.module.css';
// import { useState } from 'react';

export default function Options({reset, total, onCount}) {
  
  
  return (<>
    <button className={css.button} onClick={()=>onCount('good')} type="button">Good
    </button>
    <button className={css.button} onClick={()=>onCount('neutral')} type="button">Neutral
    </button>
    <button className={css.button} onClick={()=>onCount('bad')} type="button">Bad
    </button>
    {total>0 && ( <button className={css.button} onClick={reset} type="button">Reset
    </button>)}
    </>

  );
}
