<?php

define('ROOT', get_template_directory_uri());
define('IMG', ROOT . '/img');

function replace_core_jquery_version() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', "https://code.jquery.com/jquery-3.5.1.min.js", array(), '3.5.1' );
}
add_action( 'wp_enqueue_scripts', 'replace_core_jquery_version' );

add_theme_support( 'post-thumbnails' );

// include('functions/idna_convert.class.php');

add_theme_support( 'menus' );

function front_scripts() {

// Home page
	if( is_page_template( array( 'templates/page-home.php' ) ) ){
		wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-home.css');
		wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts-index.js', false, false, 'in_footer');
	}

	// Thanks page
	if( is_page_template( array( 'templates/page-thanks.php' ) ) ){
		wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-thanks.css');
	}

	// Privacy page
	if( is_page_template( array( 'templates/page-privacy.php' ) ) ){
		wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-privacy.css');
		wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts-privacy.js', false, false, 'in_footer');
	}

// 404 page
	if( is_404() ){
		wp_enqueue_style( 'styles', get_template_directory_uri().'/css/styles-404.css');
	}

}
add_action( 'wp_enqueue_scripts', 'front_scripts' );

// $user = wp_get_current_user();
// if($user->display_name !== 'admin'){
// 	add_action('admin_head', 'admin_styles');
// 	function admin_styles() {
// 		wp_register_style( 'admin_styles', get_template_directory_uri() . '/css/styles-admin.css', false, '1.0.0' );
// 		wp_enqueue_style( 'admin_styles', get_template_directory_uri() . '/css/styles-admin.css', false, '1.0.0' );
// 	}
// }


if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}
