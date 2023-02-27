import { apiRequest } from "../page-objects/api-page-objects/requests.page";

const entriesUrl = "https://api.demoblaze.com/entries";
const byCatUrl = "https://api.demoblaze.com/bycat";

describe("HomeAPI", () => {
  it("can get body of GET request to /entries url", () => {
    apiRequest("GET", entriesUrl).then(({ body }) => {
      expect(body.Items).to.have.length(9);
    });
  });

  it("can get all categories and their respective items count", () => {
    apiRequest("POST", byCatUrl, { cat: "phone" }).then(({ body }) => {
      expect(body.Items).to.have.length(7);
    });

    apiRequest("POST", byCatUrl, { cat: "notebook" }).then(({ body }) => {
      expect(body.Items).to.have.length(6);
    });

    apiRequest("POST", byCatUrl, { cat: "monitor" }).then(({ body }) => {
      expect(body.Items).to.have.length(2);
    });
  });
});
