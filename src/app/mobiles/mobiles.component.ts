import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor(private ms:MobilesService) { }
  id:any=null;
  showForm=false;
  formHeader="Add Mobile";
  mobileName:any;;
  price:any;
  ram:any;
  storage:any



 mobile:any;
  ngOnInit() {
      this.getData();
   
  }
  deleteData(id:any){
        this.ms.removeMobiles(id).subscribe((res)=>{
          this.getData();
        })

            
   }
  getData(){
        this.ms.fetchmobiles().subscribe((data)=>{
          this.mobile=data;
      })
 }
 
  cancel(){
    this.showForm=false;
    this.clearForm();

  }
  openForm(data:any=null){
    this.showForm=true;
    if(data){
     this.mobileName=data.name;
     this.price=data.price;
     this.ram=data.ram;
     this.storage=data.storage;
     this.id=data.id;
     this.formHeader="Edit Mobile";
    }
    else{
      this.id=null;
      this.formHeader="Add Mobile";
    }
  }
  clearForm(){
    this.mobileName=null;
     this.price=null;
     this.ram=null;
     this.storage=null;

  }
  saveMobile(){
    this.showForm=false;
    let body={
      id:this.id,
      name:this.mobileName,
      price:this.price,
      ram:this.ram,
      storage:this.storage
    }
     if(this.id){
      this.ms.putMobiles(body).subscribe((res)=>{
        this.getData();
      })
     }
     else
     {
      this.clearForm();
        this.ms.postMobiles(body).subscribe(
        (res)=>{
        this.getData();
         })
     }
      
      
      
    }
    
   
  

}
