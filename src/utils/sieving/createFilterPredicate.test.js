import createFilterPredicate from './createFilterPredicate';

describe('createFilterPredicate', () => {
  it('creates a working filter predicate for programType="movie" and releaseYear>=2010', async () => {
    const pred = createFilterPredicate('movie',[{
        field: 'releaseYear',
        comparison: 'gte',
        value: 2010,
      }]);

      expect([
        { releaseYear: 2009, programType: 'movie'},
        { releaseYear: 2010, programType: 'movie'},
        { releaseYear: 2011, programType: 'movie'},
        { releaseYear: 2010, programType: 'series'},
        { releaseYear: 2011, programType: 'series'},
      ].filter(pred)).toStrictEqual([
        { releaseYear: 2010, programType: 'movie'},
        { releaseYear: 2011, programType: 'movie'},
      ])
  });
});