/*describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(18);
    });
  })*/

  describe("Unit test for SpiderMan class", () => {
      test('1) Create an SpiderMan object', () => {
          
        const spiderman = require('./../app/spiderman')
        //Aqui escribimos el código que queremos usar tal cual
        //Quiero poder instanciar un objeto SpiderMan on esta información
        const andrewGarfield = new spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")

        //Validamos que este código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.numberOfMovies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
      });

      test('2) Use the method getInfo', () => {
        const spiderman = require('./../app/spiderman')
        const tomHolland = new spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey! I'm Tom Holland from Marvel Studios.")
      });
  })