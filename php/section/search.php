<section class="section-search">
  <div class="top-background"></div>

  <div class="search-field">
      <input type="text" id="filter-input" placeholder="Search for internship ..." type="text">
      <img class="search-icon"src="assets/search.svg" alt="">
  </div>
  <div id="showFilterMenu">
      <h1 class="btn-font"><?php echo $filterHeadline ?></h1>
  </div>
  <?php include('php/section/filter.php')?>

</section>

<div class="section-posts section-watch">
  <div id="noSearchResault">No matching results found</div>
  <div class="section-posts-item" id="resultscontainer"></div>
</div>
