import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { StoreItemData } from '../models/store-item-data';
import { ContactMessageData } from '../models/contact-message-data';

const DB_URL = 'https://lev-hatahbiv.firebaseio.com/';
const STORE_ITEMS_PATH = 'store-items';//categories';
const CONTACT_MESSAGE_URL = DB_URL + 'contact-messages.json';

@Injectable()
export class HttpDataService {

  constructor(private http: Http) {
  }

  public sendContactMessage(msg: ContactMessageData) {
    const body = JSON.stringify(msg);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(CONTACT_MESSAGE_URL, body, { headers: headers }).map((data: Response) => data.json());
  }

  public getCategoryItems(category: string) {
    // var database = firebase.database();
    // let categoryRef = database.ref('/store-items/').orderByChild('category').equalTo(category);
    // return categoryRef.once('value');

    //REST mothod
    return this.http.get(this.getFullDbUri(STORE_ITEMS_PATH) + '?orderBy="category"&equalTo="' + category + '"')
      .map((response: Response) => response.json());
  }

  public getItemsByName(name: string) {
    return this.http.get(this.getFullDbUri(STORE_ITEMS_PATH) + '?orderBy="name"&equalTo="' + name + '"')
      .map((response: Response) => response.json());
  }

  public getFullDbUri(location: string): string {
    console.log(DB_URL + location + '.json');
    return (DB_URL + location + '.json');
  }
}
