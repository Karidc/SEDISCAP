<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

/*function phptemplate_menu_item_link($link) {
  
  if (empty($link['localized_options'])) {
    $link['localized_options'] = array();
  }
  
  if($link['menu_name'] == 'primary-links' && $link['options']['attributes']['title']){
    // By default the menu system stores the menu item's 'Description' in the title attribute of the link 
    // that is created. We can use this to reformat the link with the description in the output as well
    $link_description = '<p class="primary_link_description">' .
                        check_plain($link['options']['attributes']['title']) . '</p>';
    // Adding a little <span> for css themeing later to the title
    $link['title'] = '<span class="primary_link_title">' . 
                     check_plain($link['title']) . '</span>';
    $link['localized_options']['html'] = TRUE;
    // tack the description on to the end of the link actual link
    return l($link['title'], $link['href'], $link['localized_options']) . $link_description;
  }
  else {
    // Otherwise, we just return the link as normal
    return l($link['title'], $link['href'], $link['localized_options']);
  }
}*/

function sediscap_preprocess_html(&$vars) {
  //drupal_add_js('http://www.purplegene.com/js/fixColors.js', array('type' => 'external'));
  drupal_add_js(drupal_get_path('theme','sediscap') . '/js/main.js');
}

function sediscap_preprocess_views_view(&$vars) {
  //dpm($vars);
  $current_view = $vars['view'];
  //drupal_set_message($current_view->name);
  if($current_view->name == 'action_scope'){
    $term = taxonomy_term_load($current_view->args[0]);
    $vars['view']->build_info['title'] = i18n_taxonomy_term_name($term);
  }
}