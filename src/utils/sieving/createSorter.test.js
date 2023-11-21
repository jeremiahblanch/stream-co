import createSorter from './createSorter';

describe('createSorter', () => {
  it('creates a working sorter function for title descending', async () => {
    const sorter = createSorter('title', 'desc');
      expect([
        {title: 'Apple'},
        {title: 'Zebra'},
        {title: '123 OneTwoThree'},
        {title: 'Mango'},
      ].sort(sorter)).toStrictEqual([
        {title: 'Zebra'},
        {title: 'Mango'},
        {title: 'Apple'},
        {title: '123 OneTwoThree'},
      ])
  });
});