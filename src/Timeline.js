import React from "react";
import style from './style'

export const Timeline = ({ children }) =>
<div className={style.container}>
  <ul className={style.timeline}>
    {children}
  </ul>
</div>