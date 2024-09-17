describe('Form Submission with Modal', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('fills the form, submits it, and closes the modal', () => {
        // Fill the form
        cy.get('input[label="Name"]').type('John Doe');
        cy.get('input[label="Email"]').type('john.doe@example.com');

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Wait for the modal to open
        cy.wait(2000); // Wait for the simulated API request

        // Check if modal opened
        cy.contains('Form Submitted!').should('be.visible');

        // Close the modal
        cy.get('button').contains('Close').click();

        // Verify the modal is closed
        cy.contains('Form Submitted!').should('not.exist');
    });
});
