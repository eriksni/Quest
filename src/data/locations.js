export const locations = [
	{
		distance: "980 m",
    name: 'Lustiga Huset',
		provider: 'Gröna Lund',
		countdown: new Date("2017-12-31"),
    place:  'Gröna Lund',
		image: 'https://i.imgur.com/6kpBgPB.jpg',
		coords: { lat: 59.323376, long: 18.096395 },
		playable: 1,
		about: "Experience the joyful and magical world of Gröna Lund, Stockholm´s amusement park. A day spent at Gröna Lund is a memorable one, whether you dine in one of the restaurants, enjoy a pentathlon, a live concert or one of the 30 exciting rides. Gröna Lund is open from late spring (April/March) to September.",
		// Questions format: [[Question][Answer1, Answer2, ..., AnswerK], CorrectAnswer]
		questions: 
		[
			["Vad är Gröna Lund?",["En Djurpark","Sveriges bästa nöjesfält", "En sagofigur"], 2], 
			["Vart ligger Gröna Lund?",["Djurgården","Södermalm", "Kungsholmen"], 1], 
			["Hur många besökare har Gröna Lund varje år?",["1,000,000","10,000,000", "100,000,000"], 2],
		],
		rewards: ["Master Chest", "Tomorrow event Ticket", "30% Discount", "120 points", "1.2k"],
	},
	{
		distance: "980 m",
    name: 'Sightseeing',
		provider: 'Ocean Bus',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Strömgatan',
		image: 'https://i.imgur.com/swWillV.jpg',
		coords: { lat: 59.329592, long: 18.070607 },
		playable: 0,
		about: "Ocean Bus är ett nytt och alldeles unikt inslag bland Stockholms sightseeingturer. Ombord på amfibiebussen får du en guidad tur av några av stans största sevärdheter, både på land och från vattnet. Turerna startar på Strömgatan vid Kungliga Operan. ",
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'Takvandring',
		provider: 'Takvandring',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Munkbron',
		image: 'https://i.imgur.com/V14C7ma.jpg',
		coords: { lat: 59.325312, long: 18.066684 },
		playable: 1,
		about: "Ta chansen och upplev Stockholm från takåsarna på guidade turer, väl förankrad i säkerhetssystem. En unik kombination av klättring och sightseeing för dig som inte är höjdrädd.",
		rewards: [],

	},
	{
		distance: "980 m",
    name: 'Paddling',
		provider: 'Paddling co',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Brunnsviken',
		image: 'https://i.imgur.com/5sDHCIm.jpg',
		coords: { lat: 59.368118, long: 18.038994 },
		playable: 0,
		about: "Hyr kanot eller kajak och paddla i Ekoparken förbi slott och vackra parkområden. Öppet dagligen under juni-augusti. Förboka för paddling under maj och september.",
		rewards: [],

	},
	{
		distance: "980 m",
    name: 'Häng med Knugen',
		provider: 'Kungahuset',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Drottningholm',
		image: 'https://i.imgur.com/22eCOsI.jpg',
		coords: { lat: 59.321807, long: 17.886814 },
		playable: 0,
		about: "Take a day trip to Drottningholm and experience a historic milieu of the highest standard. Drottningholm Palace is Sweden's best preserved royal palace constructed in the seventeenth century, the permanent residence of the royal family and one of Stockholm's three World Heritage Sites.",
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'Matlagningskurs',
		provider: 'Cajsa Warg',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'St Eriksplan',
		image: 'https://i.imgur.com/tgk3Iid.jpg',
		coords: { lat: 59.339975, long: 18.038254 },
		playable: 1,
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'SkyView',
		provider: 'Globen',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Globen',
		image: 'https://i.imgur.com/zTEPMW0.jpg',
		coords: { lat: 59.293556, long: 18.083561 },
		playable: 0,
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'Statue Selfie',
		provider: 'Dramaten',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Dramaten',
		image: 'https://i.imgur.com/2GqdXRf.jpg',
		coords: { lat: 59.333184, long: 18.076914 },
		playable: 1,
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'Käka pissdyrmiddag',
		provider: 'Kaknästornet',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Kaknästornet',
		image: 'https://i.imgur.com/LpnUZo5.jpg',
		coords: { lat: 59.335011, long: 18.126400 },
		playable: 0,
		rewards: [],
	},
	{
		distance: "980 m",
    name: 'Bondens Marknad',
		provider: 'Hipsters',
		countdown: new Date().getTime() + 1000 * 100000,
    place:  'Katarina Bangata',
		image: 'https://i.imgur.com/KXi7v8s.jpg',
		coords: { lat: 59.310336, long: 18.084300 },
		playable: 0,
		rewards: [],
	},
]
