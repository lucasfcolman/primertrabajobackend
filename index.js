class TicketManager {
   constructor() {
     this.events = [];
     this.priceBase = 0.15;
     this.eventIdCounter = 1;
   }
   
 
   getEvents() {
     return this.events; 
   }
 
   addEvent(name, place, price = 15, amount = 100, date = new Date()) {
     const event = {
       id: this.eventIdCounter++, 
       name,
       place,
       price: price + price * this.priceBase, 
       amount,
       date,
       participants: [],
     };
     this.events.push(event);
     return event;
   }
 
   addUser(eventId, userId) {
     const event = this.events.find((event) => event.id === eventId); 
     if (!event) {
       
       throw new Error(`El ID ${eventId} no existe.`);
     }
     if (event.participants.includes(userId)) {
       
       throw new Error(
         `El usuario ${userId} ya está registrado`
       );
     }
     event.participants.push(userId);
   }
 
   ponerEventoEnGira(eventId, newPlace, newDate) {
    
     const event = this.events.find((event) => event.id === eventId);
     if (!event) {
       throw new Error(`El evento ${eventId} no existe.`); 
     }
     const newEvent = {
       
       ...event,
       id: this.eventIdCounter++,
       place: newPlace,
       date: newDate,
       participants: [],
     };
     this.events.push(newEvent); 
     return newEvent;
   }
 }
 
 
 
 const event1 = ticketManager.addEvent(
   "Recital de Deftones",
   "Movistar Arena",
   40,
   5000
 );
 console.log(event1);
 
 ticketManager.addUser(event1.id, 1);
 ticketManager.addUser(event1.id, 2);
 console.log(event1);
 
 const event2 = ticketManager.ponerEventoEnGira(
   event1.id,
   "Luna Park",
   new Date("2020-05-11")
 );
 console.log(event2);
 
 const events = ticketManager.getEvents();
 console.log(events);