(function () {

// Declare app level module which depends on views, and components
    var app = angular.module('myApp', []);

    app.controller('ControlsController', function () {


        this.stage = stage;
        this.renderer = renderer;

        document.body.appendChild(this.renderer.view);

        requestAnimationFrame(animate);
        console.log(this.stage);
        // create a texture from an image path
        var texture = PIXI.Texture.fromImage("ressources/bunny.png");
        // create a new Sprite using the texture
        var bunny = new PIXI.Sprite(texture);

        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // move the sprite t the center of the screen
        bunny.position.x = 200;
        bunny.position.y = 150;

        bunny.scale.x = 2;
        bunny.scale.y = 2;


        stage.addChild(bunny);

        function animate() {

            requestAnimationFrame(animate);

            // Place your animation code between here...
            bunny.rotation += 0.1;
            // ...and here

            renderer.render(stage);
        }
        // Here is your controls
        this.functions = [
            {
                /**
                 * @var string name
                 * Name of your variable(s) control
                 */
                name: "myExample",
                /**
                 * @param value
                 * Function that change something in your render with value
                 */
                onChange: function(value){
                    console.log(value);
                }

            }
        ]


    });

    // - Pixi Initialization -
    // Pixi stage creation
    var stage = new PIXI.Stage(0x66FF99);

    // Renderer creation
    var renderer = PIXI.autoDetectRenderer(400, 300);




})();