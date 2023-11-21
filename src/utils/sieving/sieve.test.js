import sieve from './sieve';
import createSorter from "./createSorter";
import createFilterPredicate from "./createFilterPredicate";

const entries = [
  { title: 'Apple', releaseYear: 2009, programType: 'movie'},
  { title: 'Star Wars 99', releaseYear: 2023, programType: 'movie'},
  { title: '123 One', releaseYear: 2010, programType: 'series'},
  { title: 'Zebra', releaseYear: 2010, programType: 'movie'},
  { title: 'Mango', releaseYear: 2011, programType: 'movie'},
  { title: 'Monkey Island', releaseYear: 2021, programType: 'movie'},
  { title: 'Elvis Patrol', releaseYear: 2016, programType: 'movie'},
  { title: 'Bugdust', releaseYear: 2012, programType: 'movie'},
  { title: 'King Kong', releaseYear: 2011, programType: 'series'},
];

describe('sieve', () => {
  it('correctly sieves a list for releaseYear>=2010, programType=movie, limit=5, sort by title desc', async () => {
    const filterPredicate = createFilterPredicate('movie', [{
      field: 'releaseYear',
      comparison: 'gte',
      value: 2010,
    }]);
    const sorter = createSorter('title', 'desc');
  
    const received = sieve({
      entries,
      filterPredicate,
      sorter,
      limit: 5,
      page: 1
    });

    expect(received).toStrictEqual([
      { title: 'Zebra', releaseYear: 2010, programType: 'movie'},
      { title: 'Star Wars 99', releaseYear: 2023, programType: 'movie'},
      { title: 'Monkey Island', releaseYear: 2021, programType: 'movie'},
      { title: 'Mango', releaseYear: 2011, programType: 'movie'},
      { title: 'Elvis Patrol', releaseYear: 2016, programType: 'movie'},
    ])
  });

  it('correctly handles pagination', async () => {
    const filterPredicate = createFilterPredicate('movie', [{
      field: 'releaseYear',
      comparison: 'gte',
      value: 2010,
    }]);
    const sorter = createSorter('title', 'desc');
  
    const received = sieve({
      entries,
      filterPredicate,
      sorter,
      limit: 5,
      page: 2
    });

    expect(received).toStrictEqual([
      { title: 'Bugdust', releaseYear: 2012, programType: 'movie'},
    ])
  });
});