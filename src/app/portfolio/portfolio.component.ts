import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc, CollectionReference, getFirestore  } from '@angular/fire/firestore';
import { initializeApp } from '@angular/fire/app';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  // providers: [AngularFirestore],
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
   app = initializeApp(environment.firebaseConfig);
   db = getFirestore(this.app);
  //  firestore: Firestore = inject(Firestore);

   constructor(){}

  createProfileForm: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    githubUsername: new FormControl('', Validators.required),
  });
  // firestore: Firestore = inject(Firestore);

//  async addi(){
//     let details = this.createProfileForm.value
//     try {
//       const docRef = await addDoc(collection(this.db, "users"), {
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }

//   }
  // add(data:any):Promise<boolean | string>{
  //   const collectionData = collection(this.firestore, 'products')
  //   return new Promise<any>((resolve, reject)=>{
  //     addDoc(collectionData, data).then(()=>{
  //       resolve('added successfully')
  //     }).catch((err)=>{
  //       reject(err)
  //     })
  //   })
  // }
}
