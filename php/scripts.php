<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

<!-- Header -->
<script src="./js/header.js"></script>

<!-- Intersection Observer-->
<script src="./js/intersection-observer.js"></script>

<?php if(basename($_SERVER['PHP_SELF']) == 'index.php' || basename($_SERVER['PHP_SELF']) == 'internships.php') : ?>
    <!-- Database -->
    <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
    <script src="./js/data.js"></script>

    <!-- OWL -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    
    <!-- PopUp Model -->
    <script src="./js/modaal.min.js"></script>
<?php endif; ?>

<?php if(basename($_SERVER['PHP_SELF']) == 'internships.php') : ?>
    <!-- Search -->
    <script src="./js/mixitup.min.js"></script>
<?php endif; ?>

<!-- ScrollMagic-->
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/TweenMax.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script> 

<!-- Hero -->
<script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js'></script>

<!-- Blob and Menu -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>
<script src="./js/morphSVGPlugin.min.js"></script>
<script src="./js/menu.js"></script>

<script src="./js/script.js"></script>