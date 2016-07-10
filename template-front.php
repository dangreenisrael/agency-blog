<?php
/**
 * Template Name: Front Page
 */
// Code to display Page goes here...
$context = Timber\Timber::get_context();
$page = new Timber\Post();

$context['page'] = $page;
$context['isFrontPage'] = true;
$context['team_members'] = get_field('team_members');

wp_enqueue_script( "front-page", get_stylesheet_directory_uri().'/static/js/front-page.js', 'jQuery', null, true);
wp_enqueue_style( 'global', get_stylesheet_directory_uri() . '/static/less/global.less' );
wp_enqueue_style( 'front-page', get_stylesheet_directory_uri() . '/static/less/front-page.less' );

$context['heroImage'] = get_field("hero_image")['url'];
if (!$context['heroImage']){
    $context['heroImage'] = get_stylesheet_directory_uri()."/static/img/header-bg.jpg";
}
Timber\Timber::render('front.twig', $context );
