/*
 * Include our constants
 */
import * as helpers from '../../../../.dev/tests/cypress/helpers';

describe( 'Test CoBlocks Pricing Table Block', function() {
	/**
	 * Test that we can add a pricing-table block to the content, not alter
	 * any settings, and are able to successfully save the block without errors.
	 */
	it( 'Test pricing-table block saves with empty values.', function() {
		helpers.addCoBlocksBlockToPage( true, 'pricing-table' );

		helpers.savePage();

		helpers.checkForBlockErrors( 'pricing-table' );

		helpers.viewPage();

		cy.get( '.wp-block-coblocks-pricing-table' ).should( 'exist' );

		helpers.editPage();
	} );

	/**
	 * Test that we can add a pricing-table block to the content, change
	 * column count and  are able to successfully save the block without errors.
	 */
	it( 'Test pricing-table block saves with text values set.', function() {
		helpers.addCoBlocksBlockToPage( true, 'pricing-table' );

		cy.get( '.wp-block-coblocks-pricing-table' ).click( { force: true } );

		cy.get( '.wp-block-coblocks-pricing-table-item' ).should( 'have.length', 2 );

		cy.get( 'button[aria-label="Change pricing table count"]' ).click();

		cy.get( 'button' ).contains( /one pricing/i ).click();

		cy.get( '.wp-block-coblocks-pricing-table-item' ).should( 'have.length', 1 );

		cy.get( 'button[aria-label="Change pricing table count"]' ).click();

		cy.get( 'button' ).contains( /three pricing/i ).click();

		cy.get( '.wp-block-coblocks-pricing-table-item' ).should( 'have.length', 3 );

		cy.get( 'button[aria-label="Change pricing table count"]' ).click();

		cy.get( 'button' ).contains( /four pricing/i ).click();

		cy.get( '.wp-block-coblocks-pricing-table-item' ).should( 'have.length', 4 );

		helpers.savePage();

		helpers.checkForBlockErrors( 'pricing-table' );
	} );

	/**
	 * Test the pricing-table block saves with custom classes
	 */
	it( 'Test the pricing-table block custom classes.', function() {
		helpers.addCoBlocksBlockToPage( true, 'pricing-table' );

		helpers.addCustomBlockClass( 'my-custom-class', 'pricing-table' );

		helpers.savePage();

		helpers.checkForBlockErrors( 'pricing-table' );

		cy.get( '.wp-block-coblocks-pricing-table' )
			.should( 'have.class', 'my-custom-class' );

		helpers.viewPage();

		cy.get( '.wp-block-coblocks-pricing-table' )
			.should( 'have.class', 'my-custom-class' );

		helpers.editPage();
	} );
} );
