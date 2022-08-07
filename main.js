function preload() {

}
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center();
    cam = createCapture(VIDEO);
    cam.hide();
    cam.size(500, 500);
}
function draw() {
    image(cam, 0, 0, 500, 500);
    fill("red");
}
function save()
{
    save()
}