var current_gallery1 = getElementById('current_gallery_id1');
function fun1() {
	let link = text.link("gallery_sub1.html");
	document.getElementById('gallery_sub').innerHTML = link;
}
current_gallery1.addEventListener("click", fun1());