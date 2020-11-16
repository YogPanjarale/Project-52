

function createItem(){
      const grid=document.querySelector('#grid')
      console.log(grid)
        var chameleon=Template.card("Chameleon","Interesting Facts about Chameleon"
        ,"Chameleons are reptiles that are part of the iguana suborder",
        "Changing skin color is an important part of communication among chameleon",
        "Most chameleons have a prehensile tail that they use to wrap around tree branches",
        "https://origami.me/chameleon/",
        "Images/chameleon.png" )
        var camel =Template.card("Camel","Interesting Facts about Camel",
        "A camel is an even-toed ungulate in the genus Camelus",
        "Camel bears distinctive fatty deposits known as \"humps\" on its back",
        "Camels have long been domesticated and, as livestock, they provide food and textiles.",
        "https://origami.me/camel/",
        "Images/camel.png")
        var peigion =Template.card("Peigion","Interesting Facts about Pigeon",
        "The rock dove, rock pigeon, or common pigeon is a member of the bird family Columbidae",
        "The domestic pigeon descended from this species",
        "Escaped domestic pigeons have increased the populations of feral pigeons around the world",
        "https://origami.me/pigeon/",
        "Images/pigeon.png")
        var panda=Template.card('Panda',"Panda is an interesting animal",
         "The giant panda, also known as the panda bear or simply the panda",
         " is a bear native to south central China",
         "It is characterised by large, black patches around its eyes, over the ears, and across its round body",
         "https://origami.me/panda/","Images/panda.png")
        var arr=[chameleon,camel,peigion,panda]
        arr=shuffle(arr)
        var line="";
        arr.forEach((e)=>{
            line+=e
        })
        grid.insertAdjacentHTML("afterbegin",line)
        

    }

class Template {
        static card(name,i,l1,l2,l3,link,photo){
                return ` <div class="container">
            
                <a href="${link}">
                    <div id="photo">
                <img src="${photo}" width="200px" >
                    </div>
            </a>
           
                <p><i>${i}</i></p>
                <ul>
                    <li>${l1}</li>
                    <li>${l2}</li>
                    <li>${l3}</li>
                </ul></div>
                `//    <hr width = 500px >
        }
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
