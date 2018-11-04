import React from "react";
import {Card,CardContent,CardHeader} from "@material-ui/core";
import style from './style';

export const Event = ({ title, subtitle, interval, description, children }) =>
  <li className={style.event}>
    <label className={style.icon}></label>
    <div className={style.body}>
      <Card>
      <div style={{"float":"right"}}>
      <p className={style.date}>{interval}</p>
      </div>
      <CardHeader title={title} className={style.cardHeader} subheader={subtitle}/>
      <CardContent className={style.description}>
        {description}
      </CardContent>
      </Card>
    </div>
  </li>