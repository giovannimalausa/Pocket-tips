<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pocket-tips</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="barraInAlto">
        <a href="index.html">
            <img src="res/logo/blu.svg" alt="">
        </a>
    </div>

    <div class="wrapper blue-section">
       
        <!-- Blue deck -->

        <div class="fan-out">
            <div class="card blue-card cover card-4 hidden-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>
    
            <div class="card blue-card cover card-5 hidden-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>
    
            <div class="card blue-card cover card-6 hidden-card" id="blue-6">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>

            <div class="card blue-card cover card-0 selected-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
                <div class="face-wrapper">
                    <h1>Titolo della card</h1>
                </div>
            </div>    

            <div class="card blue-card cover card-1 hidden-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>
    
            <div class="card blue-card cover card-2 hidden-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>
    
            <div class="card blue-card cover card-3 hidden-card">
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>
        </div>

    </div>

    <div class="curtain"></div>

    <!-- Anime.js 
    <script src="anime.min.js"></script>
    <script src="anime-javascript.js"></script> 
    -->

    <!-- GREENSOCK -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Flip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Observer.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Draggable.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/EaselPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/MotionPathPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/PixiPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/TextPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/EasePack.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CustomEase.min.js"></script>
    <script src="blue-deck-javascript.js"></script>

    <!--
    CustomBounce.min.js, and CustomWiggle.min.js are Club GreenSock perks which are not available on a CDN. Download them from your GreenSock account and include them locally like this:

    <script src="/[YOUR_DIRECTORY]/CustomBounce.min.js"></script>
    <script src="/[YOUR_DIRECTORY]/CustomWiggle.min.js"></script>

    Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
    -->

</body>
</html>