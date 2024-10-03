import { child, Database, get, ref } from '@angular/fire/database';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FireRealService {
  firebaseDatabase = inject(Database);

  async getData() {
    const dbRef = ref(this.firebaseDatabase);
    try {
      const snapshot = await get(child(dbRef, '/infos'));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error reading data: ", error);
      return null;
    }
  }


}
