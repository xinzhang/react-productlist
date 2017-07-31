import {getAllProducts} from '../productApi';

describe("Api", function () {

  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
       resolve({
         ok: true,
         Id: '123',
         json: function() {
           return {Id: '123'}
         }
       });
     });

     return p;

    });
  });

  it("ack", function () {
    //const response = await getAllProducts();
    //console.log(response);
    getAllProducts().then(response => {
      console.log(response); //< this is never printed
      expect(response.Id).toBe(1); //< always pass / gets ignored?
    });

  });
});
