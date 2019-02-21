//**************** FIREBASE *****************//
 var config = {
     apiKey: "AIzaSyBIZI6hbCrbtBaCQ1cwm_B0NP245AAF5KY",
     authDomain: "theintern-95665.firebaseapp.com",
     databaseURL: "https://theintern-95665.firebaseio.com",
     projectId: "theintern-95665",
     storageBucket: "theintern-95665.appspot.com",
     messagingSenderId: "705619967315"
 };

firebase.initializeApp(config);

var database = firebase.database();
var ref = database.ref('post');
ref.on('value', gotData, errData);

function gotData(snapshot) {
    var frontpage = document.getElementById("front-page");
    var internshipPage = document.getElementById("internship-page");
    var compID;
    
    if(frontpage) {
        console.log("Your are on the FrontPage");
        getFrontCardInfo(snapshot);
        popUp(snapshot);
        getPost(snapshot);
    }
    else if(internshipPage) {
        console.log("Your are on the OverviewPage");
        getCardInfo(snapshot);
        popUp(snapshot);
        getPost(snapshot);
    }       
}

function errData(err) {
    console.log("ERROR", err);
}

//**************** FRONTPAGE *** CARDS *****************//
function getFrontCardInfo(snapshot) {
    var companyPosts = document.getElementById("frontPagePosts"),
        numberOfPosts = '',
        i = 0;

    if( screen.width >= 1500 ){ numberOfPosts = 4;}
    else if(screen.width >= 1030) { numberOfPosts = 3;}
    else if(screen.width >= 500) { numberOfPosts = 2; }
    else { numberOfPosts = 1; }

    snapshot.forEach(snap => {
        if(i >= numberOfPosts) { return; }
        var frontCard = '<a class="item inline eachPost" data-companyID="'+snap.val().id+'" style="background-image: url('+snap.val().images[0]+');">\
                            <div class="item-overlay"></div>\
                            <div class="item-title">\
                                <h3>'+snap.val().postTitle+'</h3>\
                                <p>'+snap.val().importantInfo.location+'</p>\
                            </div>\
                            <h4>'+snap.val().companyName+'</h4>\
                        </a>';
        companyPosts.insertAdjacentHTML('beforeend', frontCard);
        i++;
    });
};
function getCardInfo(snapshot) {
    var companyPosts = document.getElementById("resultscontainer");
    snapshot.forEach(snap => {
        var filterItem = '',
        filterItems = '';
        for (var i = 0; i < snap.val().searchFilter.length; i++) {
            filterItem = snap.val().searchFilter[i] + " ";
            filterItems += filterItem;
        }
        var internshipsCard = '<a class="item inline eachPost mix '+filterItems+'" data-companyID="'+snap.val().id+'" style="background-image: url('+snap.val().images[0]+');">\
                                    <div class="item-overlay"></div>\
                                    <div class="item-title">\
                                        <h3>'+snap.val().postTitle+'</h3>\
                                        <p>'+snap.val().importantInfo.location+'</p>\
                                    </div>\
                                    <h4>'+snap.val().companyName+'</h4>\
                                </a>';
        companyPosts.insertAdjacentHTML('beforeend', internshipsCard);
    });

    /* *** search *** */
    let filterInput = document.getElementById('filter-input');
    filterInput.addEventListener('keyup', function() {
        // Get value of input
        let filterValue = document.getElementById('filter-input').value.toLowerCase();
        // Get names from list
        let Allposts = document.getElementById('resultscontainer');
        // Get each item from list
        let postItem = Allposts.querySelectorAll('.eachPost');
        //No result
        var container = document.getElementById('resultscontainer');
        var noResultMessage = document.getElementById('noSearchResault');
        // Loop through list
        for(let i = 0;i < postItem.length;i++){
            let a = postItem[i];
            // If matched
            if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
                postItem[i].style.display = '';
            }
            else {
                postItem[i].style.display = 'none'; 
            }
        }
        //Empty check
        if($('.eachPost:visible').length == 0) {
            noResultMessage.style.display = 'block';
        }
        else {
            noResultMessage.style.display = 'none';
        }
    });

    /* *** Filtering *** */
    var filterClicked = $('.filter');
    var noResultMessage = document.getElementById('noSearchResault');
    
    filterClicked.click(function() {
        $('#filter-input').val('');
        noResultMessage.style.display = 'none';
    });

    var mixer = mixitup(companyPosts);
};

//**************** POST PAGE *****************//
function getPost(snapshot) {
    var allCards = $('.eachPost');

    allCards.click(function() {
        var attrVal = $(this).attr('data-companyid');

        snapshot.forEach(snap => {
            if(snap.val().id == attrVal){
                getHeroData(snap);
                getFirstInfoboxData(snap);
                getSecondInfoboxData(snap);
                getTextBoxData(snap); 
                // getCarouselImg(snap, attrVal);
                getContactBoxData(snap);  
            }
        });
    });
}

//**************** POP-UP MODAL *****************//
function popUp(snapshot) { 
    var eachPost = document.getElementsByClassName("inline");
    
    for (var i = 0; i < eachPost.length; i++) {
        eachPost[i].addEventListener('click', function(e){
            compID = this.dataset.companyid;
            //console.log("compID: ",compID);
            //getCarouselImg(snapshot, compID);
            
            // MODAAL 
            $('.inline').modaal({
                content_source: '#inline'
            });

        });
    }
}

//**************** OWL CAROUSEL *****************//
// function getCarouselImg(snapshot, compID) {
//     var carouselDiv = document.querySelector("#owlCarousel");
//     var carouselImg = '';
//     var carouselImages = '';

//     snapshot.forEach(snap => {
//         console.log("compID in Carousel: ", compID);
//         console.log("snap val in Carousel: ", snap.val().id);
//         if(snap.val().id == compID) {
//             console.log('theSAME');
//             for(var i = 0; i < snap.val().images.length; i++) {
//                 carouselImg = '<div class="item" style="background-image: url('+snap.val().images[i]+')"></div>';
//                 carouselImages += carouselImg;                
//             }
//             // carouselDiv.innerHTML = '';
//             carouselDiv.insertAdjacentHTML('beforeend', carouselImages);
//             console.log(carouselDiv);
//             return true;
//         }
//         console.log('hsdfkjasdfhæasd');
//     });
//     $('.owl-carousel').trigger('refresh.owl.carousel');

//     $('.owl-carousel').owlCarousel({
//         center: true,
//         items: 2,
//         loop: true,
//         nav: true,
//         margin: 40,
//         autoWidth: true,
//         responsiveClass:true
//     });
// };

//* *** *** MODAL... *** *** */
//**************** GET HERO DATA *****************//
function getHeroData(snap) { 
    var heroData = document.getElementById("hero-post-container");
    var htmlHerobox = '<img src='+snap.val().images[0]+' alt="office placholder">\
                        <div class="hero-overlay"></div>\
                        <div class="tag-line">\
                            <h1>'+snap.val().postTitle+'</h1>\
                        </div>';

    heroData.innerHTML = '';
    heroData.insertAdjacentHTML('beforeend', htmlHerobox);
}

//**************** GET FIRST INFORBOX DATA *****************//
function getFirstInfoboxData(snap) { 
    var infoboxData = document.getElementById("first-infobox-container");

    var htmlInfobox = '<div class="info">\
                            <h2 class="info-headline">'+snap.val().importantInfo.deadline+'</h2>\
                            <p class="info-text">Deadline</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().importantInfo.duration+'</h2>\
                            <p class="info-text">Duration</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().importantInfo.location+'</h2>\
                            <p class="info-text">Location</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().importantInfo.created+'</h2>\
                            <p class="info-text">Created</p>\
                        </div>';
    infoboxData.innerHTML = '';
    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET SECOND INFORBOX DATA *****************//
function getSecondInfoboxData(snap) { 
    var infoboxData = document.getElementById("second-infobox-container");

    var htmlInfobox = '<div class="info">\
                            <h2 class="info-headline">'+snap.val().statisticInfo.employees+'</h2>\
                            <p class="info-text">Employees</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().statisticInfo.clients+'</h2>\
                            <p class="info-text">Clients</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().statisticInfo.projects+'</h2>\
                            <p class="info-text">Projects</p>\
                        </div>\
                        <div class="info">\
                            <h2 class="info-headline">'+snap.val().statisticInfo.companyAge+'</h2>\
                            <p class="info-text">Years in the field</p>\
                        </div>';
    infoboxData.innerHTML = '';
    infoboxData.insertAdjacentHTML('beforeend', htmlInfobox);
}

//**************** GET TEXT DATA *****************//
function getTextBoxData(snap) { 
    // ABOUT
    var aboutUsText = document.getElementById("about-us");
    var htmlAboutUs = '<p>'+snap.val().internshipText.aboutUs+'</p>';
    aboutUsText.innerHTML = '';
    aboutUsText.insertAdjacentHTML('beforeend', htmlAboutUs);

    // INTRODUCTION
    var introductionText = document.getElementById("introduction");
    var htmlIntroduction = '<p>'+snap.val().internshipText.introduction+'</p>';
    introductionText.innerHTML = '';
    introductionText.insertAdjacentHTML('beforeend', htmlIntroduction);

    // YOUR PROFILE
    var yourProfileText = document.getElementById("your-profile");
    var htmlYourProfile = '<p>'+snap.val().internshipText.yourProfile+'</p>';
    yourProfileText.innerHTML = '';
    yourProfileText.insertAdjacentHTML('beforeend', htmlYourProfile);

    // TOOLS & TASKS
    var toolsTasksText = document.getElementById("tasks-tools");
    var htmlToolsTasks = '';
    var finalHtmlToolsTasks = '';

    for(var i = 0; i < snap.val().internshipText.toolsTasks.length; i++) {
        htmlToolsTasks = '<li>'+snap.val().internshipText.toolsTasks[i]+'</li>';
        finalHtmlToolsTasks += htmlToolsTasks;
    }
    toolsTasksText.innerHTML = '';
    toolsTasksText.insertAdjacentHTML('beforeend', finalHtmlToolsTasks);
}

//**************** GET CONTACT DATA *****************//
function getContactBoxData(snap) { 
    // GET INTERESTED TEXT
    var interestedText = document.getElementById("interested");
    var htmlInterested = '<p>'+snap.val().contact.interested+'</p>';
    interestedText.insertAdjacentHTML('beforeend', htmlInterested);

    var emailUs = document.getElementById("sendEmail");
    var htmlEmailUs = '<a class="btn-inverted" href="mailto:'+snap.val().contact.contactInfo.email+'">\
                            <p>Email us</p>\
                        </a>';
    emailUs.innerHTML = '';
    emailUs.insertAdjacentHTML('beforeend', htmlEmailUs);

    // GET CONTACT LIST
    var contactInfoText = document.getElementById("contact");
    var htmlContactInfo = '<ul>\
                                <li>\
                                    <img src="assets/mail.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.email+'</span>\
                                </li>\
                                <li>\
                                    <img src="assets/phone.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.phoneNumber+'</span>\
                                </li>\
                                <li>\
                                    <img src="assets/location.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.address+'</span>\
                                </li>\
                                <li>\
                                    <img src="assets/web.svg" alt="">\
                                    <span>'+snap.val().contact.contactInfo.website+'</span>\
                                </li>\
                            </ul>\
                            <ul>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.facebook+'" class="fa fa-facebook">\
                                        <img src="assets/facebook.svg" alt="">\
                                        <span>Facebook</span>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.instagram+'" class="fa fa-facebook">\
                                        <img src="assets/instagram.svg" alt="">\
                                        <span>Instagram</span>\
                                    </a>\
                                </li>\
                                <li>\
                                    <a href="'+snap.val().contact.contactInfo.linkedIn+'" class="fa fa-facebook">\
                                        <img src="assets/linkedin.svg" alt="">\
                                        <span>LinkedIn</span>\
                                    </a>\
                                </li>\
                            </ul>';
    contactInfoText.innerHTML = '';
    contactInfoText.insertAdjacentHTML('beforeend', htmlContactInfo);
}