(function ($) {
  var style = document.createElement("style");
  document.head.appendChild(style);
  /* contact form 7 */
  style.sheet.insertRule(".wpcf7-form label {width: 100%}");

  /* Sidebar Select */
  style.sheet.insertRule(
    ".sidebar__single select{padding:10px; width:100%; border:2px solid #f2f2f2;}"
  );

  /* Widget Rss class addition */
  style.sheet.insertRule(".widget_rss a{color:#ffa801;}");

  /* sidebar Images */
  style.sheet.insertRule(".widget_text img{max-width:100%;height:auto;}");

  /* Tour Search Date picker only month */
  $("#monthPicker").datepicker({
    viewMode: "years",
    format: "MM",
  });

  /* wp-block-button__link class addition */
  $(".wp-block-button__link").addClass("thm-btn");

  /* wp-calendar-nav class addition */
  $(".wp-calendar-nav").addClass("tripo-calendar-nav");

  /* wp-calendar-table class addition */
  $(".wp-calendar-table").addClass("tripo-calendar");

  /* Widget Pages class addition */
  $(".widget_categories").addClass("tripo_widget_list tripo_widget_cat_list");

  /* Widget Pages class addition */
  $(".widget_nav_menu").addClass("tripo_widget_list");

  /* Widget Pages class addition */
  $(".widget_pages").addClass("tripo_widget_list");

  /* Categorylist class addition */
  $(".widget_archive").addClass("tripo_widget_arc_list");
  $(".wp-block-archives").addClass("tripo_widget_arc_list list-unstyled");

  /* widget_recent_entries class addition */
  $(".widget_recent_entries ul").addClass(
    "sidebar__category-list list-unstyled"
  );

  /* taglist class addition */
  $(".tagcloud").addClass("sidebar__tags-list");
  $(".wp-block-tag-cloud").addClass("sidebar__tags-list");
  $(".tagcloud a").removeAttr("style");

  /* Search class addition */
  $(".widget_search").addClass("sidebar__single sidebar__search");
  $(".sidebar__single.sidebar__search .sidebar__title").remove();

  /* Widget Archive class addition */
  $(".widget_archive ul").addClass("sidebar__category-list list-unstyled");

  /* Widget Rss class addition */
  $(".widget_rss ul").addClass("list-unstyled");
  $("<hr>").insertAfter(".widget_rss ul li");
  $("<br>").insertBefore(".rss-date");

  /* widget_recent_comments class addition */
  $(".widget_recent_comments").addClass("tripo_widget_recent_comments");
  $(".widget_recent_comments ul").addClass("list-unstyled");
  $("<hr>").insertBefore(".widget_recent_comments ul li");
  $("<br>").insertAfter(".url");

  /* meta widget class addition */
  $(".widget_meta ul").addClass("sidebar__category-list list-unstyled");

  /* Blog Page Pagination class addition */
  $(".blogpagination .nav-links").addClass("post-pagination");

  /* Blog Page Pagination change default [span] to [a] tag addition */
  $(".blogpagination .nav-links span").each(function () {
    $(this).replaceWith(
      $('<a class="active" href="#">' + this.innerHTML + "</a>")
    );
  });

  /* Pagination H2 tag remove */
  $(".blogpagination h2").remove();

  /* Media Widget Padding None */
  var all = document.getElementsByClassName("widget_media_image");
  for (var i = 0; i < all.length; i++) {
    all[i].style.padding = "0";
  }
  var all = document.getElementsByClassName("image");
  for (var i = 0; i < all.length; i++) {
    all[i].style.width = "100%";
  }

  /*
=====================
Contact Form 7 Desing
=====================
*/
  /* Div class addition */
  $(".wpcf7").addClass("contact-one__form ");

  $(".wpcf7-form").addClass("row low-gutters");

  $(".wpcf7-form-control-wrap").addClass("input-group");

  $(".wpcf7-form p").addClass("input-group");

  $(".wpcf7-submit").addClass("thm-btn contact-one__btn");

  $(".wpcf7-form-control-wrap").addClass("input-group");

  var ajaxurl = ajax_obj.ajax_url;
  var tripo_nonce = ajax_obj.tripo_nonce;
  function searchPosts() {
    var chkArray = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".tripo_category:checked").each(function () {
      chkArray.push($(this).val());
    });
    var tripo_category;
    tripo_category = chkArray.join(",");

    var chkArrayR = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".tripo_ratting:checked").each(function () {
      chkArrayR.push($(this).val());
    });
    var tripo_ratting;
    tripo_ratting = chkArrayR.join(",");

    var chkArrayD = [];
    // Look for all checkboxes that have a specific class and was checked
    $(".time_duration:checked").each(function () {
      chkArrayD.push($(this).val());
    });
    var tripo_duration;
    tripo_duration = chkArrayD.join(",");

    reviewrat = $("input[name='rattingreview']:checked").val();
    var paged = $(".ajax_page_number").text();

    return $.post(ajaxurl, {
      action: "tripo_adv_search",
      paged: paged,
      tripo_nonce: tripo_nonce,
      tour_location: $("#tour_location").val(),
      when: $(".when").val(),
      tourtype: $("#tourtype").val(),
      pric_start: $("#min-val").val(),
      pric_end: $("#max-val").val(),
      sort_by_order: $("#sort-by").val(),
      tripo_category: tripo_category,
      reviewrat: reviewrat,
      tripo_ratting: tripo_ratting,
      tripo_duration: tripo_duration,
      beforeSend: function (xhr) {
        $("#l_loop_item").html("Loading...");
      },
    })
      .done(function (s) {
        $("#l_loop_item").html(s);
        $(".blogpagination").remove();
      })
      .always(function () {});
  }

  $("#tour_location").on("keyup", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".when").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#tourtype").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#sort-by").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#search_button").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#filter_button").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".reviewrat").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".tripo_category:checkbox").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $(".time_duration:checkbox").on("change", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  $("#range-slider-price").on("click", function (e) {
    e.preventDefault();
    // Run AJAX search.
    searchPosts(this);
  });

  jQuery(document).on("click", ".blogpagination_ajax a", function (e) {
    e.preventDefault();
    var paged = /[\?&]paged=(\d+)/.test(this.href) && RegExp.$1;
    $(".ajax_page_number").text(paged);
    searchPosts();
  });
})(jQuery);
