(()=>{"use strict";const e=document.querySelector(".burger"),t=document.querySelector(".mobile-menu-close"),n=document.querySelector(".menu"),c=()=>n.classList.add("menu--open"),o=()=>n.classList.remove("menu--open"),a=()=>JSON.parse(localStorage.getItem("products"))||[],r=()=>{var e;!function(e){const t=document.querySelectorAll(".cart-badge");e?t.forEach((t=>{t.textContent=e,t.classList.add("cart-badge--shown")})):t.forEach((e=>{e.textContent="",e.classList.remove("cart-badge--shown")}))}((e=a(),e.reduce(((e,t)=>e+(t?.quantity||0)),0)))};function d(e){const t=document.createElement("div");t.classList.add("snackbar"),t.textContent=e,document.body.appendChild(t),setTimeout((()=>{t.remove()}),2e3)}function s(){const e=a(),t=e.map((e=>function(e){const t=document.createElement("div");t.classList.add("cart__item-card");const n=document.createElement("div");n.classList.add("cart__info-wrapper");const c=document.createElement("div");c.classList.add("img-wrapper");const o=document.createElement("div");o.classList.add("cart__button-wrapper");const a=document.createElement("h4");a.textContent=e.name,a.classList.add("name");const r=document.createElement("img");r.setAttribute("src",e.picture),r.setAttribute("alt",e.name);const d=document.createElement("p");d.textContent=`price: $${e.price}`,d.classList.add("price");const s=document.createElement("p");s.textContent=`quantity: ${e.quantity}`;const l=document.createElement("button");return l.classList.add("btn"),l.textContent="×",l.addEventListener("click",i),c.appendChild(r),t.appendChild(c),n.appendChild(a),n.appendChild(d),n.appendChild(s),t.appendChild(n),o.appendChild(l),t.appendChild(o),t}(e))),n=document.querySelector(".cart__products"),c=document.querySelector(".cart__content");c.classList.remove("cart__content--shown");let o=n.lastElementChild;for(;o;)n.removeChild(o),o=n.lastElementChild;if(e.length>0){t.forEach((e=>n.appendChild(e)));const o=document.createElement("p");return o.classList.add("cart__sum"),o.textContent=`Total: $${function(e){return e.reduce(((e,t)=>e+(t?.price||0)),0)}(e)}`,n.appendChild(o),void c.classList.add("cart__content--shown")}const r=document.querySelector(".container"),d=document.createElement("p");d.textContent="Your cart is empty 😿",r.appendChild(d);const s=document.createElement("a");s.textContent="To the shop",s.setAttribute("href","/#buy"),s.classList.add("btn"),r.appendChild(s)}function i(){const e=this.closest(".cart__item-card").querySelector(".name").textContent,t=a().filter((t=>t.name!==e));localStorage.setItem("products",JSON.stringify(t)),s(),r(),d("Item deleted 🙀")}r(),e.addEventListener("click",c),t.addEventListener("click",o),s(),document.querySelector(".cart__form").addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("products"),s(),r(),d("Thanks for your order 😽")}))})();