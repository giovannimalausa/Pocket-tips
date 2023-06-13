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

        <?php 

$args = array( 
    'posts_per_page' => 3, 
    'post_type' => 'post', 
    'post_status' => 'publish' 
);

$my_custom_query = new WP_Query( $args );

var iterator = 0;


if( $my_custom_query->have_posts() ):
    while( $my_custom_query->have_posts() ): 
        $my_custom_query->the_post();

        iterator = iterator + 1;
        
        
        ?>


            <div class="card blue-card cover card-<?php echo iterator?> hidden-card" data-iterator=<?php echo iterator?>>
                <div class="blue-vector vector-wrapper">
                    <img src="res/blue-vector.svg" alt="Blue vector" class="blue-vector vector">
                </div>
            </div>

            <?php the_title()?>

<?php endwhile; endif;>
    

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