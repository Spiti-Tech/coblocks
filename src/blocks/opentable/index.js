/**
 * External dependencies
 */
import { OpentableIcon as icon } from '@godaddy-wordpress/coblocks-icons';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import metadata from './block.json';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';

/**
 * Block constants.
 */
const { name, category, attributes } = metadata;

const settings = {
	/* translators: block name */
	title: __( 'OpenTable', 'coblocks' ),
	/* translators: block description */
	description: __( 'Embed an OpenTable Reservations Widget.', 'coblocks' ),
	icon: <Icon icon={ icon } />,
	keywords: [
		'coblocks',
		/* translators: block keyword */
		__( 'restaurant', 'coblocks' ),
		/* translators: block keyword */
		__( 'reservation', 'coblocks' ),
		/* translators: block keyword */
		__( 'open', 'coblocks' ),
		/* translators: block keyword */
		__( 'table', 'coblocks' ),
	],
	styles: [
		{
			name: 'standard',
			/* translators: block style */
			label: __( 'Standard', 'coblocks' ),
			isDefault: true,
		},
		{
			name: 'wide',
			/* translators: block style */
			label: __( 'Wide', 'coblocks' ),
		},
		{
			name: 'tall',
			/* translators: block style */
			label: __( 'Tall', 'coblocks' ),
			isDefault: true,
		},
		{
			name: 'button',
			/* translators: block style */
			label: __( 'Button', 'coblocks' ),
		},
	],
	supports: {
		align: [ 'wide', 'full' ],
	},
	example: {
		attributes: {
			align: 'standard',
			restaurantID: '123456',
		},
	},
	attributes,
	edit,
	save,
	deprecated,
};

export { name, category, metadata, settings };
