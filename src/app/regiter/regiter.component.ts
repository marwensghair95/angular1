import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.css']
})
export class RegiterComponent implements OnInit {
  username :String="";
  mail:String="";
  passw:String="";
  confpass:String="";
  submitted = false;

  users = [
    {
      "_id": "5faa9ae80082c23741eae400",
      "index": 0,
      "age": 37,
      "name": "Lane Rodgers",
      "gender": "male",
      "company": "COMVERGES",
      "email": "lanerodgers@comverges.com",
      "phone": "+216 (817) 576-2505",
      "address": "191 Bouck Court, Belva, North Dakota, 7969"
    },
    {
      "_id": "5faa9ae8ae882e1388635f48",
      "index": 1,
      "age": 36,
      "name": "Sallie Gross",
      "gender": "female",
      "company": "SUNCLIPSE",
      "email": "salliegross@sunclipse.com",
      "phone": "+216 (852) 416-3369",
      "address": "171 Ridgecrest Terrace, Emerald, Colorado, 4314"
    },
    {
      "_id": "5faa9ae8115ce8207af16bec",
      "index": 2,
      "age": 32,
      "name": "Carlson Galloway",
      "gender": "male",
      "company": "NAVIR",
      "email": "carlsongalloway@navir.com",
      "phone": "+216 (867) 468-2570",
      "address": "706 Hendrix Street, Kansas, Connecticut, 9852"
    },
    {
      "_id": "5faa9ae891d8c99498616342",
      "index": 3,
      "age": 20,
      "name": "Ora Brady",
      "gender": "female",
      "company": "FLEETMIX",
      "email": "orabrady@fleetmix.com",
      "phone": "+216 (880) 500-3284",
      "address": "906 Berriman Street, Ahwahnee, Utah, 5406"
    },
    {
      "_id": "5faa9ae8030470da83d98c64",
      "index": 4,
      "age": 22,
      "name": "Elizabeth Richards",
      "gender": "female",
      "company": "TERAPRENE",
      "email": "elizabethrichards@teraprene.com",
      "phone": "+216 (871) 572-2444",
      "address": "877 Stockholm Street, Thornport, Indiana, 6731"
    },
    {
      "_id": "5faa9ae85a7c7b96efdf147b",
      "index": 5,
      "age": 22,
      "name": "Autumn Hubbard",
      "gender": "female",
      "company": "BESTO",
      "email": "autumnhubbard@besto.com",
      "phone": "+216 (904) 531-3438",
      "address": "112 Banker Street, Motley, Wyoming, 8232"
    },
    {
      "_id": "5faa9ae8798a3973603521bb",
      "index": 6,
      "age": 33,
      "name": "Dunn Riley",
      "gender": "male",
      "company": "ACCRUEX",
      "email": "dunnriley@accruex.com",
      "phone": "+216 (877) 401-3305",
      "address": "269 Auburn Place, Neibert, Virgin Islands, 7410"
    },
    {
      "_id": "5faa9ae8b5356742327c4af7",
      "index": 7,
      "age": 33,
      "name": "Barton Briggs",
      "gender": "male",
      "company": "EURON",
      "email": "bartonbriggs@euron.com",
      "phone": "+216 (985) 444-2394",
      "address": "951 Rutherford Place, Delco, Arizona, 374"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.mail.length<8  || this.passw.length<8 || this.confpass.length<8 && this.username.length<8) {
      alert('champs vide');
        return;
    }
    else
    if (this.passw==this.confpass) {
       // display form values on success
    alert('SUCCESS');
    
    }
    else
    {alert('mdp invalid !');}
   
}

}
