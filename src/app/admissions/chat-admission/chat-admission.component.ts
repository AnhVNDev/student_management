import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from 'src/app/message/messages.service';
// import { io } from "socket.io-client";
import { io } from "socket.io-client";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-chat-admission',
  templateUrl: './chat-admission.component.html',
  styleUrls: ['./chat-admission.component.css']
})
export class ChatAdmissionComponent implements AfterViewInit, OnInit {
  // newMessage = '';
  // messageList: string[] = [];

  // constructor(private chatService: MessagesService, private cdr: ChangeDetectorRef){

  // }
  // ngAfterViewInit(): void {
  //   this.chatService.getNewMessage().subscribe((message: string) => {
  //     this.messageList.push(message);
  //     console.log(this.messageList);
  //     this.cdr.detectChanges();
  //   })
  // }

  // ngOnInit(){
  //   // this.chatService.getNewMessage().subscribe((message: string) => {
  //   //   this.messageList.push(message);
  //   //   console.log(message);
  //   //   this.cdr.detectChanges();
  //   // })
  // }

  // sendMessage() {
  //   this.chatService.sendMessage2(this.newMessage);
  //   this.newMessage = '';
  // }
  sendMessageForm!: FormGroup;
  sender!: string;
  socket: any;
  room: string = '';
  message: string = '';
  messages: any[] = []; // Change the type of messages to an array of any
  file!: File

  constructor(private cdr: ChangeDetectorRef, private api: ApiService, private fb: FormBuilder) {
    this.socket = io('http://localhost:3000');
    this.sendMessageForm = this.fb.group({
      message: new FormControl('', Validators.required),
    })

    // this.socket.on('previous-messages', (messages: any) => {
    //   console.log(messages);
    //   for (let message of messages) {
    //     console.log(message.Content);
    //     this.messages.push({
          
    //       timestamp: message.TimeStamp,
    //       username: message.SenderId,
    //       content: message.Content,
    //     });
    //   }
    //   console.log(this.messages);
    // });

    
  }
  listStudent: any[] = [];
  ngOnInit(): void {
    this.getListStudent();
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
  ngAfterViewInit(): void {
   
    this.socket.on('message', (data: any) => {
      console.log(data);
      this.messages.push({
        timestamp: data.timestamp,
        username: data.SenderId,
        content: data.Content,
        file: null,
      });
      this.cdr.detectChanges();
    });

    this.socket.on('previous-messages', (messages: any) => {
      if(messages.length > 0) {
        for (let message of messages) {
          console.log(message);
          this.messages.push({
            
            timestamp: message.TimeStamp,
            username: message.SenderId,
            content: message.Content,
            file: message.File,
          });
        }
        console.log(this.messages);
        this.cdr.detectChanges();

      } else {
        this.messages = []
        this.cdr.detectChanges();
      }
      
    });

    this.cdr.detectChanges();
  }

  ReceiverId!: any;

  joinRoom(room: any) {
    this.ReceiverId = room;
    this.room = room;
    this.socket.emit('join-room', room);
    this.cdr.detectChanges();
  }

  checkUser(id: any) {
    const account = JSON.parse(localStorage.getItem('account')!)
    if(id == account.ID) {
      console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      return true;
    } else {
      console.log("falseeeeeeeee");
      return false;
    }
  }

  isImage(file: string): boolean {
    return /\.(jpe?g|png|gif)$/i.test(file);
  }

  getListStudent() {
    const user = JSON.parse(localStorage.getItem('account')!) 
    this.api.getAllStuentByAdmission(user.ID).subscribe((res: any) => {
      this.listStudent = JSON.parse(res).account
      
      console.log(this.listStudent);
    })
  }

  sendMessage() {
    console.log(this.uploadedFiles);
    const formData = new FormData();
    // formData.append('Room', this.room);
    // formData.append('SenderId',JSON.parse(localStorage.getItem('account')!).ID);
    // formData.append('ReceiverId', this.ReceiverId);
    formData.append('Content', this.message);
    // formData.append('file', this.uploadedFiles[0]);
    
    // this.api.sendFileChat(formData).subscribe(
    //   (res) => {
    //     console.log('File uploaded successfully');
    //   },
    //   (error) => {
    //     console.log('File upload failed:', error);
    //   }
    // );
    console.log(formData.get('file'));
    console.log(formData.get('Content'));
    

    this.socket.emit('message',
    {
      Room: this.room,
      SenderId: JSON.parse(localStorage.getItem('account')!).ID,
      ReceiverId: this.ReceiverId,
      Content: this.message,
      file: this.uploadedFiles[0],
      fileName: this.uploadedFiles[0].name,
    }
    );
   
    this.message = ''
    
    this.cdr.detectChanges();
  }

  uploadedFiles: any[] = [];

  onClear(event: any) {
    
    this.uploadedFiles = [];
    console.log(this.uploadedFiles)

  }
  onRemove(event: any) {
    // // Truy cập đối tượng FileList của phần tử <p-fileUpload>
    // const fileList: FileList = event.fileInput.files;

    // // Lấy index của tệp tin bị xóa
    // const index = Array.prototype.indexOf.call(fileList, event.file);

    // // Loại bỏ tệp tin khỏi danh sách tệp tin đã chọn
    // this.uploadedFiles.splice(index, 1);
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
    console.log(this.uploadedFiles)



  }

  onSelect(event: any) {
      console.log(event.files);
        for(let file of event.files) {
            this.uploadedFiles.push(file);
            
            console.log(this.uploadedFiles[0])
        }

       
    }
  @ViewChild('fileInput') fileInput!: ElementRef;
  sendFile() {
    // const file = this.fileInput.nativeElement.files[0];
    // if (!file) {
    //   this.snackBar.open('Vui lòng chọn một tệp để gửi', '', {
    //     duration: 2000,
    //   });
    //   return;
    // }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('room', this.room);
    formData.append('message', `Đã gửi tệp: ${this.file.name}`);
    formData.append('sender', this.sender);
    formData.append('timestamp', new Date().toISOString());
    this.api.sendFileChat(formData).subscribe(
      (res) => {
        console.log('File uploaded successfully');
      },
      (error) => {
        console.log('File upload failed:', error);
      }
    );
  

    // this.apo.post('http://localhost:3000/upload', formData).subscribe(
    //   () => {
    //     console.log('File uploaded successfully');
    //   },
    //   (error) => {
    //     console.log('File upload failed:', error);
    //   }
    // );
  }

  // isImage(file: string): boolean {
  //   const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  //   return allowedExtensions.exec(file) !== null;
  // }

  previewSrc?: string | ArrayBuffer;



  previewImage(event: any) {
    this.file = <File>event.target.files[0];
    // const file = event.target.files[0];
    if (this.file && this.isImage(this.file.name)) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewSrc = e.target.result;
      };
      reader.readAsDataURL(this.file);
    } else {
      this.previewSrc = '';
    }
  }
}
