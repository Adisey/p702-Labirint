// Core
import * as React from "react";
// import { inject, observer } from "mobx-react";
// import ListStore from "../../store/ListStore";

interface IYyyProps {
  ListStore?: any;
  aaa?: any;
  fu?: () => void;
}

// @inject("ListStore")
// @observer
export default class Yyy extends React.Component<IYyyProps> {
  setClick2() {
    const setList = this.props.ListStore?.setList;
    console.log("--()- setList -", setList);
    setList([]);
  }

  render() {
    console.log("--(YYY)- this.props -", this.props);
    // const aaa = () => {
    //   console.log("THIS:", this);
    //   this.props.fu && this.props.fu();
    //   this.props.ListStore?.setList([]);
    // };
    return (
      <div>
        <button onClick={this.setClick2.bind(this)}> YY+YY </button>
        YYYYYYYYYYYYYYYY
      </div>
    );
  }
}
