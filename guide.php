<?php include('php/head.php')?>

    <div class="page" id="guide-page">
        <?php include('php/section/header.php')?>

        <?php $page = 'guide'; include('php/section/section-header.php')?>

        <div class="steps">
            <?php $page = 'guide'; $sectionText = 'step1'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step2'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step3'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step4'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step5'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step6'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step7'; include('php/section/section-text.php')?>
            <?php $page = 'guide'; $sectionText = 'step8'; include('php/section/section-text.php')?>
        </div>

        <?php include('php/section/footer.php')?>
    </div>

<?php include('php/foot.php')?>