(function () {

// Declare app level module which depends on views, and components
    var app = angular.module('myApp', []);

    app.controller('ControlsController', ['$scope', function ($scope) {

        var root = this;
        this.stage = stage;
        this.renderer = renderer;

        this.function = 'clockRotate';

        this.rotSpeed = 0.1;

        $scope.form.type = $scope.typeOptions[0].value;

        this.animation = {
            clockRotate: function(object){
                object.rotation += root.rotSpeed;
            },
            invRotate: function(object){
                object.rotation -= root.rotSpeed;
            }
        };

        var poulet = 'clockRotate';

        this.animate = function() {

            requestAnimationFrame(root.animate);

            // Place your animation code between here...
            //bunny.rotation += root.rotSpeed;
            root.animation[poulet](bunny);
            // ...and here

            renderer.render(stage);
        };

        document.body.appendChild(this.renderer.view);

        requestAnimationFrame(root.animate);
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
                    value /= 1000;
                    root.rotSpeed = value;
                    console.log(root.rotSpeed);
                }

            }
        ];

        $scope.setAnimation = {
            animation: function(animation){
                return arguments.length ? (poulet = animation) :animation;
            }
        }


    }]);

    // - Pixi Initialization -
    // Pixi stage creation
    var stage = new PIXI.Stage(0x66FF99);

    // Renderer creation
    var renderer = PIXI.autoDetectRenderer(400, 300);




})();