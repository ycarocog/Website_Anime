const complete_search = document.querySelector('.search')
const inputBox = complete_search.querySelector('input')
const sugestBox = complete_search.querySelector('.list')


inputBox.onkeyup = (e)=>{
    let result = [];
    let input = inputBox.value;

    if(input.length){
        result = animes_list.filter((keywords)=>{
           return keywords.toLocaleLowerCase().startsWith(input.toLocaleLowerCase());
        });
    }
    display(result);

    if(!result.length){
        sugestBox.innerHTML = "";
    }
    if(e.key === "Enter"){
       inputBox.value = result[0];
       sugestBox.innerHTML = "";
    }
}

function display(result){
    const content = result.map((list)=>{
        return `<li onclick = selectInput(this)> ${list} </li>`;
    })
    sugestBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(word){
    inputBox.value = word.innerHTML;
    sugestBox.innerHTML = "";
}