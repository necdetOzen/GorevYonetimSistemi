import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  kullanici: any[] = [];
  constructor(private formBuilder: FormBuilder,) { }
  formHatirlatma!: FormGroup;
  display: boolean = false;
  ngOnInit(): void {
    this.createForm();
  //  this.createSelections();
  }
  showDialog() {
    
    this.display = !this.display;
}
  createForm() {
    this.formHatirlatma = this.formBuilder.group({
      ad: [''],
      soyad: [''],
      dogum:[''],
      mail: [''],
      
    });
   
  }
  get f() {
    return this.formHatirlatma.controls;
  }
//   createSelections() {
//     this.durumList.forEach((durum) => {
//       this.durumRange.push({
        
//         label: durum.ad,
//         value: durum,
//       });
//     });
// }

ekle(){
  let tarih = this.f['date'].value;

  var dateFormat = new Date();
      if(tarih != '')
      dateFormat.setDate(tarih.getDate());
      // this.formHatirlatma.get('date').setValue(dateFormat);  

      this.formHatirlatma.controls['date'].setValue(dateFormat);

 
  this.kullanici.push({
    //array modelin bütün verilerini pushla
  
    ad: this.f['ad'].value,
    soyad:this.f['soyad'].value,
    dogum:this.f['date'].value,
    mail:this.f['mail'].value.ad 
  });
}

}
