'use strict';

const images = [
    {'id':'1','url':'./Images/itachi.jpg'},
    {'id':'2','url':'./Images/kakashi.jpg'},
    {'id':'3','url':'./Images/madara.jpg'},
    {'id':'4','url':'./Images/obito.webp'},
    {'id':'5','url':'./Images/sasuke.jpg'},
    {'id':'6','url':'./Images/shisui.jpg'}
]

const containerItems = document.querySelector('#container-items');
const loadImages = (images,container)=>{
    images.forEach(image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>
        `
    });
};
loadImages(images,containerItems);

let items = document.querySelectorAll('.item');
const previous = ()=>{
    containerItems.appendChild(items[0]); // this is goint to be resposible to get the first picture and send to final
    items = document.querySelectorAll('.item'); // this is to reload the images
};
const next = ()=>{
    const lastitem = items[items.length-1];
    containerItems.insertBefore(lastitem,items[0])// this is to insert the last image before the first one
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',next);
