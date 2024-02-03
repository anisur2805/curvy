window.onload = function () {
	const galleries = Array.from(
		document.getElementsByClassName("wp-block-create-block-piccy-gallery"),
	);

	galleries.forEach((gallery) => {
		const thumbnails = Array.from(
			gallery.getElementsByClassName("piccy-gallery-thumb"),
		);

		if (thumbnails?.[0]) {
			thumbnails[0].classList.add("selected");

            const imagePreview = Array.from(gallery.getElementsByClassName("piccy-gallery-image-preview"))
            imagePreview[0].src = thumbnails[0].dataset.largeSize
		}

		thumbnails.forEach((thumbnail) => {

			thumbnail.addEventListener("click", function () {

				const selected = Array.from(
					gallery.getElementsByClassName("piccy-gallery-thumb selected"),
				);
				selected.forEach((thumb) => {
					thumb.classList.remove("selected");
				});
				thumbnail.classList.add("selected");
                const imagePreview = Array.from(gallery.getElementsByClassName("piccy-gallery-image-preview"))
            imagePreview[0].src = thumbnail.dataset.largeSize
            console.log( {thumbnail} )
			});
		});
	});
};
