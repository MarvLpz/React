import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'LearningsWebPartStrings';
import Learnings from './components/Learnings';
import { ILearningsProps, IExampleItem } from './components/ILearningsProps';

import styles from './components/Learnings.module.scss'; 

import {MSGraphClient} from '@microsoft/sp-http';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { arraysEqual, List } from 'office-ui-fabric-react';
import { array } from 'prop-types';

//export type IExampleItem = { subject: string; link: string;};

export type myExample = { subject?: string; link?: string; };

export interface ILearningsWebPartProps {
  description: string;
  items: IExampleItem[];
 // items2: myExample;
}

export default class LearningsWebPart extends BaseClientSideWebPart<ILearningsWebPartProps> {

  public render(): void {
    this.context.msGraphClientFactory
    .getClient()
    .then((client: MSGraphClient): void => {
      // get information about the current user from the Microsoft Graph
      //get the latest 5 emails
      client// client's datatype is msgraphclient
      //.api('/me/messages')  //api(path)
     .api('/me/messages')
      .top(5)
      .orderby("receivedDateTime desc")
      .get((error, messages: any, rawResponse?: any) => {

        //need RESOLVE
        // List the latest emails based on what we got from the Graph
        //var arrItems: string[] = this._getEmail(messages.value)
      //  var myArrLink: string[] = this._getEmailLink(messages.value)
       // for (let index = 0; index < myArray.length; index++){
       //   console.log("my Array 2 " + myArray[index]);
       // }
    

        const element: React.ReactElement<ILearningsProps> = React.createElement(
          Learnings,
          {
            
            description: this.properties.description,
           propmessagesubject: this._getEmailSubj(messages.value),
            propmessagelink: this._getEmailLink(messages.value)
           //propitems: this._myFunc(this._getEmailSubj(messages.value),this._getEmailLink(messages.value))
          }
        );
        ReactDom.render(element, this.domElement);
  
      });
    }); 
    
  }
  private _myFunc(arrSubj: string [], arrLink: string[]): IExampleItem[] {

    let myIexample : IExampleItem[] = new Array();

    for (let index = 0; index < arrSubj.length; index++) {
      console.log("ready");
      myIexample[index].subject = arrSubj[index];
      myIexample[index].link = arrSubj[index];
      console.log("Log subject " + myIexample[index].subject)
     }
     return myIexample;
  }
  private _getEmailSubj(messages: MicrosoftGraph.Message[]): string[] {
    //let html: string = '';
   // let arrsubject : string[] = new Array(5);
   // let re = /%20/gi; 
   let arrsubj : string[] = new Array(5);
    for (let index = 0; index < messages.length; index++) {
     // arrsubject[index] = messages[index].subject.replace(re," ");
     arrsubj[index] = messages[index].subject
    //items[index].subject = messages[index].subject;
    //items[index].link = messages[index].webLink;
    }
    return arrsubj;
    // Add the emails to the placeholder
   // const listContainer: Element = this.domElement.querySelector('#spListContainer');
  //  listContainer.innerHTML = html;
  }
  
  private _getEmailLink(messages: MicrosoftGraph.Message[]): string[] {
    //let html: string = '';
    let arrlink : string[] = new Array(5);
   // let re = /%20/gi; 
    for (let index = 0; index < messages.length; index++) {
     // arrsubject[index] = messages[index].subject.replace(re," ");
     arrlink[index] = messages[index].webLink;
    }
    return arrlink;
    // Add the emails to the placeholder
   // const listContainer: Element = this.domElement.querySelector('#spListContainer');
  //  listContainer.innerHTML = html;
  }
//private arrlink: myExample; 

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
