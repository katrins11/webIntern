<?php include('php/head.php')?>

    <div class="page" id="front-page">
        <?php include('php/section/header.php')?>

        <?php $page = 'front'; include('php/section/section-header.php')?>

        <?php $page = 'front'; $sectionBtn = 'theWebIntern'; include('php/section/section-text-btn.php')?>

        <?php $page = 'front'; $sectionBtn = 'guide'; include('php/section/section-text-btn.php')?>

        <?php include('php/section/section-frontPosts.php')?>
        <?php include('php/section/pop-up-modal.php')?>

        <?php $page = 'front'; $sectionBtn = 'internshipsPost'; include('php/section/section-text-btn.php')?>

        <?php include('php/section/footer.php')?>
    </div>
    
<?php include('php/foot.php')?>


