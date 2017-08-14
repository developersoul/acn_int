import * as actions from "../../../client/actions/contact";
import moxios from "moxios";
import qs from "qs";
const endpoint = "/wp-admin/admin-ajax.php";

describe('contact actions', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should send contact to convertloop', () => {
    const response = {id: '123'};
    const tags = "GERMAN,";
    const contact = {email: 'alejandro@brandspa.com', country: 'Colombia'};
    const expected = {
      "action": "convertloop_contact",
      "data": {
        "add_tags": ["GERMAN"],
        "email": "alejandro@brandspa.com",
        "country": "Colombia"
      }
    };

    moxios.stubRequest(endpoint, { response })
    return actions.storeConvertLoop(tags, contact)
    .then(res => {
        const dataSend = qs.parse(res.config.data);
      expect(dataSend).toEqual(expected)
    })


  })

})