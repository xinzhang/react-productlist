import {getAllProducts} from '../productApi';

describe("Api", function () {

  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, Id: '123'}));
  });

  it("ack", function () {

    getAllProducts().then(response => {
      console.log(response); //< this is never printed
      expect(response.Id).toBe(1); //< always pass / gets ignored?
    });

  });
});
