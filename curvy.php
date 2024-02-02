<?php
/**
 * Plugin Name:       Curvy
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       curvy
 *
 * @package           create-block
 */
namespace AR_Curvy;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

final class Curvy {
	public static function init() {
		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see https://developer.wordpress.org/reference/functions/register_block_type/
		 */
		add_action(
			'init',
			function () {
				register_block_type( __DIR__ . '/build/blocks/curvy' );

				register_block_type( __DIR__ . '/build/blocks/clicky-group' );
				register_block_type( __DIR__ . '/build/blocks/clicky-button' );

				register_block_type( __DIR__ . '/build/blocks/piccyGallery' );
				register_block_type( __DIR__ . '/build/blocks/piccyImage' );

				add_filter(
					'block_categories_all',
					function ( $categories ) {
						return array_merge(
							$categories,
							array(
								array(
									'slug'  => 'curvy',
									'title' => 'Curvy',
								),
							)
						);
					}
				);
			}
		);
	}

	public static function convert_custom_properties( $value ) {
		$prefix     = 'var:';
		$prefix_len = strlen( $prefix );
		$token_in   = '|';
		$token_out  = '--';
		if ( str_starts_with( $value, $prefix ) ) {
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr( $value, $prefix_len )
			);
			$value          = "var(--wp--$unwrapped_name)";
		}
		return $value;
	}
}

Curvy::init();
