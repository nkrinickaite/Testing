import { shoppingCartPage } from "C:\\Users\\37066\\Desktop\\Internship\\cypress\\e2e\\shopping_cart_page.cy.js";
export const shopping_cart_page = new shoppingCartPage()

export function getRandomEmail() {

  return "randomemail" + "@mail.com";

}

export function getRandomTextData(length) {

  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
 
  return result;

}

export function getRandomNumber(length){

  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;

  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;

}

