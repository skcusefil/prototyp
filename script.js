let navDiv
//Beispiel Begriff
const begriff = 'Unterseiten ';
//Beispiel Information von Begriff => hier wurde einfach für alle Begriffen nur als Beispiel benutzt!
const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat, arcu vel condimentum fringilla, turpis velit dictum nunc, at pretium urna enim non nibh. Morbi ac odio a diam tempor laoreet. Maecenas finibus justo felis, et volutpat dui euismod in. Nullam enim risus, accumsan quis dictum aliquam, sollicitudin id massa. Praesent luctus, ex et ultrices porttitor, lacus arcu consequat risus, placerat finibus lacus dolor sit amet mi. In hac habitasse platea dictumst. Pellentesque non rutrum nisl, sit amet eleifend nisl. Ut vitae tristique leo, ut pulvinar leo. Aenean ut nibh gravida justo commodo consequat.'


window.onload = function(){
    generate_Five_Contents();

    var createForm=document.getElementById('addTermForm')

    createForm.addEventListener('submit', function(e){

        //stop form from submitting
        e.preventDefault();    
        
        var topic = document.getElementById("newTopic");
        var newDefinition = document.getElementById("newDefinition");
        //get current id number
        var id = document.getElementById('nav').childElementCount+1;

        generateContent(topic.value,newDefinition.value,id)

        //clear text in form
        topic.value = "";
        newDefinition.value = "";

    });
}


//Generate Content
function generate_Five_Contents(){

    //loop for generate 5 sub topic
    for(var i = 1; i <= 5; i++){
        generateContent(begriff+i,info+i, i)
    }
}

function generateContent(topic,details,id){
        //get nav element
        navDiv = document.getElementById('nav')

        //create nav link to sub topic
        var a = document.createElement('a')
        a.href = '#term'+id;
        a.innerText = topic;

        //append nav items
        nav.appendChild(a);

        //get content element
        var content = document.getElementById('content');

        //create section
        var section = document.createElement('section');
        section.setAttribute('id', 'term'+id);

        var content_detail_container_div = document.createElement('div')
        content_detail_container_div.className = 'content_detail_container'

        var content_detail_div = document.createElement('div')
        content_detail_div.className = 'content_detail'

        var content_picture_div = document.createElement('div')
        content_picture_div.className = 'content_picture'
        content_picture_div.innerText = 'Here could be a photo of topic'

        //create topic of section
        var section_begriff = document.createElement('h2');
        section_begriff.class = "term"
        section_begriff.innerText = topic;

        //create information of section
        var section_info = document.createElement('p')
        section.className = "definition"
        section_info.innerText = details;

        //append element to section
        content_detail_div.appendChild(section_info)
        content_detail_container_div.appendChild(content_detail_div)
        content_detail_container_div.appendChild(content_picture_div)
        section.appendChild(section_begriff);
        section.appendChild(content_detail_container_div);

        //append element to content
        content.appendChild(section)
}



