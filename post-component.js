class PostComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

    constructor(){
        super();
    
       this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
       this.gamesArray = []
    }
    
    connectedCallback(){

        fetch('https://www.reddit.com/r/aww/new.json')
        .then(resp => resp.json())
        .then(res => {
                        const data= res.data;
                        const posts = data.children;
                        console.log(posts)
        
        })
    
    }

    disconnectedCallback(){

    }
}