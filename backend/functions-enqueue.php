<?php
/**
 *
 * @package giovannimalausa
 * @since gm 1.0.2
 * @license GPL 2.0
 * 
 */

#-------------------------------------------------------------
# Enqueue Styles
#-------------------------------------------------------------

function gm_enqueue_styles() {             

	# Main stylesheet
  	wp_register_style('gm-main-styles' , get_template_directory_uri(). "/style.css" , array(), gm_theme_version, 'screen' );  	
  	wp_enqueue_style('gm-main-styles' );           

}

add_action('wp_enqueue_scripts', 'gm_enqueue_styles' );

#-------------------------------------------------------------
# Enqueue Scripts 
#-------------------------------------------------------------

# False = Header
# True = Footer

function gm_enqueue_scripts() {

	# Custom Scripts 
	wp_register_script ('gm-custom-code' , get_template_directory_uri().'/frontend/js/custom-code.js' , array(), gm_theme_version, true );
	wp_enqueue_script ('gm-custom-code' );  

}

add_action( 'wp_enqueue_scripts', 'gm_enqueue_scripts');