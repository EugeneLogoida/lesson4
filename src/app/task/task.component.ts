import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public searchField!:string;
  
  public taskName!:string;
  public changePos: boolean = false;
  public index!:number;

  public type!:string;
  public che = 0;
  public che1 = 0;
  public che2 = 0;
  public v!:string;

  public showAddPopup = false;
  public showEditPopup = false;
  public inputFN!:string;
  public inputLN!:string;
  public inputPN!:string;

  public phoneList: List[] = [
    {
      firstName: 'Petya', 
      lastName: 'Zhuk',
      phoneNumber: '0661234561'
    },
    {
      firstName: 'Vasylyna', 
      lastName: 'Vrublevska',
      phoneNumber: '0991234871'
    },
    {
      firstName: 'Alejandro', 
      lastName: 'Del Rio Alber',
      phoneNumber: '0506771701'
    },
    {
      firstName: 'Petro', 
      lastName: 'Petriv',
      phoneNumber: '0679875468'
    },
    {
      firstName: 'Ira', 
      lastName: 'Tytar',
      phoneNumber: '0667745569'
    },
    {
      firstName: 'Sofia', 
      lastName: 'Zhuk',
      phoneNumber: '066548149'
    } 
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addPhone(): void{
    this.showAddPopup = true;

  }

  

  editUser(i:number): void {
    console.log(this.phoneList[i]);
    this.inputFN = this.phoneList[i].firstName;
    this.inputLN = this.phoneList[i].lastName;
    this.inputPN = this.phoneList[i].phoneNumber;
    this.showEditPopup = true;
    this.index = i; 
  }
  deleteUser(i:number): void {
    this.phoneList.splice(i, 1);
  }

  saveBtn():void {
    if(this.showEditPopup){
      this.phoneList[this.index].firstName = this.inputFN;
      this.phoneList[this.index].lastName = this.inputLN;
      this.phoneList[this.index].phoneNumber = this.inputPN;
      this.showEditPopup = false;
    }

    if(this.showAddPopup){
      let newPhone={
        firstName: this.inputFN, 
        lastName: this.inputLN, 
        phoneNumber: this.inputPN
      }
      this.phoneList.push(newPhone);
      this.showAddPopup = false;
    }

    this.inputFN = '';
    this.inputLN = '';
    this.inputPN = '';

  }
  sortElements(type:string, v: string): void{
    this.v = v;
    this.type = type;

    if(v == 'first_n'){
      this.che1 = 0;
      this.che2 = 0;
      if(type == 'fnu') this.che = -1;
      else this.che = 1;
      
    }
    if(v === 'last_n'){
      this.che = 0;
      this.che2 = 0;

      if(type == 'lnu') this.che1 = -1;
      else this.che1 = 1;
    }   
    if(v === 'phone_n'){
      this.che = 0;
      this.che1 = 0;

      if(type == 'pnu') this.che2 = -1;
      else this.che2 = 1;

    } 
  }
  closePopup(): void{
    this.showAddPopup = false;
    this.showEditPopup = false;
  }
}

export interface List{
  firstName: string, 
  lastName: string, 
  phoneNumber: string
}