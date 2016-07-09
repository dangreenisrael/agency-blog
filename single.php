<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber\Timber::get_context();
$post = Timber\Timber::query_post();
$context['post'] = $post;
if (has_post_thumbnail($post)){
	$context['background'] = "background-image: url(".get_the_post_thumbnail_url().")";
} else{
	$context['background'] = "background-image: url(".get_stylesheet_directory_uri()."/static/img/post-default-bg.jpg)";
}

wp_enqueue_style( 'global', get_stylesheet_directory_uri() . '/static/less/global.less' );
wp_enqueue_style( 'internal', get_stylesheet_directory_uri() . '/static/less/internal.less' );

if ( post_password_required( $post->ID ) ) {
	Timber\Timber::render( 'single-password.twig', $context );
} else {
	Timber\Timber::render( array( 'single-' . $post->ID . '.twig', 'single-' . $post->post_type . '.twig', 'single.twig' ), $context );
}
