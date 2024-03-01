import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
@ViewChild('fileInput') fileInput :ElementRef | any;


onFileSelected(event: any) {
  const file = event.target.files[0];
  console.log(file);
  // You can now handle the selected file here
}
}
