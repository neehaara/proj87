var canvas=new fabric.Canvas("myCanvas");

x=10;
y=10;

function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        image=Img;
        image.scaleToWidth(image_x);
        image.scaleToHeight(image_y);
        image.set({
            top:y,
            left:x
        });
        canvas.add(image);
    });
}

image_x=500;
image_y=200;

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="82"){
        new_image("agni.jpg")
        console.log("r was pressed. agni the red crewmate has been added");
}

if(keyPressed=="71"){
    x=200;
    
    new_image("juvenile.jpg")
    console.log("g was pressed. juvenile the green crewmate has been added");
}

if(keyPressed=="89"){
    x=450;
    
    new_image("happy.png")
    console.log("y was pressed. happy the yellow crewmate has been added");
}

if(keyPressed=="66"){
    x=200;
    y=275;
    
    new_image("aman.jpg")
    console.log("b was pressed. aman the blue IMPOSTER has been added");
}

if(keyPressed=="80"){
    x=400;
    y=300;
    new_image("amity.png")
    console.log("p was pressed. amity the pink crewmate has been added");
}
}