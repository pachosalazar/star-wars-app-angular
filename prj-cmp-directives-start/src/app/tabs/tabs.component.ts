import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

characters = [
  {name: 'Luke Skywalker', side: ''},
  {name: 'Darth Maul', side: ''},
  {name: 'Boba Fett', side: ''},
  {name: 'Rey', side: ''},
  {name: 'Obi-Wan Kenobi', side: ''},
  {name: 'Darth Vader', side: ''}
];
chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }
  onChoose(side) {
    this.chosenList = side;
  }
  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
   return this.characters.filter((char) => {
     return char.side === this.chosenList;
   })
  }
}
