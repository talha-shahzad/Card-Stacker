
function handleKeyPress(event) {
    if (event.keyCode === 13 || event.key === "Enter") {
        search();
    }
}

function themechange(event){
    let theme=event.target.value;
    let body=document.querySelector('body');
    if(theme==='cool')
    {
        body.style.backgroundImage='url("naruto.jpg")';
    }
    else if(theme==='sad')
    {
        body.style.backgroundImage='url("eren.jpg")';
    }
    else if(theme==='funny')
    {
        body.style.backgroundImage='url("funny.jpg")';
    }
    else{
        body.style.background='linear-gradient(to right, rgba(4, 187, 47, 0.989), rgb(0, 76, 130))'
    }
    body.style.backgroundPosition='center';
    body.style.backgroundSize='cover';
    body.style.color='black';

    key = 'theme'
    let themes={
        theme:body.style.backgroundImage,
        bgposition:body.style.backgroundPosition,
        bgsize:body.style.backgroundSize,
        color:body.style.color
    }
    console.log(themes);
    const cardString = JSON.stringify(themes);
    localStorage.setItem(key, cardString);
    

}

function fontchange(event)
{
    let font =  event.target.value;
    let body = document.querySelector('body');
    let nav = document.querySelector('.nav');
    let footer=document.querySelector('#footer');
    if (font === 'green') {
        body.style.color = 'green';
        nav.style.backgroundColor = ' rgba(5, 69, 15, 0.482)';
        footer.style.backgroundColor='rgba(5, 69, 15, 0.482)';
        body.style.fontFamily='arial'

    } else if (font === 'red') {
        body.style.color = 'red';
        nav.style.backgroundColor = 'rgba(172, 0, 0, 0.401)';
footer.style.backgroundColor='rgba(172, 0, 0, 0.401)';
body.style.fontFamily='cursive'
    } else if (font === 'blue') {
        body.style.color = 'blue';
        nav.style.backgroundColor = 'rgba(17, 7, 94, 0.588)';
footer.style.backgroundColor='rgba(17, 7, 94, 0.588)';
body.style.fontFamily='times'
    } else {
        body.style.color = 'black';
footer.style.backgroundColor='rgba(0, 0, 0, 0.482)';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.482)';
        body.style.fontFamily='verdana'
    }

    key = 'colors'
    let colors={
bodycolor:body.style.color,
navcolor:nav.style.backgroundColor,
footercolor:footer.style.backgroundColor,
fontstyle:body.style.fontFamily
    }
    console.log(colors);
    const cardString = JSON.stringify(colors);
    localStorage.setItem(key, cardString);

}

function search(){
    let option=document.querySelector('#option:checked').value;
    let search=document.getElementById('search').value;
    console.log(option,search)
    let cards=document.querySelectorAll('.card');
    Array.from(cards).forEach(function(element){
        let title=element.getElementsByTagName('h2')[0].innerText;
        let desc=element.getElementsByTagName('p')[0].innerText;
        let event=element.getElementsByTagName('li')[0].innerText;
        let eventDate=element.getElementsByTagName('li')[1].innerText;

        if (option === 'title' && title.includes(search))
         {
            element.style.display = 'block';
        } 
        else if (option === 'description' && desc.includes(search))
        {
            element.style.display = 'block';
        } 
        else if (option === 'date' && eventDate.includes(search))
        {
            element.style.display = 'block';
        }
        else if (option === 'event' && event.includes(search))
        {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
        
    })  
}

function deletes(title)
{
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith('card_')) {
            const cardString = localStorage.getItem(key);
            const card = JSON.parse(cardString);

            if (card.title === title) {
                localStorage.removeItem(key);
                return true;
            }
        }
}
location.reload();
}

function deleteAll(){
       
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                

                if (key.startsWith('card_')) {

                    localStorage.removeItem(key);
                }
            
            }

location.reload();

}
function edit(){
    alert("Do you want to edit")
}

function cardCreator(object)
{

    let card=document.createElement('div');
    card.className='card';
    card.style.width='18rem';
    card.style.margin='10px';

    let imgtop=document.createElement('img');
    imgtop.className='card-img-top';
    imgtop.src=object.image;
    imgtop.alt=object.title;
    imgtop.style.width='100%';
    imgtop.style.height='200px';
    imgtop.style.objectFit='cover';

    let contentDiv=document.createElement('div');
    contentDiv.className='card-body';
    let h2=document.createElement('h2');
    h2.textContent=object.title;
    h2.className='card-title';

    let p=document.createElement('p');
    p.textContent=object.description;
    p.className='card-text';
    
    let menu=document.createElement('ul');
    menu.className='list-group list-group-flush';
    let li1=document.createElement('li');
    li1.className='list-group-item';
    li1.textContent="Date : "+object.date;
    let li2=document.createElement('li');
    li2.className='list-group-item';
    li2.textContent="Time : "+object.time;
    let li3=document.createElement('li');
    li3.className='list-group-item';
    li3.textContent="Event : "+object.event;
    
    let button=document.createElement('button');
    button.textContent='Edit';
    button.className='buttons';
    button.addEventListener('click', function() {
        window.open('edit.html', '_blank')
        window.close();
    });

    let button1=document.createElement('button');
    button1.textContent='Delete';
    button1.className='buttons';
    button1.addEventListener('click', function() {
        deletes(object.title);
    });



    card.appendChild(imgtop);
    contentDiv.appendChild(h2);
    menu.appendChild(li3);
    menu.appendChild(li1);
    menu.appendChild(li2);

    contentDiv.appendChild(menu);
    contentDiv.appendChild(p);
    contentDiv.appendChild(button);
    contentDiv.appendChild(button1);
    card.appendChild(contentDiv);
    cardContainer=document.querySelector('.card-container');
    cardContainer.appendChild(card);

}

function getChangedFont()
{
    let body = document.querySelector('body');
    let nav = document.querySelector('.nav');
    let footer=document.querySelector('#footer');
    for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
        
                if (key.startsWith('colors')) {

                    const cardString = localStorage.getItem(key);
                    fonts = JSON.parse(cardString);
                }
            }
            if(fonts){
            console.log(fonts)
            body.style.fontFamily=fonts.fontstyle
        body.style.color = fonts.bodycolor
        nav.style.backgroundColor = fonts.navcolor
    footer.style.backgroundColor=fonts.footercolor 
    return fonts;
            }
            else
            return 0;
}
function getChangedTheme()
{
    let body=document.querySelector('body');
    for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
        
                if (key.startsWith('theme')) {

                    const cardString = localStorage.getItem(key);
                    themes = JSON.parse(cardString);
                }
            }
            if(themes){
            console.log(themes)
            body.style.backgroundImage=themes.theme
            body.style.backgroundPosition=themes.bgposition
            body.style.backgroundSize=themes.bgsize
            body.style.color=themes.color
            return themes;
            }
            return 0;
}



function getAllCards() {

    const cards = [];
    if(!getChangedTheme())
    {
        themechange();
    }
    if(!getChangedFont())
    {
        fontchange();
    }

    console.log(localStorage.length);
    // Loop through all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key represents a card (assuming all card keys start with 'card_')
        if (key.startsWith('card_')) {
            // Retrieve the card string from local storage
            const cardString = localStorage.getItem(key);

            // Parse the card string into an object and push it to the array
            const card = JSON.parse(cardString);
            cardCreator(card)
            cards.push(card);
        }
    }

}
