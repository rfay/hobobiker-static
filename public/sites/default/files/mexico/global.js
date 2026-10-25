<!--

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		menu_background_over = newImage("images/background-over.jpg");
		menu_route_over = newImage("images/route-over.jpg");
		menu_gear_over = newImage("images/gear-over.jpg");
		menu_journal_over = newImage("images/journal-over.jpg");
		menu_photos_over = newImage("images/photos-over.jpg");
		menu_links_over = newImage("images/links-over.jpg");
		menu_contact_over = newImage("images/contact-over.jpg");
		preloadFlag = true;
	}
}

function preloadPhotoImages() {
    if(document.images){
        menu_previous_over = newImage("images/previous-over.jpg");
        menu_next_over = newImage("images/next-over.jpg");
        menu_start_over = newImage("images/start-over.jpg");
        menu_close_over = newImage("images/close-over.jpg");
        preloadFlag = true;
    }
}

function chooseCountry(form) {
    window.open(form.country_list.value,'country','resizable,width=400,height=400');
}

var newwin;

function launchwin(winurl,winname,winfeatures)
{
	//This launches a new window and then
	//focuses it if window.focus() is supported.
	newwin = window.open(winurl,winname,winfeatures);
	if(javascript_version > 1.0)
	{
		//delay a bit here because IE4 encounters errors
		//when trying to focus a recently opened window
 		setTimeout('newwin.focus();',250);
	}
}

var photowin=null;

function launchphotowin(photourl,phototitle)
{
    photowin = window.open("photo.html","Photo","scrollbars=yes,resizable,width=850,height=650");
    photowin.document.img_photo.src = photourl;
    photowin.document.title = phototitle;
    photowin.document.txt_photo.value="more";
    if(javascript_version > 1.0)
    {
        setTimeout('photowin.focus();',50);
    }
}


var currentPhotoIndex = 0;

function updateOldImage()
{
    image_name = "images/"+(currentPhotoIndex+1)+".jpg";
    document.images[2+currentPhotoIndex].src = image_name;
}

function updateSlideshowImages()
{
    image_name = "images/"+(currentPhotoIndex+1)+"-over.jpg";
    document.images[2+currentPhotoIndex].src = image_name;
    if ( currentPhotoIndex == photoList.length-1 )
    {
        document.img_next.width = 0;
        document.img_next.height = 0;
        document.img_start.width = 76;
        document.img_start.height = 15;
        document.img_previous.width=103;
        document.img_previous.height=15;
    }
    if ( currentPhotoIndex >= 1 && currentPhotoIndex <= photoList.length - 2 )
    {
        document.img_previous.width=103;
        document.img_previous.height=15;
        document.img_start.width = 76;
        document.img_start.height = 15;
        document.img_next.width = 71;
        document.img_next.height = 15;
    }
     if ( currentPhotoIndex == 0 )
    {
        document.img_previous.width = 0;
        document.img_previous.height = 0;
        document.img_start.width = 0;
        document.img_start.height = 0;
        document.img_next.width = 71;
        document.img_next.height = 15;
    }
}

function nextPhoto(photoList)
{
    if ( currentPhotoIndex < (photoList.length-1) )
    {
        currentPhotoIndex = currentPhotoIndex + 1;
    }
    document.photo_frame.location.href = photoList[currentPhotoIndex];
    updateSlideshowImages();
    
}

function previousPhoto(photoList)
{
    if ( currentPhotoIndex > 0 )
    {
        currentPhotoIndex = currentPhotoIndex - 1;
    }
    document.photo_frame.location.href = photoList[currentPhotoIndex];
    updateSlideshowImages();
}

function gotoPhoto(photoList,photoIndex)
{
    currentPhotoIndex = photoIndex;
    document.photo_frame.location.href = photoList[currentPhotoIndex];
    updateSlideshowImages();
}

function nextPhotoPHP(photoList)
{
    updateOldImage();
    if ( currentPhotoIndex < (photoList.length-1) )
    {
        currentPhotoIndex = currentPhotoIndex + 1;
    }
    updateSlideshowImages();
    document.photo_frame.location.href = "photo.php?photo_id="+photoList[currentPhotoIndex];
    
}

function previousPhotoPHP(photoList)
{
    updateOldImage();
    if ( currentPhotoIndex > 0 )
    {
        currentPhotoIndex = currentPhotoIndex - 1;
    }
    updateSlideshowImages();
    document.photo_frame.location.href = "photo.php?photo_id="+photoList[currentPhotoIndex];
}

function gotoPhotoPHP(photoList,photoIndex)
{
    updateOldImage();
    currentPhotoIndex = photoIndex;
    updateSlideshowImages();
    document.photo_frame.location.href = "photo.php?photo_id="+photoList[currentPhotoIndex];
}





