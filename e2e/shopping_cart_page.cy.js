export class shoppingCartPage {

    selectCheckout(){

        cy.get('button[title="Proceed to Checkout"]').click();
        cy.wait(5000);

    }
    selectViewCart(){
        cy.get('[href="/checkout/cart/"]').click()
        cy.wait(5000);
    }

}
