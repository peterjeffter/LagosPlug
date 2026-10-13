// ===== EDIT THESE =====
const CHECKOUT_URL = "https://peckchow.com";   // where the Checkout button sends people
const PHONE_DISPLAY = "+267-667-6547";
const ORDERS_URL = "google.com";   // Google Apps Script web app URL (used by the contact form)

// img = photo file inside the "images" folder. Remove or leave out img to show the emoji instead.
const MENU = [
  // Earlier jollof/soup items
{id:20,n:"Jollof Rice",e:"🍛",img:"Imgs/jollofrice.png",p:6.5,c:"Fast Food",d:"Smoky party-style jollof rice, served hot."},
{id:21,n:"Jollof & Chicken",e:"🍗",img:"Imgs/jollofandchicken.png",p:9.5,c:"Fast Food",d:"Smoky jollof rice with a juicy piece of fried chicken."},
{id:22,n:"Jollof & Beef",e:"🥩",img:"Imgs/jollofandbeef.png",p:9.5,c:"Fast Food",d:"Smoky jollof rice with tender, spiced beef."},
{id:23,n:"Jollof & Goat Meat",e:"🍛",img:"Imgs/jollofandgoat.png",p:10.5,c:"Fast Food",d:"Smoky jollof rice with peppered goat meat."},
{id:24,n:"Jollof & Turkey",e:"🦃",img:"Imgs/jollofandturkey.png",p:11.5,c:"Fast Food",d:"Smoky jollof rice with a large piece of grilled turkey."},
{id:25,n:"Egusi & Fufu",e:"🍲",img:"Imgs/egusinfufu.jpeg",p:9.5,c:"Fast Food",d:"Rich melon seed soup with smooth, soft fufu."},
{id:26,n:"Okro Soup",e:"🥣",img:"Imgs/okro.jpeg",p:8.5,c:"Fast Food",d:"Thick, flavorful okro soup with assorted meat and fish."},

// Breakfast
{id:30,n:"Cafe Latte",e:"☕",img:"Imgs/cafelatte.png",p:3,c:"Breakfast",d:"Smooth espresso with steamed milk."},
{id:31,n:"Melange",e:"☕",img:"Imgs/melange.jpg",p:3,c:"Breakfast",d:"Viennese-style coffee with frothed milk."},
{id:32,n:"Tea (Various)",e:"🍵",img:"Imgs/varioustea.webp",p:2,c:"Breakfast",d:"Hot tea, choose from different varieties."},
{id:33,n:"Tea (Milk & Milo)",e:"🥛",img:"Imgs/milotea.jpg",p:2.5,c:"Breakfast",d:"Creamy tea with milk and Milo."}, // FILE MISSING
{id:34,n:"Meat Pie",e:"🥧",img:"Imgs/meatpie.webp",p:4.5,c:"Breakfast",d:"Flaky pastry filled with spiced minced meat."},
{id:35,n:"Chicken Pie",e:"🥧",img:"Imgs/chickenpie.jpeg",p:4.5,c:"Breakfast",d:"Flaky pastry filled with seasoned chicken."},
{id:36,n:"Sandwich",e:"🥪",img:"Imgs/sandwich.jpg",p:3,c:"Breakfast",d:"Freshly made sandwich."},
{id:37,n:"Croissant",e:"🥐",img:"Imgs/croissant.webp",p:3,c:"Breakfast",d:"Buttery, golden croissant."},
{id:38,n:"Egg Roll",e:"🥚",img:"Imgs/eggroll.jpg",p:4.5,c:"Breakfast",d:"Boiled egg wrapped in soft golden dough."}, // FILE MISSING
{id:39,n:"Fish Roll",e:"🐟",img:"Imgs/fishroll.png",p:3,c:"Breakfast",d:"Crispy pastry filled with seasoned fish."},

// Brunch
{id:40,n:"Soak Garri",e:"🥣",img:"Imgs/garri.jpg",p:2,c:"Brunch",d:"Cold garri soaked in water and milk."},
{id:41,n:"Nuts",e:"🥜",img:"Imgs/nuts.jpg",p:1,c:"Brunch",d:"Add-on for your garri."}, // FILE MISSING
{id:42,n:"Kokos",e:"🥥",img:"Imgs/kokos.jpg",p:1.5,c:"Brunch",d:"Fresh coconut add-on for your garri."}, // FILE MISSING
{id:43,n:"Kulikuli",e:"🍘",img:"Imgs/kulikuli.jpg",p:1,c:"Brunch",d:"Crunchy groundnut snack add-on."},

// Wine
{id:44,n:"Red Wine",e:"🍷",img:"Imgs/redwine.jpg",p:15,c:"Wine",d:"Rich, smooth red wine."}, // FILE MISSING
{id:45,n:"White Wine",e:"🥂",img:"Imgs/whitewine.jpg",p:15,c:"Wine",d:"Crisp, refreshing white wine."},
{id:46,n:"Sparkling",e:"🍾",img:"Imgs/sparkling.jpg",p:18,c:"Wine",d:"Light, bubbly sparkling wine."},
{id:47,n:"Prosecco",e:"🥂",img:"Imgs/prosecco.jpg",p:18,c:"Wine",d:"Italian sparkling wine."},

// Alcohol & Beer
{id:48,n:"Hennessy",e:"🥃",img:"Imgs/hennessy.jpg",p:70,c:"Alcohol & Beer",d:"Premium cognac, per bottle."},
{id:49,n:"Johnnie Walker",e:"🥃",img:"Imgs/johniewalker.webp",p:60,c:"Alcohol & Beer",d:"Blended Scotch whisky, per bottle."},
{id:50,n:"Vodka",e:"🍸",img:"Imgs/vodka.jpeg",p:70,c:"Alcohol & Beer",d:"Smooth, clear vodka, per bottle."},
{id:51,n:"Tequila",e:"🍹",img:"Imgs/tequila.jpg",p:70,c:"Alcohol & Beer",d:"Classic tequila, per bottle."},
{id:52,n:"Campari",e:"🍹",img:"Imgs/campari.jpg",p:40,c:"Alcohol & Beer",d:"Bold, bittersweet Italian aperitif."},
{id:53,n:"Bombay Gin",e:"🍸",img:"Imgs/Bombay-Sapphire.jpg",p:60,c:"Alcohol & Beer",d:"Crisp, botanical gin, per bottle."}, // CHECK FILENAME
{id:54,n:"Aperol",e:"🍹",img:"Imgs/aperol.jpg",p:20,c:"Alcohol & Beer",d:"Light, orange-flavoured aperitif."},
{id:55,n:"Small Stout",e:"🍺",img:"Imgs/stout.jpg",p:4,c:"Alcohol & Beer",d:"Dark, full-bodied stout."}, // FILE MISSING
{id:56,n:"Stiegl",e:"🍺",img:"Imgs/stiegl.jpg",p:3.5,c:"Alcohol & Beer",d:"Austrian lager."},
{id:57,n:"Windhoek Burger",e:"🍺",img:"Imgs/windhoek.jpg",p:3.5,c:"Alcohol & Beer",d:"Chilled beer."},
{id:58,n:"Heineken",e:"🍺",img:"Imgs/heineken.jpg",p:3.5,c:"Alcohol & Beer",d:"Classic Dutch lager."},
{id:59,n:"Schwechater",e:"🍺",img:"Imgs/schwechater.jpg",p:3.5,c:"Alcohol & Beer",d:"Smooth Austrian beer."},

// Grill
{id:60,n:"Kilishi",e:"🥩",img:"Imgs/kilishi.png",p:5,c:"Grill",d:"Spicy, dried and grilled beef jerky."},
{id:61,n:"Turkey",e:"🍗",img:"Imgs/turkey.jpg",p:6,c:"Grill",d:"Grilled turkey, peppered and juicy."}, // FILE MISSING
{id:62,n:"Gizzard",e:"🍢",img:"Imgs/gizzard.webp",p:4.5,c:"Grill",d:"Peppered chicken gizzard skewers."},
{id:63,n:"Cow Leg",e:"🍖",img:"Imgs/cowleg.jpg",p:7,c:"Grill",d:"Slow-cooked, spiced cow leg."}, // FILE MISSING
{id:64,n:"Cow Head",e:"🍖",img:"Imgs/cowhead.jpg",p:7,c:"Grill",d:"Tender, peppered cow head."}, // FILE MISSING
{id:65,n:"Goat Meat",e:"🍖",img:"Imgs/goatmeat.jpg",p:7,c:"Grill",d:"Spicy grilled goat meat."}, // FILE MISSING
{id:66,n:"Jollof Bowl",e:"🍛",img:"Imgs/jollofrice.png",p:9.9,c:"Grill",d:"Smoky jollof rice served in a bowl."},
{id:67,n:"Chicken Wings",e:"🍗",img:"Imgs/wings.jpg",p:5,c:"Grill",d:"Crispy, seasoned chicken wings."},

// Shots
{id:68,n:"Vodka Shot",e:"🥃",img:"Imgs/vodka.jpeg",p:3,c:"Shots",d:"A single shot of vodka."},
{id:69,n:"Jack Daniel's Shot",e:"🥃",img:"Imgs/jackdaniels.jpg",p:3,c:"Shots",d:"A single shot of Jack Daniel's."}, // FILE MISSING
{id:70,n:"Johnnie Walker Shot",e:"🥃",img:"Imgs/johniewalker.webp",p:3,c:"Shots",d:"A single shot of Johnnie Walker."},
  
  ];
// ======================
const $=id=>document.getElementById(id);
const fmt=n=>"€"+n.toLocaleString("en-NG");

// ===== Cart (saved in the browser so it survives refreshes) =====
const CART_KEY="peckchow_cart";
let cat="All",order=null;
let cart=loadCart();

function loadCart(){
  try{
    const saved=JSON.parse(localStorage.getItem(CART_KEY)||"[]");
    // keep only items still on the menu, and refresh name/price in case you changed them
    return saved.flatMap(c=>{
      const m=MENU.find(x=>x.id===parseInt(c.key,10));
      return m&&c.q>0?[{key:c.key,name:m.n,v:c.v,p:m.p,q:c.q}]:[];
    });
  }catch(e){return []}
}
function saveCart(){
  try{localStorage.setItem(CART_KEY,JSON.stringify(cart))}catch(e){}
}

$("ph").textContent=PHONE_DISPLAY;
$("c-call").href="tel:+"+PHONE_DISPLAY.replace(/\D/g,"");

function openM(k){
  if(k==="cart")renderCart();
  if(k==="contact"){$("ct-form").style.display="block";$("ct-done").style.display="none"}
  $("m-"+k).classList.add("open");
}
function closeM(k){$("m-"+k).classList.remove("open")}
function bg(e,k){if(e.target.classList.contains("modal"))closeM(k)}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")document.querySelectorAll(".modal.open").forEach(m=>m.classList.remove("open"));
});

function renderTabs(){
  const cats=["All",...new Set(MENU.map(m=>m.c))];
  $("tabs").innerHTML=cats.map(c=>`<button class="tab ${c===cat?"on":""}" onclick="cat='${c}';$('q').value='';renderTabs();renderMenu()">${c}</button>`).join("");
}
const norm=s=>String(s).replace(/&amp;/g,"&").toLowerCase();
function renderMenu(){
  const q=norm($("q").value.trim());
  const list=MENU.filter(m=>q?norm(m.n+" "+m.d+" "+m.c).includes(q):(cat==="All"||m.c===cat));
  $("grid").innerHTML=list.length?list.map(m=>`
  <div class="card">
    <div class="emo">${m.tag?`<span class="tag">${m.tag}</span>`:""}${m.img?`<img src="${m.img}" alt="${m.n}" loading="lazy" onerror="this.replaceWith('${m.e}')">`:m.e}</div>
    <h3>${m.n}</h3><p>${m.d}</p>
    <div class="row"><span class="price">${fmt(m.p)}</span><button class="btn" onclick="add(${m.id})">${m.ch?"Choose +":"Add +"}</button></div>
  </div>`).join(""):
  `<div class="empty" style="grid-column:1/-1">No dishes match your search.<br>Try another word, or <a href="#" onclick="openM('contact');return false" style="color:var(--brand)">ask us</a>.</div>`;
}
$("q").addEventListener("input",()=>{
  if($("q").value.trim()&&cat!=="All"){cat="All";renderTabs()}   // search looks at the whole menu
  renderMenu();
});
let pickId=null;
function add(id){
  const m=MENU.find(x=>x.id===id);
  if(m.ch){
    pickId=id;
    $("pk-title").textContent=m.n;
    $("pk-body").innerHTML=m.ch.map((g,i)=>`<label for="pk${i}">${g.l}</label><select id="pk${i}">${g.o.map(o=>`<option>${o}</option>`).join("")}</select>`).join("");
    openM("pick");
  } else addItem(id,"");
}
function confirmPick(){
  const m=MENU.find(x=>x.id===pickId);
  const v=m.ch.map((g,i)=>$("pk"+i).value).join(", ");
  addItem(pickId,v);closeM("pick");
}
function addItem(id,v){
  const m=MENU.find(x=>x.id===id);
  const key=id+"|"+v,ex=cart.find(c=>c.key===key);
  ex?ex.q++:cart.push({key,name:m.n,v,p:m.p,q:1});
  upd();
}
function chg(key,d){
  const c=cart.find(x=>x.key===key);
  if(!c)return;
  c.q=Math.max(1,c.q+d);          // never goes below 1
  upd();renderCart();
}
function removeItem(key){
  cart=cart.filter(x=>x.key!==key);
  upd();renderCart();
}
const total=()=>cart.reduce((a,c)=>a+c.p*c.q,0);
function upd(){
  const n=cart.reduce((a,c)=>a+c.q,0);
  $("cc").textContent=n;$("ft").textContent=fmt(total());
  $("fab").style.display=n?"block":"none";
  saveCart();
}
function renderCart(){
  if(!cart.length){$("cartBody").innerHTML=`<div class="empty">Your cart is empty 🍽️<br><br><button class="btn" onclick="closeM('cart')">Browse menu</button></div>`;return}
  $("cartBody").innerHTML=cart.map(c=>`
  <div class="item"><div class="nm">${c.name}${c.v?` <small>(${c.v})</small>`:""}<br><small>${fmt(c.p)} each</small></div>
  <div class="qty"><button onclick="chg('${c.key}',-1)" ${c.q<=1?"disabled":""} aria-label="Decrease">−</button><b>${c.q}</b><button onclick="chg('${c.key}',1)" aria-label="Increase">+</button></div>
  <button class="rm" onclick="removeItem('${c.key}')" aria-label="Remove ${c.name}">×</button></div>`).join("")+
  `<div class="total"><span>Total</span><span>${fmt(total())}</span></div>
   <button class="btn" style="width:100%" onclick="checkout()">Checkout</button>`;
}

// ===== Checkout: send people to your link =====
function checkout(){
  if(!cart.length)return;
  window.location.href=CHECKOUT_URL;
}

renderTabs();renderMenu();upd();

// ===== Hero slideshow =====
// Put your photos in an "images" folder next to index.html and list them here.
const HERO_SLIDES = ["Imgs/jollofandchicken.png","Imgs/jollofandturkey.png" , "Imgs/jollofandgoat.png","Imgs/jollofandbeef.png"];
const HERO_SECONDS = 5;
(function(){
  const hero=$("hero"),box=$("heroBg");
  let loaded=0,list=[];
  HERO_SLIDES.forEach(src=>{
    const img=new Image();
    img.onload=()=>{list.push(src);if(++loaded===HERO_SLIDES.length)start()};
    img.onerror=()=>{if(++loaded===HERO_SLIDES.length)start()};
    img.src=src;
  });
  function start(){
    if(!list.length)return;                 // no photos found: keep the plain hero
    box.innerHTML=list.map(s=>`<div class="slide" style="background-image:url('${s}')"></div>`).join("");
    const slides=[...box.children];let i=0;
    slides[0].classList.add("on");hero.classList.add("has-slides");
    if(slides.length<2)return;
    setInterval(()=>{slides[i].classList.remove("on");i=(i+1)%slides.length;slides[i].classList.add("on")},HERO_SECONDS*1000);
  }
})();


// ===== Mobile hamburger =====
(function(){
  const burger=$("burger"),nav=$("nav");
  const setNav=open=>{
    nav.classList.toggle("open",open);
    burger.classList.toggle("open",open);
    burger.setAttribute("aria-expanded",open);
  };
  burger.addEventListener("click",()=>setNav(!nav.classList.contains("open")));
  nav.addEventListener("click",e=>{if(e.target.closest(".btn"))setNav(false)});   // close after choosing
  document.addEventListener("click",e=>{if(!e.target.closest("header"))setNav(false)}); // tap outside
  document.addEventListener("keydown",e=>{if(e.key==="Escape")setNav(false)});
  window.matchMedia("(min-width:601px)").addEventListener("change",e=>{if(e.matches)setNav(false)});
})();

// ===== Contact form =====
async function sendContact(){
  const name=$("c-name").value.trim(),contact=$("c-contact").value.trim(),msg=$("c-msg").value.trim();
  const err=$("c-err"),btn=$("c-send");
  if($("c-website").value)return;                       // bot trap
  if(!name||!contact||!msg){err.textContent="Please fill in your name, how to reach you, and your message.";err.style.display="block";return}
  err.style.display="none";btn.disabled=true;btn.textContent="Sending…";
  try{
    await fetch(ORDERS_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},
      body:JSON.stringify({type:"contact",name,contact,message:msg})});
    $("ct-form").style.display="none";$("ct-done").style.display="block";
    ["c-name","c-contact","c-msg"].forEach(i=>$(i).value="");
  }catch(e){err.textContent="No connection. Please try again.";err.style.display="block"}
  finally{btn.disabled=false;btn.textContent="Send message"}
}
