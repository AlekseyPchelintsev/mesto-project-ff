(()=>{"use strict";var t="https://nomoreparties.co/v1/wff-cohort-21",e="a6acebed-47e0-4efe-86f9-e8ec0f075c36",n=function(t){return t.ok?t.json():Promise.reject("Error: ".concat(t.status))},o=function(t,e,n,o,r){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=c.querySelector(".card__delete-button"),a=c.querySelector(".card__like-button"),u=c.querySelector(".card__like-counter"),l=c.querySelector(".card__title"),s=c.querySelector(".card__image");return l.textContent=t.name,s.src=t.link,s.alt=t.name,s.addEventListener("click",(function(){o(t)})),r===t.owner._id&&i.classList.add("card__delete-button_visible"),i.addEventListener("click",(function(){e(c,t._id)})),a.addEventListener("click",(function(){n(a,t._id,u)})),t.likes.some((function(t){return t._id===r}))&&a.classList.add("card__like-button_is-active"),u.textContent=t.likes.length,c},r=function(o,r){var c;o.remove(),c=r,fetch("".concat(t,"/cards/").concat(c),{method:"DELETE",headers:{authorization:e}}).then((function(t){return n(t)}))},c=function(o,r,c){var i;o.classList.contains("card__like-button_is-active")?function(o){return fetch("".concat(t,"/cards/likes/").concat(o),{method:"DELETE",headers:{authorization:e}}).then((function(t){return n(t)}))}(r).then((function(t){c.textContent=t.likes.length,o.classList.remove("card__like-button_is-active")})).catch((function(t){console.log(t)})):(i=r,fetch("".concat(t,"/cards/likes/").concat(i),{method:"PUT",headers:{authorization:e}}).then((function(t){return n(t)}))).then((function(t){c.textContent=t.likes.length,o.classList.add("card__like-button_is-active")})).catch((function(t){console.log(t)}))},i=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",u)},a=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u)},u=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");a(e)}},l=function(t,e,n,o){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n),e.setCustomValidity(""),r.textContent="",r.classList.remove(o)},s=function(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n)):(e.disabled=!0,e.classList.add(n))},d=function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);!function(t,e,n){e.forEach((function(e){l(t,e,n.inputErrorClass,n.errorClass)}))}(t,n,e),s(n,o,e.inactiveButtonClass)};function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var p=document.querySelector(".places__list"),m=document.querySelectorAll(".popup"),_=document.querySelector(".profile"),y=_.querySelector(".profile__image"),v=_.querySelector(".profile__title"),h=_.querySelector(".profile__description"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_change-profile-image"),q=document.querySelector(".profile__add-button"),C=document.querySelector(".popup_type_new-card"),k=document.querySelector(".popup_type_image"),E=k.querySelector(".popup__content_content_image"),L=E.querySelector(".popup__caption"),x=E.querySelector(".popup__image"),A=document.forms["edit-profile"],T=A.name,w=A.description,j=document.forms["profile-image"],z=j.link,B=document.forms["new-place"],O=B["place-name"],P=B.link,D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){var n,o=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n=e,s(o,r,t.inactiveButtonClass),o.forEach((function(e){e.addEventListener("input",(function(){s(o,r,t.inactiveButtonClass),function(t,e,n,o){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?l(t,e,n,o):function(t,e,n,o,r){var c=t.querySelector(".".concat(e.id,"-error"));e.classList.add(o),c.textContent=n,c.classList.add(r)}(t,e,e.validationMessage,n,o)}(n,e,t.inputErrorClass,t.errorClass)}))}))}))}(D),S.addEventListener("click",(function(){i(b),T.value=v.textContent,w.value=h.textContent,d(b,D)})),A.addEventListener("submit",(function(o){o.preventDefault();var r,c,i=A.querySelector(".popup__button");M(!0,i),(r=T.value,c=w.value,fetch("".concat(t,"/users/me"),{method:"PATCH",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({name:r,about:c})}).then((function(t){return n(t)}))).then((function(t){v.textContent=t.name,h.textContent=t.about,a(b)})).catch((function(t){console.log(t)})).finally((function(){M(!1,i)}))})),y.addEventListener("click",(function(){d(g,D),i(g)})),j.addEventListener("submit",(function(o){o.preventDefault();var r=j.querySelector(".popup__button");M(!0,r);var c,i=z.value;(c=i,fetch("".concat(t,"/users/me/avatar"),{method:"PATCH",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({avatar:c})}).then((function(t){return n(t)}))).then((function(t){y.style.backgroundImage="url(".concat(i,")"),t.avatar=i,a(g)})).catch((function(t){console.log(t)})).finally((function(){M(!1,r)})),o.target.reset()})),q.addEventListener("click",(function(){d(C,D),i(C)})),B.addEventListener("submit",(function(i){i.preventDefault();var u,l,s=B.querySelector(".popup__button");M(!0,s),(u=O.value,l=P.value,fetch("".concat(t,"/cards"),{method:"POST",headers:{authorization:e,"Content-Type":"application/json"},body:JSON.stringify({name:u,link:l})}).then((function(t){return n(t)}))).then((function(t){p.prepend(o(t,r,c,I,t.owner._id)),a(C)})).catch((function(t){console.log(t)})).finally((function(){M(!1,s)})),i.target.reset()}));var I=function(t){i(k),L.textContent=t.name,x.src=t.link,x.alt=t.name};m.forEach((function(t){t.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&a(t.currentTarget)}))}));var M=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"};Promise.all([fetch("".concat(t,"/users/me"),{headers:{authorization:e}}).then((function(t){return n(t)})),fetch("".concat(t,"/cards"),{headers:{authorization:e}}).then((function(t){return n(t)}))]).then((function(t){var e,n,i=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,c,i,a=[],u=!0,l=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(a.push(o.value),a.length!==e);u=!0);}catch(t){l=!0,r=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw r}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1],l=a._id;v.textContent=a.name,y.style.backgroundImage="url(".concat(a.avatar,")"),h.textContent=a.about,u.forEach((function(t){!function(t,e){var n=o(t,r,c,I,e);p.append(n)}(t,l)}))})).catch((function(t){console.log(t)}))})();