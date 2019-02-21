<?php 
    if($page == 'front') {
        $sectionHeaderTitle = 'We are the connection between candidates and companies <span>!</span>';
        $sectionHeaderText = 'We have an internship that boosts your career - no matter what level you are at.';
        $sectionHeaderImage = 'http://katrinsig.com/webIntern/images/office-unsplash.jpg';
    }
    else if($page == 'guide') {
        $sectionHeaderTitle = 'Want a bulletproof application? We will GUIDE you through it <span>!</span>';
        $sectionHeaderText = 'When starting to think about application for internship there are many things you need to think about.<br>Take your time to make a good application by following these 8 simple steps.';
        $sectionHeaderImage = 'http://katrinsig.com/webIntern/images/doMore-unsplash.jpg';
    }
    else if($page == 'about') {
        $sectionHeaderTitle = 'We are the connection between candidates and companies <span>!</span>';
        $sectionHeaderText = 'We have an internship that boosts your career - no matter what level you are at.';
        $sectionHeaderImage = 'http://katrinsig.com/webIntern/images/dream-unsplash.jpg';
    }

    else {
        $sectionHeaderTitle = 'Other<span>?</span>';
        $sectionHeaderText = 'Other.';
        $sectionHeaderImage = 'http://katrinsig.com/webIntern/images/office-unsplash.jpg';
    }
?>
<section class="section-title">
    <div class="title-info">
        <div class="title-info-text">
            <h1><?php echo $sectionHeaderTitle; ?></h1>
            <p><?php echo $sectionHeaderTitle; ?></p>
        </div>
    </div>
    <div class="title-info-image">
        <img src="<?php echo $sectionHeaderImage; ?>" alt="front header image">
    </div>
</section>