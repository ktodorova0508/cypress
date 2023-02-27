export const loginUrl = 'https://api.demoblaze.com/login';
export const addToCartUrl = 'https://api.demoblaze.com/addtocart';
export const viewCartUrl = 'https://api.demoblaze.com/viewcart';
export const username = 'krisi_test';
export const password = 'a3Jpc2lfdGVzdA==';
export const userCookie = 'a3Jpc2lfdGVzdDE2NzgwNDA=';

export const productIdUrl = (index: number) => `https://demoblaze.com/prod.html?idp_=${index}`;

export const apiRequest = (method: string, url: string, body?: object ) => {
    return body ? 
    cy.request({method,url,body}) : 
    cy.request({method, url}); 
}

