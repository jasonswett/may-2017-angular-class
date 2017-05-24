import { Utilities } from './utilities';

describe('Utilities', function() {
  describe('slugify', function() {
    it('slugifies a string', function() {
      expect(Utilities.slugify('John Lennon')).toEqual('john-lennon');
    });
  });
});
