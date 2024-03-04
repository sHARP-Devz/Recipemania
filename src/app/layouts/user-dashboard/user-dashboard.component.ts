import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
@ViewChild('fileInput') fileInput :ElementRef | any;


onFileSelected(event: any) {
  event.preventDefault();

  const file = event.target.files[0];
  console.log(this.fileInput);
  // You can now handle the selected file here
}
}
