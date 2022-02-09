const restaurantData = [
	{
		id: "ChIJa0ULuUBcVFMRjhzFvzz2TcY",
		name: "Mitchell's Restaurant",
		address: "615 E Iona Rd, Idaho Falls",
		phone: "(208) 525-8834",
		type: ["American", "Burgers", "Fries", "Steak"],
		rating: 0,
		price_range: "$",
		image: "http://tny.im/rdJ",
		website: "https://www.mitchellsrestaurant-idaho.com/",
	},
	{
		id: "ChIJ29XF91lZVFMRG7NDlAMBiT8",
		name: "Applebee's Grill + Bar",
		address: "635 N Utah Ave, Idaho Falls",
		phone: "(208) 528-8985",
		type: ["American", "Chicken", "Pasta", "Burgers", "Riblets"],
		rating: 0,
		price_range: "$$",
		image: "http://tny.im/rdI",
		website:
			"https://restaurants.applebees.com/en-us/id/idaho-falls/635-n.-utah-avenue-84069?utm_source=google&utm_medium=organic&utm_campaign=google_my_business&utm_term=84069&utm_content=website",
	},
	{
		id: "ChIJI-Jtdt5eVFMRdvBaemkVIfo",
		name: "Perkins Restaurant & Bakery",
		address: "2000 Channing Way, Idaho Falls",
		phone: "(208) 529-9955",
		type: ["American", "Chicken", "Burgers", "Desserts", "Bakery"],
		rating: 0,
		price_range: "$$",
		image: "http://tny.im/rdK",
		website:
			"https://www.perkinsrestaurants.com/locations/us/id/idaho-falls/2000-channing-way/",
	},
	{
		id: "ChIJpQALwS1cVFMREJxLQ9Fbsnc",
		name: "Hardy's Pub & Grill",
		address: "2626 N Yellowstone Hwy #1752, Idaho Falls",
		phone: "(208) 525-9705",
		type: ["Burgers", "Grill"],
		rating: 0,
		price_range: "$",
		image: "http://tny.im/rdL",
		website:
			"https://www.restaurantji.com/id/idaho-falls/hardys-pub-and-grill-/",
	},
	{
		id: "ChIJKz1zk09ZVFMR4MfROGa6ces",
		name: "The Dogfather",
		address: "362 Park Ave, Idaho Falls",
		phone: "(208) 201-0433",
		type: ["Hot Dogs"],
		rating: 0,
		price_range: "$",
		image: "http://tny.im/rdM",
		website: "https://dogfatherhotdogcart.com/",
	},
	{
		id: "ChIJS2NHy0ZbVFMRapJLmI6YPRk",
		name: "Park Avenue Grill",
		address: "1480 Fremont Ave, Idaho Falls",
		phone: "(208) 709-4089",
		type: ["Mexican"],
		rating: 0,
		price_range: "$",
		image: "http://tny.im/rdN",
		website: "https://www.facebook.com/ParkAvenueGrillIF/",
	},
	{
		id: "ChIJj0lOeFpZVFMRxBkXDvTdwlg",
		name: "Copper Rill Restaurant",
		address: "415 River Pkwy, Idaho Falls",
		phone: "(208) 529-5800",
		type: ["American", "Desserts"],
		rating: 0,
		price_range: "$$",
		image:
			"https://media-cdn.tripadvisor.com/media/photo-s/04/92/0c/ba/copper-rill-restaurant.jpg",
		website: "http://www.copperrill.com/",
	},
	{
		id: "ChIJh98ywE9ZVFMRGKiDe0MYHSo",
		name: "The Diablas Kitchen",
		address: "525 River Pkwy, Idaho Falls",
		phone: "(208) 522-1510",
		type: ["American", "Burgers", "Sandwiches"],
		rating: 0,
		price_range: "$$",
		image: "http://tny.im/rdP",
		website: "http://diablaskitchen.com/",
	},
	{
		id: "ChIJVduI915ZVFMRfaJBoBs4eOs",
		name: "O'Brady's Family Restaurant",
		address: "1438 W Broadway St #2636, Idaho Falls",
		phone: "(208) 523-2132",
		type: ["American", "Burgers", "Steak"],
		rating: 0,
		price_range: "$",
		image:
			"https://media-cdn.tripadvisor.com/media/photo-s/06/91/d7/8d/interior.jpg",
		website: "https://www.obradysif.com/",
	},
	{
		id: "ChIJVzsE61pZVFMRaFScWw8mV0s",
		name: "Jalisco's Mexican Restaurant",
		address: "325 River Pkwy, Idaho Falls",
		phone: "(208) 612-0102",
		type: ["Mexican"],
		rating: 0,
		price_range: "$$",
		image:
			"https://media-cdn.tripadvisor.com/media/photo-s/05/d3/20/24/jalisco-s.jpg",
		website: "https://www.jaliscosmexicanrestaurants.com/",
	},
	{
		id: "ChIJQTqPmvlZVFMRwXs2ZKv6zTo",
		name: "Smokin Fins Idaho Falls",
		address: "370 Memorial Dr, Idaho Falls",
		phone: "(208) 888-3467",
		type: ["Asian", "Seafood", "Sushi", "Grill"],
		rating: 0,
		price_range: "$$",
		image: "http://www.idahofallsmagazine.com/Images/gallery/4715_1600.jpg",
		website:
			"https://www.smokinfinsrestaurant.com/bestidahofallsseafoodrestauant",
	},
	{
		id: "ChIJi0R_zEhZVFMRZ2TJxyZ8_KU",
		name: "Arugula Deli",
		address: "261 Walnut St, Idaho Falls",
		phone: "(208) 656-7784",
		type: ["Sandwiches", "Salads", "Soups"],
		rating: 0,
		price_range: "$$",
		image:
			"https://s3-assets.eastidahonews.com/wp-content/uploads/2016/08/17125948/MarcelGutierrezArugulaOwner.jpg",
		website: "http://www.aruguladeli.com/index.html",
	},
	{
		id: "ChIJq7CSPv1bVFMRFxJQzYWMUhc",
		name: "The Bee's Knees Pub & Catering Co.",
		address: "850 Lindsay Blvd, Idaho Falls",
		phone: "(208) 524-1669",
		type: ["Salads", "Sandwiches", "Burgers", "Pastas"],
		rating: 0,
		price_range: "$$",
		image:
			"https://s3-assets.eastidahonews.com/wp-content/uploads/2017/02/11074051/BeesKneesHeatherandDevan.jpg",
		website: "https://www.beeskneespub.com/",
	},
	{
		id: "ChIJ3dZk6E9ZVFMR3CnhaR0yk-c",
		name: "The SnakeBite Restaurant",
		address: "401 Park Ave, Idaho Falls",
		phone: "(208) 525-2522",
		type: ["American", "Burgers"],
		rating: 0,
		price_range: "$$",
		image:
			"https://s3-media1.fl.yelpcdn.com/bphoto/ZLoROxTTwVOMTiJIaPKesw/o.jpg",
		website: "https://www.snakebiterestaurant.com/",
	},
	{
		id: "ChIJifIzgudeVFMRHcY8MlzLlw8",
		name: "Jalisco's Mexican Restaurant",
		address: "2107 E 17th St, Idaho Falls",
		phone: "(208) 552-2021",
		type: ["Mexican"],
		rating: 0,
		price_range: "$$",
		image:
			"https://media-cdn.tripadvisor.com/media/photo-s/05/d3/1d/04/jalisco-s-mexican-restaurant.jpg",
		website: "https://www.jaliscosmexicanrestaurants.com/",
	},
	{
		id: "ChIJYSIztCFZVFMRG7rt5Jjh_S8",
		name: "Altavita Restaurant",
		address: "313 Park Ave, Idaho Falls",
		phone: "(208) 258-9407",
		type: ["Sandwiches", "Pizzas", "Empanadas"],
		rating: 0,
		price_range: "$",
		image: "http://www.idahofallsmagazine.com/Images/gallery/3732_1600.jpg",
		website:
			"https://altavita-restaurant.business.site/?utm_source=gmb&utm_medium=referral",
	},
	{
		id: "ChIJC2QPMfBeVFMRwCeXi3rsaCE",
		name: "Agave Grill",
		address: "939 S 25th E STE 101, Ammon",
		phone: "(208) 524-6356",
		type: ["Mexican", "Enchiladas", "Burritos", "Fajitas"],
		rating: 0,
		price_range: "$",
		image:
			"https://storage.googleapis.com/wzukusers/user-20956385/images/56e8b592091fdguveplO/Menu-Molcajete_d400.jpg",
		website: "http://agavegrillif.com/",
	},
	{
		id: "ChIJTR4EfaheVFMRrmlC-phKVIc",
		name: "The Gangplank",
		address: "925 N Holmes Ave, Idaho Falls",
		phone: "(208) 524-1774",
		type: ["Seafood", "Chicken"],
		rating: 0,
		price_range: "$",
		image:
			"http://www.onlyinyourstate.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-09-at-3.18.30-PM.png",
		website: "https://thegangplank.webs.com/",
	},
	{
		id: "ChIJhYVoNFBZVFMRzj7QHyE7BRY",
		name: "Pachanga's",
		address: "435 A St #3616, Idaho Falls",
		phone: "(208) 522-1976",
		type: ["Mexican"],
		rating: 0,
		price_range: "$$",
		image:
			"https://lh3.googleusercontent.com/p/AF1QipMCPsG1VRwGXPDpQZK5SWwZ1yO6WIQHexWnwhqg=s1280-p-no-v1",
		website: "https://pachangas-mexican-restaurant.business.site/",
	},
	{
		id: "ChIJX5OjzfFeVFMRhGRqtVFXUfE",
		name: "The Grille - Breakfast & Lunch",
		address: "939 S 25th E #107, Ammon",
		phone: "(208) 497-0024",
		type: ["American", "Omelettes", "Pancakes"],
		rating: 0,
		price_range: "$",
		image:
			"https://s3-media0.fl.yelpcdn.com/bphoto/yZOIWVsySIRTdh-NBQLzbA/348s.jpg",
		website: "https://www.facebook.com/thegrilleammon/",
	},
];

// use Set() to get all the unique type
let setData = new Set();

restaurantData.forEach((i) => {
	i["type"].forEach((j) => {
		setData.add(j);
	});
});

// convert set to array, so we can sort the data alphabetically
const arrayData = [...setData];

console.log(arrayData.sort());
