import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPass: string = '';
}

// @Component({
//   selector: 'app-contact',
//   imports: [FormsModule],
//   templateUrl: './contact.html',
//   styleUrl: './contact.css',
// })
// export class Contact {
//   showLabelName: string = '';
//   showLabelAge: number | string = '';
// }
