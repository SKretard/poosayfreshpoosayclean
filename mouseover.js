document.getElementById("item").addEventListener("mouseover", mouseOver);
function mouseOver() {
    document.getElementById("item").classList.add('active1');
    document.getElementById("item2").classList.remove('active1');
    document.getElementById("item3").classList.remove('active1');
    document.getElementById('img1').classList.add('active0');
    document.getElementById('img2').classList.remove('active0');
    document.getElementById('img3').classList.remove('active0');
    document.getElementById('des1').style.display = "block";
    document.getElementById('des2').style.display = "none";
    document.getElementById('des3').style.display = "none";
}


document.getElementById("item2").addEventListener("mouseover", mouseOver2);
function mouseOver2() {
    document.getElementById("item2").classList.add('active1');
    document.getElementById("item").classList.remove('active1');
    document.getElementById("item3").classList.remove('active1');
    document.getElementById('img1').classList.remove('active0');
    document.getElementById('img2').classList.add('active0');
    document.getElementById('img3').classList.remove('active0');
    document.getElementById('des1').style.display = "none";
    document.getElementById('des2').style.display = "block";
    document.getElementById('des3').style.display = "none";

}


document.getElementById("item3").addEventListener("mouseover", mouseOver3);
function mouseOver3() {
    document.getElementById("item3").classList.add('active1');
    document.getElementById("item").classList.remove('active1');
    document.getElementById("item2").classList.remove('active1');
    document.getElementById('img1').classList.remove('active0');
    document.getElementById('img2').classList.remove('active0');
    document.getElementById('img3').classList.add('active0');
    document.getElementById('des1').style.display = "none";
    document.getElementById('des2').style.display = "none";
    document.getElementById('des3').style.display = "block";
}

