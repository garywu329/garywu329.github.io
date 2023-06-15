let Index = 1;
Slides(Index);

function nextSlide(n){
    Slides(Index += n);
}

function previousSlide(n){
    Slides(Index -= n);
}

function Slides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElement("caption");
    //Checking max
    if(n > slides.length)
    {
        Index = 1;
    }
    //Making sure its always above 1
    if(n < 1)
    {
        index = slides.length;
    }

    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[Index -1].style.display = "block";
    dots[Index - 1].className += " active";
}

function displayImages(){
    var images = '.Images/china2023';

    if(images){
        for(var i = 0, f; f=files[i];i++){
            var r = new FileReader();
            r.onload = (function(f)
            
            )
        }
    }
}