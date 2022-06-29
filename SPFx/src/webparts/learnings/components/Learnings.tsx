import * as React from 'react';
import styles from './Learnings.module.scss';
import { ILearningsProps } from './ILearningsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { List } from 'office-ui-fabric-react/lib/List';
//import { createListItems, IExampleItem } from '@uifabric/example-data';
import {IExampleItem} from './ILearningsProps';
import {ListBasicExample} from './MyList2';

export class MYList extends React.Component<any,any > {
  public render() {
    let { item, link } = this.props;
    return (
      <div>
        <a href = {link}>
          <button className={styles.button}>{ item }</button>
        </a>
      </div>
      );
  }
}
export class myExample {
 private subject: string; 
 private link: string; 
}

export default class Learnings extends React.Component<ILearningsProps, {}> {


 private getMessage () : IExampleItem[]{

    let myarray : IExampleItem [] = [];
    for (let index = 0; index < this.props.propmessagesubject.length; index++){
      console.log("ready");
      myarray.push({ subject : this.props.propmessagesubject[index], link: this.props.propmessagelink[index] });
     //  console.log("LOG THIS " + myarray[index].subject);
    }
    return myarray;   
  }

  private _onRenderCell(item: IExampleItem, index: number | undefined): JSX.Element {
    return (
      <div className={styles.container} data-is-focusable={true}>
         <div>
          <a href = {item.link}>
            <button className={styles.button}>{ item.subject }</button>
          </a>
        </div> 
      </div>
    );
  }

  public render(): React.ReactElement<ILearningsProps> {
   // this.getMessage();
   /** 
     <List
            items={ this.props.propmessagesubject}
            onRenderCell={ (item, index) => (
              <MYList item={ item } />
            )}
          />
   */
    //          this.getMessage();
    return (
      <div>
        <h1 className={styles.learnings}>Inbox</h1>
        <div className={styles.container} data-is-scrollable={ true }>
        <ListBasicExample items={ this.getMessage()} />
        </div>
      </div>
    );
  }
}
