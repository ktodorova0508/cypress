import {
  getAndFilterItems,
  navigateDemoblaze,
  getAndFindItems,
  getAndClickElement,
  aboutUs,
  aboutUsPosition,
  homeCatClass,
  idOfSubCat,
  itemDescClass,
  laptops,
  monitors,
  phones,
  priceHeader,
  videoId,
} from "../page-objects/e2e-page-objects/common.page";

describe("HomeE2E", () => {
  beforeEach(() => {
    navigateDemoblaze();
  });

  it("can visit demoblaze and assert correct categories", () => {
    getAndFilterItems(homeCatClass, idOfSubCat)
      .should("have.length", 3)
      .then((category) => {
        expect(category[0]).to.contain.text(phones);
        expect(category[1]).to.contain.text(laptops);
        expect(category[2]).to.contain.text(monitors);
      });
  });

  it("can get pricetags for all items on home page", () => {
    getAndFindItems(itemDescClass, priceHeader).each((pricetag) => {
      cy.wrap(pricetag).should("contain.text", "$");
    });
  });

  it("can check that video is in paused state ", () => {
    getAndClickElement({ getValue: aboutUsPosition, containsValue: aboutUs });

    cy.get(videoId).should("have.prop", "paused", true);
  });
});
