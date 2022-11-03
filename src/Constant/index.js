import AboutUs from '../Components/Main/AboutUs';
import Rental from '../Components/Main/RentalPage/Rental';
import DeliveryRules from '../Components/Main/DeliveryRules';
import PlaceForRide from '../Components/Main/PlaceForRide';
import Contacts from '../Components/Main/Contacts';
import Rules from '../Components/Main/Rules';
import RentalRequest from '../Components/Main/RentalPage/RentalRequest'

export const navbar = [
   {
      id: 'aboutus',
      title: 'AboutUs'
   },
   {
      id: 'rental',
      title: 'Rental'
   },
   {
      id: 'delivery',
      title: 'Delivery'
   },
   {
      id: 'placeforride',
      title: 'Place for ride'
   },
   {
      id: 'contacts',
      title: 'Contacts'
   },
]

export const navbarMedium = [];

navbar.map(item => {
   if (item.id === 'rental' || item.id === 'delivery') {
      navbarMedium.push(item);
   }
})

export const profile = [
   {
      id: 'profile',
      title: 'Profile'
   }
]
// Routers

export const pagesRoutes = [
   
   { path: '/aboutus', element: <AboutUs/>, exact: true },
   { path: '/rental', element: <Rental/>, exact: true },
   { path: '/delivery-rules', element: <DeliveryRules />, exact: true },
   { path: '/placeforride', element: <PlaceForRide />, exact: true },
   { path: '/contacts', element: <Contacts />, exact: true },
   { path: '/rules', element: <Rules />, exact: true },
   { path: '/rental/request', element: <RentalRequest />, exact: true },
   { path: '/', element: <Rental/>, exact: true },
]

export const pagesRoutesMedium = [];

pagesRoutes.map(item => {
   if (item.path === '/rental' || item.path === '/delivery-rules') {
      pagesRoutesMedium.push(item);
   }
})

export const rentalRequestRoute = [
   {path: '/rental/request', element: <RentalRequest/>, exact: true },
]

//Footer navbar
export const footerNavbar = [
   {
      id: 'rules',
      title: 'Rules'
   },
   {
      id: 'aboutus',
      title: 'Reviews'
   },
   {
      id: 'contacts',
      title: 'Contacts'
   },
]

export const footerRoutes = [
   { path: '/delivery-rules', element: <DeliveryRules/>, exact: true },
   { path: '/aboutus', element: <AboutUs/>, exact: true },
   { path: '/contacts', element: <Contacts />, exact: true },
]

//Feedbacks

export const clientFeedbacks = [
   {
      id: 'feedback-1',
      name: 'Alex',
      text: 'The Camino has been a real great experience that I shall remember forever. I was more rapid than I thought, thanks to your bike that was really suitable for the Camino: strong enough to afford the paths and light and fast on the roads. I hope the next year to rent a bike for a trip in Portugal. Ciao and many thanks again',
   },
   {
      id: 'feedback-2',
      name: 'Anna',
      text: 'We had great rides yesterday and today, esp on the high road along the coast, with the climbing and the awesome view. It was simply the best ride we\'ve ever done.',
   },
   {
      id: 'feedback-3',
      name: 'Ivan',
      text: 'Arrival on time, Bike was new and in very good shape, selected trial couldn\'t be better, places we visited were great, my best recommendation for the experience.',
   },
   {
      id: 'feedback-4',
      name: 'Vika',
      text: 'Thanks again for all the help pulling together the bike ride. You were key to making it happen, and resulted in a nice holiday for me. It was a wonderful ride...Thanks again!',
   },
   {
      id: 'feedback-5',
      name: 'Denys',
      text: 'Thanks for an amazing trip. The bike was top grade and so was the ride down the blue coast ... See you next year!',
   },
   {
      id: 'feedback-6',
      name: 'Maria',
      text: 'Back at work today and so sad its all over. Just been looking over the photos - amazing! The bikes were perfect! Thank you! We were so grateful. Really amazing service.',
   },
]

//Rulles

export const rules = [
   {
      title: 'Type of bike',
      text: 'There are a wide variety of different bikes that you can rent depending on your preferences and needs. The main kinds of bikes that you can rent are: Road bicycles, city bikes, cruiser bicycles, and hybrid bicycles.',
   },
   {
      title: 'Sizing of bike',
      text: 'When renting a bike, it’s important to know that you are renting the right size. Here are the basics: The bike size is measured from the crank to where the seat post starts. Using a bike size chart will likely come in handy and will help you decide what size bike to rent so you can ride in comfort. The bike rental attendant at the rental shop will also be able to help with measurements and finding a bicycle that’s the proper size.',
   },
   {
      title: 'Weather',
      text: 'Another important thing to do before renting a bike for a cycling adventure is to check the weather. Austin pretty hot and dry year round, so the weather will likely not be a problem, but it’s always a good idea to check.',
   },
   {
      title: 'Bike Routes',
      text: 'There are many routes and maps for bicycling and there are many roads with bike lanes. Almost any bike rental shop will likely have a map of bike routes that you can take around the city. ',
   },
   {
      title: 'Bicycle Parking',
      text: 'There are hundreds of bike racks installed for public use around the City. Bicycles are a great alternative to driving as you can zip around town without having to worry about parking.',
   },
   {
      title: 'Know How to Stay Safe',
      text: 'Before renting a bike, make sure you’re familiar with biking rules and regulations and how to stay safe while riding around town. Some of the more obvious and more important things to note include: wear a helmet, ride your bike in the same direction as traffic, know your hand signals, and make sure your bike has proper lights if you plan on riding at night.',
   },
   {
      title: 'Payment',
      text: 'Payment may differ depending on the rental company, but most bikes can be paid for with a card and charge an hourly or daily fee. Memberships typically include 60-minute rides or you can choose a 24-hour option.',
   },
   {
      title: 'Biking with Kids',
      text: 'Biking with kids may prove to be challenge in terms of bike rentals, since most bike rental stations only provide one size adult bikes. However, some bike rental shops may have more models and sizes available. Another option is to ask for an attachable kids seat when you rent your bike, this avoids the need to rent an additional bike.',
   },
   {
      title: 'Treat the Rental Bike Like Your Own',
      text: 'Avoid paying extra fees for repairing a damaged rental bike by taking extra care when riding it. Remember to always: yield to pedestrians, stay off the sidewalk, obey traffic lights, and ride in the same direction as traffic. Follow these simple rules while riding your rental bicycle to avoid damage to yourself and the bike, and ensure a happy rental experience.',
   },
]

//Options of selects

export const deliveryPlace = ['By the address', 'Pickup delivery'];

// Bikes

export const typeOfBikes = [
   {
      id: 'aluminium',
      frameType: 'Road Bike(Aluminium)',
      price: '50+ USD',
      picture: 'bike-aluminium-label.png',
      description: 'Aluminium is providing a combination of low weight, stiffness and affordability that’s hard to beat.',
   },
   {
      id: 'carbon',
      frameType: 'Road Bike(Carbon)',
      price: '70+ USD',
      picture: 'bike-carbon-label.png',
      description: "Carbon fibre's high strength-to-weight ratio makes it extremely attractive as a material for bike frames",
   },
   {
      id: 'city',
      frameType: 'City Bike',
      price: '30+ USD',
      picture: 'bike-city-label.png',
      description: 'A city bike, is a type of bike used for trips in urban areas. City bikes are built with comfort and practicality in mind',
   },
   {  
      id: 'mtb',
      frameType: 'Mountain Bike',
      price: '80+ USD',
      picture: 'bike-mtb-label.png',
      description: 'A bicycle designed for off-road cycling. Mountain bikes share some similarities with other bicycles',
   }
]

//-----Brends-----//
export const bikes = {
   trec: 'Trec',
   giand: 'Giand',
   specializ: 'Specializ',
   scot: 'Scot',
   pride: 'Pride',
}

export let bikesBrend = ['All'];

for (let item in bikes) {
   bikesBrend.push(bikes[item])
}

//-----Size-----//

export const size = {
   17: '17"',
   18: '18"',
   19: '19"',
   20: '20"',
   21: '21"',
}

export const bikesFrameSize = ['All'];

for (let item in size) {
   bikesFrameSize.push(size[item])
}

//-----Storage of bikes----//

export const aluminiumBikes = [
   {
      type: 'aluminium',
      size: `${size[17]}`,
      brend: `${bikes.trec}`,
      image: 'bike-aluminium-1.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.trec} Corvet ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[18]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.specializ} Rock ${size[18]}`,
      price: '80 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[19]}`,
      brend: `${bikes.scot}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.scot} XXL ${size[19]}`,
      price: '99 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[20]}`,
      brend: `${bikes.pride}`,
      image: 'bike-aluminium-4.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.pride} Rocks ${size[20]}`,
      price: '70 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[21]}`,
      brend: `${bikes.giand}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.giand} Rapid ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[18]}`,
      brend: `${bikes.trec}`,
      image: 'bike-aluminium-4.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.trec} L ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[19]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.specializ} Alin ${size[19]}`,
      price: '80 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[20]}`,
      brend: `${bikes.scot}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.scot} Tero ${size[20]}`,
      price: '99 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[21]}`,
      brend: `${bikes.pride}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.pride} Colevo ${size[21]}`,
      price: '70 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[17]}`,
      brend: `${bikes.giand}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.giand} Celic ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[19]}`,
      brend: `${bikes.trec}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.trec} Town ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[20]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.specializ} Pin ${size[20]}`,
      price: '80 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[21]}`,
      brend: `${bikes.scot}`,
      image: 'bike-aluminium-4.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.scot} Arrow ${size[21]}`,
      price: '99 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[17]}`,
      brend: `${bikes.pride}`,
      image: 'bike-aluminium-1.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.pride} Civic ${size[17]}`,
      price: '70 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[18]}`,
      brend: `${bikes.giand}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.giand} Superb ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[20]}`,
      brend: `${bikes.trec}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.trec} Hell ${size[20]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[21]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-aluminium-1.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.specializ} Romb ${size[21]}`,
      price: '80 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[17]}`,
      brend: `${bikes.scot}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.scot} Epick ${size[17]}`,
      price: '99 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[18]}`,
      brend: `${bikes.pride}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.pride} Evo ${size[18]}`,
      price: '70 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[19]}`,
      brend: `${bikes.giand}`,
      image: 'bike-aluminium-4.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.giand} Europe ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[21]}`,
      brend: `${bikes.trec}`,
      image: 'bike-aluminium-1.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.trec} Dream ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[17]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-aluminium-2.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.specializ} BigBoy ${size[17]}`,
      price: '80 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[18]}`,
      brend: `${bikes.scot}`,
      image: 'bike-aluminium-3.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.scot} Slam ${size[18]}`,
      price: '99 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[19]}`,
      brend: `${bikes.pride}`,
      image: 'bike-aluminium-4.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.pride} Turbo Evo ${size[19]}`,
      price: '70 USD /day',
   },
   {
      type: 'aluminium',
      size: `${size[20]}`,
      brend: `${bikes.giand}`,
      image: 'bike-aluminium-1.png',
      typeBike: 'Road Bike(Aluminium)',
      fullName: `${bikes.giand} Rocket ${size[20]}`,
      price: '90 USD /day',
   },
]

export const carbonBikes = [
   {
      type: 'carbon',
      size: `${size[17]}`,
      brend: `${bikes.trec}`,
      image: 'bike-carbon-1.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.trec} Corvet ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[18]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.specializ} Rock ${size[18]}`,
      price: '80 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[19]}`,
      brend: `${bikes.scot}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.scot} XXL ${size[19]}`,
      price: '99 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[20]}`,
      brend: `${bikes.pride}`,
      image: 'bike-carbon-4.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.pride} Rocks ${size[20]}`,
      price: '70 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[21]}`,
      brend: `${bikes.giand}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.giand} Rapid ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[18]}`,
      brend: `${bikes.trec}`,
      image: 'bike-carbon-4.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.trec} L ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[19]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.specializ} Alin ${size[19]}`,
      price: '80 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[20]}`,
      brend: `${bikes.scot}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.scot} Tero ${size[20]}`,
      price: '99 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[21]}`,
      brend: `${bikes.pride}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.pride} Colevo ${size[21]}`,
      price: '70 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[17]}`,
      brend: `${bikes.giand}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.giand} Celic ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[19]}`,
      brend: `${bikes.trec}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.trec} Town ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[20]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.specializ} Pin ${size[20]}`,
      price: '80 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[21]}`,
      brend: `${bikes.scot}`,
      image: 'bike-carbon-4.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.scot} Arrow ${size[21]}`,
      price: '99 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[17]}`,
      brend: `${bikes.pride}`,
      image: 'bike-carbon-1.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.pride} Civic ${size[17]}`,
      price: '70 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[18]}`,
      brend: `${bikes.giand}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.giand} Superb ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[20]}`,
      brend: `${bikes.trec}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.trec} Hell ${size[20]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[21]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-carbon-1.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.specializ} Romb ${size[21]}`,
      price: '80 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[17]}`,
      brend: `${bikes.scot}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.scot} Epick ${size[17]}`,
      price: '99 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[18]}`,
      brend: `${bikes.pride}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.pride} Evo ${size[18]}`,
      price: '70 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[19]}`,
      brend: `${bikes.giand}`,
      image: 'bike-carbon-4.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.giand} Europe ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[21]}`,
      brend: `${bikes.trec}`,
      image: 'bike-carbon-1.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.trec} Dream ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[17]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-carbon-2.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.specializ} BigBoy ${size[17]}`,
      price: '80 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[18]}`,
      brend: `${bikes.scot}`,
      image: 'bike-carbon-3.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.scot} Slam ${size[18]}`,
      price: '99 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[19]}`,
      brend: `${bikes.pride}`,
      image: 'bike-carbon-4.png',
      typeBike: 'Road Bike(Carbon)',
      fullName: `${bikes.pride} Turbo Evo ${size[19]}`,
      price: '70 USD /day',
   },
   {
      type: 'carbon',
      size: `${size[20]}`,
      brend: `${bikes.giand}`,
      image: 'bike-carbon-1.png',
      typeBike: 'Aluminium bike',
      fullName: `${bikes.giand} Rocket ${size[20]}`,
      price: '90 USD /day',
   },
]

export const cityBikes = [
   {
      type: 'citybike',
      size: `${size[17]}`,
      brend: `${bikes.trec}`,
      image: 'bike-city-1.png',
      typeBike: 'City Bike',
      fullName: `${bikes.trec} Corvet ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[18]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.specializ} Rock ${size[18]}`,
      price: '80 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[19]}`,
      brend: `${bikes.scot}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.scot} XXL ${size[19]}`,
      price: '99 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[20]}`,
      brend: `${bikes.pride}`,
      image: 'bike-city-4.png',
      typeBike: 'City Bike',
      fullName: `${bikes.pride} Rocks ${size[20]}`,
      price: '70 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[21]}`,
      brend: `${bikes.giand}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.giand} Rapid ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[18]}`,
      brend: `${bikes.trec}`,
      image: 'bike-city-4.png',
      typeBike: 'City Bike',
      fullName: `${bikes.trec} L ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[19]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.specializ} Alin ${size[19]}`,
      price: '80 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[20]}`,
      brend: `${bikes.scot}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.scot} Tero ${size[20]}`,
      price: '99 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[21]}`,
      brend: `${bikes.pride}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.pride} Colevo ${size[21]}`,
      price: '70 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[17]}`,
      brend: `${bikes.giand}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.giand} Celic ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[19]}`,
      brend: `${bikes.trec}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.trec} Town ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[20]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.specializ} Pin ${size[20]}`,
      price: '80 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[21]}`,
      brend: `${bikes.scot}`,
      image: 'bike-city-4.png',
      typeBike: 'City Bike',
      fullName: `${bikes.scot} Arrow ${size[21]}`,
      price: '99 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[17]}`,
      brend: `${bikes.pride}`,
      image: 'bike-city-1.png',
      typeBike: 'City Bike',
      fullName: `${bikes.pride} Civic ${size[17]}`,
      price: '70 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[18]}`,
      brend: `${bikes.giand}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.giand} Superb ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[20]}`,
      brend: `${bikes.trec}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.trec} Hell ${size[20]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[21]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-city-1.png',
      typeBike: 'City Bike',
      fullName: `${bikes.specializ} Romb ${size[21]}`,
      price: '80 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[17]}`,
      brend: `${bikes.scot}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.scot} Epick ${size[17]}`,
      price: '99 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[18]}`,
      brend: `${bikes.pride}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.pride} Evo ${size[18]}`,
      price: '70 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[19]}`,
      brend: `${bikes.giand}`,
      image: 'bike-city-4.png',
      typeBike: 'City Bike',
      fullName: `${bikes.giand} Europe ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[21]}`,
      brend: `${bikes.trec}`,
      image: 'bike-city-1.png',
      typeBike: 'City Bike',
      fullName: `${bikes.trec} Dream ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[17]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-city-2.png',
      typeBike: 'City Bike',
      fullName: `${bikes.specializ} BigBoy ${size[17]}`,
      price: '80 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[18]}`,
      brend: `${bikes.scot}`,
      image: 'bike-city-3.png',
      typeBike: 'City Bike',
      fullName: `${bikes.scot} Slam ${size[18]}`,
      price: '99 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[19]}`,
      brend: `${bikes.pride}`,
      image: 'bike-city-4.png',
      typeBike: 'City Bike',
      fullName: `${bikes.pride} Turbo Evo ${size[19]}`,
      price: '70 USD /day',
   },
   {
      type: 'citybike',
      size: `${size[20]}`,
      brend: `${bikes.giand}`,
      image: 'bike-city-1.png',
      typeBike: 'City Bike',
      fullName: `${bikes.giand} Rocket ${size[20]}`,
      price: '90 USD /day',
   },
]

export const mtbBikes = [
   {
      type: 'mtb',
      size: `${size[17]}`,
      brend: `${bikes.trec}`,
      image: 'bike-mtb-1.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.trec} Corvet ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[18]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.specializ} Rock ${size[18]}`,
      price: '80 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[19]}`,
      brend: `${bikes.scot}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.scot} XXL ${size[19]}`,
      price: '99 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[20]}`,
      brend: `${bikes.pride}`,
      image: 'bike-mtb-4.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.pride} Rocks ${size[20]}`,
      price: '70 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[21]}`,
      brend: `${bikes.giand}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.giand} Rapid ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[18]}`,
      brend: `${bikes.trec}`,
      image: 'bike-mtb-4.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.trec} L ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[19]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.specializ} Alin ${size[19]}`,
      price: '80 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[20]}`,
      brend: `${bikes.scot}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.scot} Tero ${size[20]}`,
      price: '99 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[21]}`,
      brend: `${bikes.pride}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.pride} Colevo ${size[21]}`,
      price: '70 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[17]}`,
      brend: `${bikes.giand}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.giand} Celic ${size[17]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[19]}`,
      brend: `${bikes.trec}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.trec} Town ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[20]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.specializ} Pin ${size[20]}`,
      price: '80 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[21]}`,
      brend: `${bikes.scot}`,
      image: 'bike-mtb-4.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.scot} Arrow ${size[21]}`,
      price: '99 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[17]}`,
      brend: `${bikes.pride}`,
      image: 'bike-mtb-1.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.pride} Civic ${size[17]}`,
      price: '70 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[18]}`,
      brend: `${bikes.giand}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.giand} Superb ${size[18]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[20]}`,
      brend: `${bikes.trec}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.trec} Hell ${size[20]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[21]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-mtb-1.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.specializ} Romb ${size[21]}`,
      price: '80 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[17]}`,
      brend: `${bikes.scot}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.scot} Epick ${size[17]}`,
      price: '99 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[18]}`,
      brend: `${bikes.pride}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.pride} Evo ${size[18]}`,
      price: '70 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[19]}`,
      brend: `${bikes.giand}`,
      image: 'bike-mtb-4.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.giand} Europe ${size[19]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[21]}`,
      brend: `${bikes.trec}`,
      image: 'bike-mtb-1.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.trec} Dream ${size[21]}`,
      price: '90 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[17]}`,
      brend: `${bikes.specializ}`,
      image: 'bike-mtb-2.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.specializ} BigBoy ${size[17]}`,
      price: '80 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[18]}`,
      brend: `${bikes.scot}`,
      image: 'bike-mtb-3.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.scot} Slam ${size[18]}`,
      price: '99 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[19]}`,
      brend: `${bikes.pride}`,
      image: 'bike-mtb-4.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.pride} Turbo Evo ${size[19]}`,
      price: '70 USD /day',
   },
   {
      type: 'mtb',
      size: `${size[20]}`,
      brend: `${bikes.giand}`,
      image: 'bike-mtb-1.png',
      typeBike: 'Mountain Bike',
      fullName: `${bikes.giand} Rocket ${size[20]}`,
      price: '90 USD /day',
   },
]