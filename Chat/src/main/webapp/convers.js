function newConversation(){
    let x = document.forms['form']['conversation'].value;
    var myHeaders = new Headers();

    fetch('api/messages/new?name=' + x,{method: 'POST'});
    
    }


