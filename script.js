const menu=[["Breakfast", "Easy Breakfast", 6000], ["Breakfast", "Egg & Avo Smash Toast", 8000], ["Breakfast", "Spanish Omelette", 8000], ["Breakfast", "Soup of the Day", 10000], ["Breakfast", "Healthy Breakfast", 15000], ["Burgers", "Veggie Burger", 10000], ["Burgers", "Chicken Mozzarella Burger", 12000], ["Burgers", "Classic Cheese Beef Burger", 15000], ["Pasta", "Spaghetti Bolognese", 12000], ["Pasta", "Vegan Pasta", 12000], ["Pasta", "Chicken Alfredo Pasta", 12000], ["Main Dishes", "Fried Chicken Wings / Drumstick", 15000], ["Main Dishes", "Beef / Chicken Skewers", 15000], ["Main Dishes", "Juicy T-Bone Beef", 15000], ["Main Dishes", "Chicken Fajita", 15000], ["Main Dishes", "Peri Peri Fried Chicken", 15000], ["Main Dishes", "Crispy Chicken", 15000], ["Main Dishes", "Chicken / Beef Makange", 16000], ["Main Dishes", "Beef Stir Fry", 17000], ["Sandwiches", "Roast Beef Sandwich", 12000], ["Sandwiches", "Vegan Sandwich", 12000], ["Sandwiches", "Chicken Sandwich", 13000], ["Wraps", "Vegan Wraps", 12000], ["Wraps", "Beef Wraps", 14000], ["Wraps", "Chicken Wraps", 14000], ["Salads", "Beef Mango Salad", 12000], ["Salads", "Chicken Caesar Salad", 13000], ["Salads", "Chicken Salad", 15000], ["Salads", "Mango Salsa Salad", 15000], ["Waffles & Pancakes", "Classic Waffle", 8000], ["Waffles & Pancakes", "Nutella / Peanut Butter Waffle", 10000], ["Waffles & Pancakes", "Banana Nut Craze Special", 12000], ["Waffles & Pancakes", "Strawberry & Cream", 12000], ["Coffee", "Espresso", 3000], ["Coffee", "Americano", 4000], ["Coffee", "Cappuccino", 5000], ["Coffee", "Cafe Latte", 5000], ["Coffee", "Hot Chocolate", 5000], ["Coffee", "Mochaccino", 7000], ["Coffee", "Iced Latte", 7000], ["Coffee", "Frappuccino", 10000], ["Tea", "Black Tea", 3000], ["Tea", "Hot Milk", 3000], ["Tea", "Herbal Tea", 3000], ["Tea", "Milk Tea", 4000], ["Tea", "Iced Tea", 5000], ["Tea", "Dawa Tea", 5000], ["Tea", "Masala Tea", 5000], ["Smoothies", "Peanut Butter", 7000], ["Smoothies", "Banana", 7000], ["Smoothies", "Avocado", 7000], ["Smoothies", "Detox", 8000], ["Smoothies", "Green", 8000], ["Smoothies", "Tropical", 8000], ["Milkshakes", "Vanilla", 8000], ["Milkshakes", "Strawberry", 8000], ["Milkshakes", "Espresso", 8000], ["Milkshakes", "Chocolate", 8000], ["Milkshakes", "Banana", 8000], ["Milkshakes", "Oreo", 8000], ["Milkshakes", "Tende", 8000], ["Mocktails", "Mojito", 8000], ["Mocktails", "Virgin Strawberry Daiquiri", 8000], ["Mocktails", "Easy Passionfruit Sparkles", 8000], ["Mocktails", "Sunrise Mocktail", 8000], ["Mocktails", "Blue Lagoon", 8000], ["Mocktails", "Pinacolada", 8000], ["Refreshers", "Seasonal Juice", 5000], ["Refreshers", "Tropical Juice", 5000], ["Refreshers", "Carrot Juice", 5000], ["Refreshers", "Orange Juice", 7000], ["Refreshers", "Mint Lemonade", 7000], ["Refreshers", "Mineral Water", 1000], ["Refreshers", "Soda", 2000], ["Top It Up", "Extra Toast", 2000], ["Top It Up", "Plain Crispy Chips", 3000], ["Top It Up", "Onion Rings", 3000], ["Top It Up", "Mixed Steamed Veggies", 4000], ["Top It Up", "Extra Cheese", 4000], ["Top It Up", "Chips Omelette — Classic Zege Edition", 7000], ["Top It Up", "Special of the Day", 10000], ["Desserts", "Vanilla Ice Cream", 5000], ["Desserts", "Chocolate Ice Cream", 5000], ["Desserts", "Strawberry Ice Cream", 5000], ["Desserts", "Fruit Salad (Seasonal Fruit)", 5000], ["Desserts", "Fruit Salad + Ice Cream", 12000], ["Junior Dishes", "Chicken Wings", 8000], ["Junior Dishes", "Junior Burger", 8000], ["Junior Dishes", "Chicken Nugget", 8000], ["Junior Dishes", "Chicken Lollipop", 8000]];
const categories=["All",...new Set(menu.map(x=>x[0]))];
const tabs=document.getElementById("menu-tabs"),grid=document.getElementById("menu-grid");
const money=n=>new Intl.NumberFormat("en-TZ").format(n)+" TZS";
function render(category="All"){
  grid.innerHTML="";
  menu.filter(x=>category==="All"||x[0]===category).forEach(([cat,name,price])=>{
    const card=document.createElement("article"); card.className="menu-card";
    card.innerHTML='<div><h3>'+name+'</h3><p>'+cat+'</p></div><div class="price">'+money(price)+'</div>';
    grid.appendChild(card);
  });
  [...tabs.children].forEach(b=>b.classList.toggle("active",b.dataset.category===category));
}
categories.forEach(cat=>{const b=document.createElement("button");b.className="menu-tab";b.type="button";b.textContent=cat;b.dataset.category=cat;b.addEventListener("click",()=>render(cat));tabs.appendChild(b)});
render();
const toggle=document.querySelector(".nav-toggle"),nav=document.getElementById("site-nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("reservation-form").addEventListener("submit",e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget),status=document.getElementById("reservation-status");
  const message =
    "Hello The Family Bean Cafe! I'd like to make a reservation.%0A%0A" +
    "Name: "+encodeURIComponent(d.get("name"))+"%0A" +
    "Phone: "+encodeURIComponent(d.get("phone"))+"%0A" +
    "Date: "+encodeURIComponent(d.get("date"))+"%0A" +
    "Time: "+encodeURIComponent(d.get("time"))+"%0A" +
    "Guests: "+encodeURIComponent(d.get("guests"))+"%0A" +
    "Special request: "+encodeURIComponent(d.get("request")||"None");
  status.textContent="Opening WhatsApp with your reservation request…";
  window.open("https://wa.me/255768957143?text="+message,"_blank","noopener");
});