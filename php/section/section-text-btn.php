<?php 
    if($page == 'front' && $sectionBtn == 'theWebIntern') {
        $sectionTextBtnTitle = 'What is Web Intern<span>?</span>';
        $sectionTextBtnText = 'All people at some point have to go out and get a job. Taking an internship is a great way to gain knowledge and experience within a field of work and can be great stepping stone into work life…';
        $sectionTextBtnButton = 'Read more about Web Intern';
        $sectionTextBtnLink = '/webIntern/about.php';
    }
    else if($page == 'front' && $sectionBtn == 'guide') {
        $sectionTextBtnTitle = 'Application guide<span>!</span>';
        $sectionTextBtnText = 'Are you unsure how to write a good application?<br>Follow these 8 steps from application to internship.';
        $sectionTextBtnButton = 'Go to the Guide';
        $sectionTextBtnLink = '/webIntern/guide.php';
    }
    else if($page == 'front' && $sectionBtn == 'internshipsPost') {
        $sectionTextBtnTitle = 'All Internships<span>!</span>';
        $sectionTextBtnText = 'Get better overview of all the internships that are out there.';
        $sectionTextBtnButton = 'See more internships ';
        $sectionTextBtnLink = '/webIntern/internships.php';
    }
    else if($page == 'about' && $sectionBtn == 'webIntern') {
        $sectionTextBtnTitle = 'Application guide<span>!</span>';
        $sectionTextBtnText = 'Are you unsure how to write a good application?<br>Follow these 8 steps from application to internship.';
        $sectionTextBtnButton = 'Go to the Guide ';
        $sectionTextBtnLink = '/webIntern/guide.php';
    }
    else {
        $sectionTextBtnTitle = 'Another';
        $sectionTextBtnText = '';
        $sectionTextBtnButton = '';
        $sectionTextBtnLink = '';
    }
?>
<section class="section-text section-watch">
    <div class="section-text-title">
        <h2><?php echo $sectionTextBtnTitle; ?></h2>
    </div>
    <div class="section-text-info">
        <p><?php echo $sectionTextBtnText; ?></p>
        <br>
        <a href="<?php echo $sectionTextBtnLink; ?>">
            <?php echo $sectionTextBtnButton; ?>
            <svg width="24px" height="18px" viewBox="0 0 24 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                    <g id="WebIntern-FrontPage" transform="translate(-868.000000, -927.000000)" stroke="#FF7643" stroke-width="2">
                        <g id="Path" transform="translate(60.000000, 833.000000)">
                            <g id="Group">
                                <g id="Arrow" transform="translate(809.000000, 96.000000)">
                                    <path d="M13.5,0 L21,7.5" id="Line-2"></path>
                                    <path d="M14,14.5 L21,7.5" id="Line-3"></path>
                                    <path d="M0.5,7.5 L19.5,7.5" id="Line"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a>
    </div>
</section>