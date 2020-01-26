// Core
import * as React from "react";
import { inject, observer } from "mobx-react";
import Yyy from "./yyy";

interface IListItemsState {
  bbb: number;
}
interface IListItemsProps {
  ListStore?: any;
  aaa?: any;
}

@inject("ListStore")
@observer
export default class ListItems extends React.Component<
  IListItemsProps,
  IListItemsState
> {
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }

  constructor(props: IListItemsProps) {
    super(props);
    this.state = { bbb: 3 };
  }

  // onClick2() {
  //   console.log("THIS (click2):", this);
  // }

  render() {
    console.log("--()- this.props -", this.props);
    const { loading, list } = this.props.ListStore;
    console.log("--()- loading -", loading);
    console.log("--()- list -", list.length, list);
    console.log("--()- this.state -", this.state);
    const onClick1 = () => {
      console.log("THIS:", this);
      this.props.ListStore.loadList();
    };
    // const onClick2a = this.onClick2.bind(this);
    return (
      <div>
        <button onClick={onClick1}> + </button>
        46546546546
        <Yyy fu={onClick1} ListStore={this.props.ListStore} />
      </div>
    );
  }
}
