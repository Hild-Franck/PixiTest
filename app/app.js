(function () {

// Declare app level module which depends on views, and components
    var app = angular.module('myApp', []);

    app.controller('ControlsController', function() {
        var root = this;

        this.argList = {};
        this.methods = [];

        // Initialize controller properties
        this.stage = stage;
        this.renderer = renderer;
        this.animName = 'clockRotate';
        this.funcName = '';
        this.objectCreated = [];


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

        document.body.appendChild(this.renderer.view);

        this.animate = function() {
            requestAnimationFrame(root.animate);
            root.animations[root.animName](bunny);
            renderer.render(stage);
        };

        this.init = function(testObject){
            if(testObject === undefined) {
                console.log('No object defined');
                testObject = {};
            }

            root.methods = getObjectMethods(testObject);

            root.methods.forEach(function(element, index){
                root.argList[element] = getParamNames(testObject[element]);
            });
        };

        this.init(testObject);
        requestAnimationFrame(root.animate);

        // Properties you'll use to customize your controls
        this.rotSpeed = 0.1;

        // Here is your controls
        this.inputControls = [
            {
                /**
                 * @var string name
                 * Name of your variable(s) control
                 */
                name: "speedExample",
                /**
                 * @param value
                 * Function that change something in your render with value
                 */
                onChange: function(value){
                    value /= 1000;
                    root.rotSpeed = value;
                },
                /**
                 * @var string type
                 * Type of the input control
                 */
                type: "range",
                /**
                 * @var int min
                 * Minimum value of the input
                 */
                min: 0,
                /**
                 * @var int max
                 * Maximum value of the input
                 */
                max: 200

            },
            {
                name: "scaleExample",

                onChange: function(value){
                    bunny.scale.x = value;
                    bunny.scale.y = value;
                },

                type: "range",

                min: 0,

                max: 10

            }
        ];

        this.animations = {
            noAnimation: function(){},
            clockRotate: function(object){
                object.rotation += root.rotSpeed;
            },
            invRotate: function(object){
                object.rotation -= root.rotSpeed;
            }
        };

    });
    // - Pixi Initialization -
    // Pixi stage creation
    var stage = new PIXI.Stage(0x66FF99);

    // Renderer creation
    var renderer = PIXI.autoDetectRenderer(400, 300);

    var testObject = PIXI;


})();