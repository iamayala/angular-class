import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';

  // Initialize a constructor
  constructor() {}

  // When initializing the page => useEffect()
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle...');
  }
}
