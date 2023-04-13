import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';

import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  socket!: any

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    // private renderer: Renderer2,
    // private socket: Socket
  ) {
    // this.socket = io('http://localhost:3000');
  }

public connect(): void {
  
}

public login(username: string, userType: string): void {
this.socket.emit('login', { username, userType });
}

public sendMessage(from: string, to: string, message: string): void {
this.socket.emit('message', { from, to, message });
}



public onMessage(): Observable<any> {
return new Observable((observer) => {
this.socket.on('message', (data: any) => {
observer.next(data);
});
});
}



public onStudentList(): Observable<any> {
return new Observable((observer) => {
this.socket.on('studentList', (data: any) => {
observer.next(data);
});
});
}


// loadScript(src: string): void {
//   const script = this.renderer.createElement('script');
//   script.type = 'text/javascript';
//   script.src = src;
//   this.renderer.appendChild(this.document.body, script);
// }

loadScript2(src: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = (error: any) => {
      reject(error);
    };
    document.body.appendChild(script);
  });
}

public message$: BehaviorSubject<string> = new BehaviorSubject('');
 

  // socket2 = io('http://localhost:3000');

  // public sendMessage2(message: any) {
  //   console.log('sendMessage: ', message)
  //   this.socket2.emit('message', message);
  // }

  // public getNewMessage = () => {
  //   this.socket2.on('message', (message: any) =>{
  //     this.message$.next(message);
  //   });

  //   return this.message$.asObservable();
  // };





// private socket: SocketIOClient.Socket;

//   constructor(private http: HttpClient) {
//     this.socket = io(environment.apiUrl);
//   }

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(`${environment.apiUrl}/users`);
//   }

//   sendMessage(msg: Message): void {
//     this.socket.emit('send_message', msg);
//   }

//   onNewMessage(): Observable<Message> {
//     return new Observable((observer) => {
//       this.socket.on('new_message', (msg: Message) => {
//         observer.next(msg);
//       });
//     });
//   }
}
