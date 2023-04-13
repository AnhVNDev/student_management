import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import * as io from 'socket.io-client';
import { ApiService } from '../api.service';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
const SOCKET_ENDPOINT = 'http://localhost:3000';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  sendMessageForm!: FormGroup;
 

  constructor(
    private renderer: Renderer2, private el: ElementRef,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private api: ApiService,
    private router: Router, private toastService: NgToastService, private socket: Socket) {
      this.sendMessageForm = this.fb.group({
        message: new FormControl('', Validators.required),
      });
     }

  

  ngOnInit(): void {
    this.setupSocketConnection();
   
   
  }
  // ngAfterViewInit() {
  //   this.socket.on('message-broadcast', (data: string) => {
  //     if (data) {
  //       const chatDiv = this.el.nativeElement.querySelector('#chat');
  //       const chatContentLeftSideDiv = this.renderer.createElement('div');
  //       const dFlexDiv = this.renderer.createElement('div');
  //       const img = this.renderer.createElement('img');
  //       const divFlexGrow1 = this.renderer.createElement('div');
  //       const pChatTime = this.renderer.createElement('p');
  //       const pChatLeftMsg = this.renderer.createElement('p');
      
  //       this.renderer.addClass(chatContentLeftSideDiv, 'chat-content-leftside');
  //       this.renderer.addClass(dFlexDiv, 'd-flex');
  //       this.renderer.setAttribute(img, 'src', 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png');
  //       this.renderer.setAttribute(img, 'width', '48');
  //       this.renderer.setAttribute(img, 'height', '48');
  //       this.renderer.addClass(img, 'rounded-circle');
  //       this.renderer.addClass(divFlexGrow1, 'flex-grow-1');
  //       this.renderer.addClass(pChatTime, 'mb-0 chat-time');
  //       this.renderer.addClass(pChatLeftMsg, 'chat-left-msg');
      
  //       const textChatTime = this.renderer.createText('Harvey, 3:33 PM');
  //       const textChatLeftMsg = this.renderer.createText(data);
      
  //       this.renderer.appendChild(pChatTime, textChatTime);
  //       this.renderer.appendChild(pChatLeftMsg, textChatLeftMsg);
  //       this.renderer.appendChild(divFlexGrow1, pChatTime);
  //       this.renderer.appendChild(divFlexGrow1, pChatLeftMsg);
  //       this.renderer.appendChild(dFlexDiv, img);
  //       this.renderer.appendChild(dFlexDiv, divFlexGrow1);
  //       this.renderer.appendChild(chatContentLeftSideDiv, dFlexDiv);
  //       this.renderer.appendChild(chatDiv, chatContentLeftSideDiv);
  //      }
  //    });

  // }

  setupSocketConnection() {
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
   element.innerHTML = data;
   element.style.background = 'red';
   element.style.color =  'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
   document.getElementById('message-list')?.appendChild(element);
       
       }
     });
   
   
  }

  SendMessage() {
    this.socket.emit('message', this.sendMessageForm.get('message')?.value);
    console.log(this.sendMessageForm.get('message')?.value);
    

    
   const element = document.createElement('li');
   element.innerHTML = this.sendMessageForm.get('message')?.value;
   element.style.background = 'red';
   element.style.color =  'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
   document.getElementById('message-list')?.appendChild(element);
   this.sendMessageForm.get('message')?.setValue('');

    // const chatDiv = this.el.nativeElement.querySelector('#chat');
    // const chatContentLeftSideDiv = this.renderer.createElement('div');
    // const dFlexDiv = this.renderer.createElement('div');
    // const img = this.renderer.createElement('img');
    // const divFlexGrow1 = this.renderer.createElement('div');
    // const pChatTime = this.renderer.createElement('p');
    // const pChatLeftMsg = this.renderer.createElement('p');
  
    // this.renderer.addClass(chatContentLeftSideDiv, 'chat-content-leftside');
    // this.renderer.addClass(dFlexDiv, 'd-flex');
    // this.renderer.setAttribute(img, 'src', 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png');
    // this.renderer.setAttribute(img, 'width', '48');
    // this.renderer.setAttribute(img, 'height', '48');
    // this.renderer.addClass(img, 'rounded-circle');
    // this.renderer.addClass(divFlexGrow1, 'flex-grow-1');
    // this.renderer.addClass(pChatTime, 'mb-0 chat-time');
    // this.renderer.addClass(pChatLeftMsg, 'chat-left-msg');
  
    // const textChatTime = this.renderer.createText('Harvey, 3:33 PM');
    // const textChatLeftMsg = this.renderer.createText(this.sendMessageForm.get('message')?.value);
  
    // this.renderer.appendChild(pChatTime, textChatTime);
    // this.renderer.appendChild(pChatLeftMsg, textChatLeftMsg);
    // this.renderer.appendChild(divFlexGrow1, pChatTime);
    // this.renderer.appendChild(divFlexGrow1, pChatLeftMsg);
    // this.renderer.appendChild(dFlexDiv, img);
    // this.renderer.appendChild(dFlexDiv, divFlexGrow1);
    // this.renderer.appendChild(chatContentLeftSideDiv, dFlexDiv);
    // this.renderer.appendChild(chatDiv, chatContentLeftSideDiv);


    
  }

  

}
