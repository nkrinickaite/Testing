import { shoppingCartPage } from 'C:\\Users\\37066\\Desktop\\Internship\\cypress\\e2e\\test_setup.cy.js'
import { getRandomEmail, getRandomTextData, getRandomNumber, getRandomDigit } from 'C:\\Users\\37066\\Desktop\\Internship\\cypress\\e2e\\test_setup.cy.js'

 

beforeEach(() => {

  cy.visit('https://magento.softwaretestingboard.com');

})


it ('Mens Hoodies & Sweatshirts', () => {

    let email = getRandomEmail()
    let firstname = getRandomTextData (5)
    let lastname = getRandomTextData (10)
    let address = getRandomTextData (20)
    let city = getRandomTextData (10)
    let postcode = getRandomNumber (5)
    let telephone = getRandomNumber (9)

    cy.get('nav a:contains("Men")').trigger('mouseover');
    cy.get('nav a:contains("Hoodies & Sweatshirts")').click({ multiple: true, force: true }); //find mens Hoodies & Sweatshirts section

    /*cy.get('.product-item').its('length').then((itemCount) => {   //Assert that the displayed number of jackets matches the selected number of jackets displayed per page
        cy.get('.toolbar-amount')
          .invoke('text')
          .then((text) => parseInt(text.match(/(\d+)/)[0])) 
          .should('equal', itemCount); 
      });*/

    cy.contains('Frankie Sweatshirt').click(); //Select “Frankie Sweatshirt” and open its details
    cy.get('div[option-label="M"]').click();
    cy.get('div[option-label="Yellow"]').click(); //Select size, colour and quantity

    cy.get('#product-addtocart-button').click();
    cy.wait(5000);
    cy.get('.counter-number').should('contain', '1'); //Add product to cart and check that cart icon is updated with product quantity

    cy.get('.showcart').click();
    cy.get('#mini-cart').should('contain', 'Frankie');
    cy.get('#mini-cart').should('contain', 'Sweatshirt'); //Open cart and check if product match the one You added to the cart

    //shoppingCartPage.selectCheckout() //Proceed to checkout
    cy.get('button[title="Proceed to Checkout"]').click(); 
    cy.wait(5000);

    cy.get('#customer-email').type(email);
    cy.get('[name="firstname"]').type(firstname);
    cy.get('[name="lastname"]').type(lastname);
    cy.get('[name="street[0]"]').type(address);
    cy.get('[name="city"]').type(city);
    cy.get('[name="postcode"]').type(postcode);
    cy.get('[name="telephone"]').type(telephone);
    cy.get('select[name="country_id"]').select('United States');
    cy.get('select[name="region_id"]').select('California');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
    cy.get('button.continue').click();
    cy.wait(5000);
    cy.get('button[title="Place Order"]').click();
    cy.get('.checkout-success').should('be.visible'); //Complete the order

})

it ('Women pants', () => {

    let email = getRandomEmail()
    let firstname = getRandomTextData (5)
    let lastname = getRandomTextData (10)
    let address = getRandomTextData (20)
    let city = getRandomTextData (10)
    let postcode = getRandomNumber (5)
    let telephone = getRandomNumber (9)

    cy.get('nav a:contains("Women")').trigger('mouseover');
    cy.get('nav a:contains("Pants")').click({ multiple: true, force: true }); //Using navigation menu, find women pants section

    cy.get('#sorter').select('Price'); //Filter section to show the cheapest products available

    cy.get('.product-item-link').first().click();
    cy.get('.size > .swatch-attribute-options').first().click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').first().click(); 
    cy.get('#product-addtocart-button').click() //Select the cheapest pants and add them to the cart
    cy.wait(5000);
    cy.get('.counter-number').should('contain', '1');

    cy.get('.showcart').click();
    cy.get('.remove-item').click(); //Remove product from the cart

    //shoppingCartPage.selectViewCart() //Proceed to checkout
    cy.get('[href="/checkout/cart/"]').click()
    cy.wait(5000);

    cy.get('.block-upsell button[title="Add to Cart"]').first().click(); //Add product to the cart from suggested products
    cy.wait(5000);

    //shoppingCartPage.selectCheckout()
    cy.get('button[title="Proceed to Checkout"]').click();
    cy.wait(5000);
    
    cy.get('#customer-email').type(email);
    cy.get('[name="firstname"]').type(firstname);
    cy.get('[name="lastname"]').type(lastname);
    cy.get('[name="street[0]"]').type(address);
    cy.get('[name="city"]').type(city);
    cy.get('[name="postcode"]').type(postcode);
    cy.get('[name="telephone"]').type(telephone);
    cy.get('select[name="country_id"]').select('United States');
    cy.get('select[name="region_id"]').select('California');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
    cy.get('button.continue').click();
    cy.wait(5000);
    cy.get('button[title="Place Order"]').click();
    cy.get('.checkout-success').should('be.visible'); //Complete the order

})



