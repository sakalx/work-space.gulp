
//Modal-img START js
function openModal(id) {
	var modalBin = document.getElementById('js-modal-bin');
	var modalImg = document.getElementById("js-modal-img");
	var img = document.getElementById('js-top__img' + id);
	modalImg.src = img.src;
	modalBin.style.display = 'flex';
	modalBin.className = 'modal-bin a_zoom';
}

function closeModal() {
	var modalBin = document.getElementById('js-modal-bin');
	modalBin.style.display = 'none';
}
//Modal-img END js