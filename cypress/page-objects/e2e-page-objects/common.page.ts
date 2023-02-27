const demoBUrl = "https://demoblaze.com";

export const homeCatClass = ".list-group-item";
export const idOfSubCat = "#itemc";
export const phones = "Phones";
export const laptops = "Laptops";
export const monitors = "Monitors";
export const itemDescClass = ".card-block";
export const priceHeader = "h5";
export const aboutUsPosition = "[data-target]";
export const aboutUs = "About us";
export const videoId = "#example-video_html5_api";

export const navigateDemoblaze = () => {
  cy.visit(demoBUrl);
};

export const getAndFilterItems = (getValue: string, filterValue: string) => {
  const elementsObject = cy.get(getValue).filter(filterValue);
  return elementsObject;
};

export const getAndFindItems = (getValue: string, findValue: string) => {
  const elementsObject = cy.get(getValue).find(findValue);
  return elementsObject;
};

export const getAndClickElement = (values: {
  getValue: string;
  containsValue?: string;
  index?: number;
}) => {
  const value = cy.get(values.getValue);
  if (values.containsValue) {
    value.contains(values.containsValue).click();
  } else if (values.index) {
    value.eq(values.index).click();
  } else {
    value.click();
  }
};

export const getAndTypeValue = (getValue: string, typeValue: string) => {
  cy.get(getValue).type(typeValue);
};
