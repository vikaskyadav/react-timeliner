import React, { Fragment } from "react";
import { render } from "react-dom";
import {Timeline} from "./Timeline"
import {Event} from "./Event"
import Navbar from "./Navbar";
import {events} from "./events_list"
class App extends React.Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        <h1>React Timeline </h1>
        <Timeline>
          {events? events.map((event,index)=>(
            <Event key={index} interval={event.interval} title={event.title} subtitle={event.subtitle} description={event.description}/>
          )): null
          }
        </Timeline>
      </Fragment>

    )
  }
}

render(<App />, document.getElementById("root"));
