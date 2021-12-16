import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-aylik',
  templateUrl: './aylik.component.html',
  styleUrls: ['./aylik.component.scss']
})
export class AylikComponent implements OnInit {

  display: boolean = false;
  durumRange: SelectItem<any>[] = [];
  hatirlatmaList: any[] = [];
  formHatirlatma!: FormGroup;
  showDialog(item: any) {
    const index = this.hatirlatmaList.indexOf(item);
    this.display = true;
}
  durumList= [
    {
      
      ad: 'Başlatıldı',
      id: 0,
      
    },
    {ad: 'Beklemede',
      id: 1,
    },
    {ad: 'Yapılıryor',
      id: 2,
    },
    {ad: 'Tamamlandı',
      id: 3,
    },
  ];

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createForm();
   this.createSelections();
  }
 
  createForm() {
    this.formHatirlatma = this.formBuilder.group({
      id: [''],
      ad: [''],
      date:[''],
      aciklama: [''],
      durum:[''], 
    });
   
  }
  get f() {
    return this.formHatirlatma.controls;
  }
  createSelections() {
    this.durumList.forEach((durum) => {
      this.durumRange.push({
        
        label: durum.ad,
        value: durum,
      });
    });
}

ekle(){
  let tarih = this.f['date'].value;

  var dateFormat = new Date();
      if(tarih != '')
      dateFormat.setDate(tarih.getDate());
      // this.formHatirlatma.get('date').setValue(dateFormat);  

      this.formHatirlatma.controls['date'].setValue(dateFormat);

 
  this.hatirlatmaList.push({
    //array modelin bütün verilerini pushla
  
    ad: this.f['ad'].value,
    tarih:this.f['date'].value,
    aciklama:this.f['aciklama'].value,
    durum:this.f['durum'].value.ad 
  });
}
sil(item: any){
  const index = this.hatirlatmaList.indexOf(item);  //silmek istediğim itemin indexini buluyo
  this.hatirlatmaList.splice(index, 1);  //indexteki elemanı listeden siliyo
}
}
