class Convers {
    constructor() {
        this.conv = document.querySelector("#conv");
        this.load();
    }
    
    load(){
        fetch('api/messages/conversations')
             .then(response =>{
                if(response.ok){
                    return response.json();
                }
                
                throw new Error("Failed to load list of conversations");
        })
                .then(json=> this.addConversations(json))
                .catch(e => console.log("error: " + e.message));
    }
    
    addConversations(json) {
        this.conv.innerHTML = '';
        
        for(let i = 0; i < json.length; i++) {
            let ul = document.createElement('ul');
            
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.innerHTML = json[i].id;
                a.href = "photo.html?name=" + json[i].id;
                li.appendChild(a);
                ul.appendChild(li);

            this.conv.appendChild(ul);
        }
        
    }


    
    
}
let c = new Convers();
