import avengers from './images/avengers.png';
import bg from './images/bg.jpg';
import { useEffect, useState } from 'react';


export const getApi = async (link) => {
	let records = {};
	await fetch(link, { //`https://kinopoiskapiunofficial.tech/api/v2.2/films/top`
		method: 'GET',
		headers: {
			'X-API-KEY': '8d38b668-7280-4adc-9ae5-51a133221b26',
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.then(json => records = json)
		.catch(err => console.log('err ' + err))
		return records;
		// const items = await data.json();
		// console.log(items.projects)
		// return items.projects;
}

export const dataLoader = async() => {
	// const data =  await fetch('https://api.kinopoisk.dev/v1.3/movie', {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-API-KEY': 'QJ3M2P9-19R4B7H-GBF24AR-V45GY0M',
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	// 	const items = await data.json();
	// 	return items.docs;
	}



// getTopApi().then(res => console.log(res?.films) )





// const popular = getApi('/api/v2.2/films/top');
// console.log(popular + 'ppp')


// export const DATA = [
// 	{
// 		name: 'Avengers',
// 		logo: avengers,
// 		mainImage: bg,
// 		year: 2019,
// 		limitAge: '12+',
// 		rating: '7.89',
// 		duration: '1h 56min',
// 		description:
// 			'Marvels The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.',
// 		photos: [
// 			'https://d23.com/app/uploads/2019/08/1180w-600h_081319_avengers-endgame-facts-780x440.jpg',
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OtuflE7bMKCV2SqoCqFHmb-wFv3E2iIaFdeay2gpFeb-JZ5rDYYT6I3bnONc9OtU6VQ&usqp=CAU',
// 			'https://images.indianexpress.com/2019/05/avengers-endgame-chris-hemsworth-1200.jpg',
// 			'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/avengers-endgame-1619486515.jpg',
// 			'https://www.gamespot.com/a/uploads/screen_kubrick/1582/15828986/3505175-endgame%20head.jpg',
// 		],
// 		seasons: ['Season 1', 'Season 2', 'Season 3'],
// 		trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
// 	},
// ]

export const DATA = [
	{
		name: 'Avengers',
		alternativeName: 'Avengers',
		id: 75478,
		rate: 5.6,
		mainImage: bg,
		year: 2019,
		genres: ['action', 'боевик', 'комедия'],
		limitAge: '12+',
		rating: '7.89',
		filmLength: '1h 56min',
		shortDescription:
			'Marvels The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.',
		photos: [
			'https://d23.com/app/uploads/2019/08/1180w-600h_081319_avengers-endgame-facts-780x440.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OtuflE7bMKCV2SqoCqFHmb-wFv3E2iIaFdeay2gpFeb-JZ5rDYYT6I3bnONc9OtU6VQ&usqp=CAU',
			'https://images.indianexpress.com/2019/05/avengers-endgame-chris-hemsworth-1200.jpg',
			'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/avengers-endgame-1619486515.jpg',
			'https://www.gamespot.com/a/uploads/screen_kubrick/1582/15828986/3505175-endgame%20head.jpg',
		],
		seasons: ['Season 1', 'Season 2', 'Season 3'],
		trailer: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
	},
	{
		name: 'Brat',
		alternativeName: 'Brat',
		id: 16358,
	
		mainImage: bg,
		year: 2019,
		genres: ['action', 'фантастика', 'комедия'],
		rate: 9.6,
		limitAge: '12+',
		rating: '7.89',
		filmLength: '1h 56min',
		shortDescription:
			'dfghjkjhgfdfghjklnjninvgdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
		photos: [
			'https://d23.com/app/uploads/2019/08/1180w-600h_081319_avengers-endgame-facts-780x440.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OtuflE7bMKCV2SqoCqFHmb-wFv3E2iIaFdeay2gpFeb-JZ5rDYYT6I3bnONc9OtU6VQ&usqp=CAU',
			'https://images.indianexpress.com/2019/05/avengers-endgame-chris-hemsworth-1200.jpg',
			'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/avengers-endgame-1619486515.jpg',
			'https://www.gamespot.com/a/uploads/screen_kubrick/1582/15828986/3505175-endgame%20head.jpg',
		],
		seasons: ['Season 1', 'Season 2', 'Season 3'],
		trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
	},
]



