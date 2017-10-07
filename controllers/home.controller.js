exports.index = function(req, res){
	let content = {
		highlight: {
			url: '/assets/images/home/banner/highlight.jpg',
			title: 'Hello'
		},
		thumbnail: [
		{
			url: '/assets/images/home/banner/thumbnail-1.jpg',
			title: 'thumbnail 1'
		},
		{
			url: '/assets/images/home/banner/thumbnail-2.jpg',
			title: 'thumbnail 2'
		},
		{
			url: '/assets/images/home/banner/thumbnail-3.jpg',
			title: 'thumbnail 3'
		},
		{
			url: '/assets/images/home/banner/thumbnail-4.jpg',
			title: 'thumbnail 4'
		}]
	}

	res.render('home.twig', content)
	// let content = {
	// 	banner: [
	// 	{
	// 		id: 1,
	// 		url: '//image/img-1.jpg'
	// 	},
	// 	{
	// 		id: 2,
	// 		url: '//image/img-1.jpg'
	// 	}
	// 	]
	// }
	// res.json(content)
}