import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Mr. Nice', image: 'assets/img/hero_1.png', description: 'Some hero information goes here...'},
      {id: 12, name: 'Narco', image: 'assets/img/hero_2.png', description: 'Some hero information goes here...'},
      {id: 13, name: 'Bombasto', image: 'assets/img/hero_1.png', description: 'Some hero information goes here...'},
      {id: 14, name: 'Celeritas', image: 'assets/img/hero_2.png', description: 'Some hero information goes here...'},
      {id: 15, name: 'Magneta', image: 'assets/img/hero_2.png', description: 'Some hero information goes here...'},
      {id: 16, name: 'RubberMan', image: 'assets/img/hero_1.png', description: 'Some hero information goes here...'},
      {id: 17, name: 'Dynama', image: 'assets/img/hero_2.png', description: 'Some hero information goes here...'},
      {id: 18, name: 'Dr IQ', image: 'assets/img/hero_1.png', description: 'Some hero information goes here...'},
      {id: 19, name: 'Magma', image: 'assets/img/hero_2.png', description: 'Some hero information goes here...'},
      {id: 20, name: 'Tornado', image: 'assets/img/hero_1.png', description: 'Some hero information goes here...'}
    ];
    return {heroes};
  }
}
