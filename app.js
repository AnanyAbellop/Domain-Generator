let pronoun = ['the','our','his','your','my'];
let adj = ['great', 'big','giant','beautyful','gorgeus','spectacular' ];
let noun = ['jogger','racoon','runner','singer','cook'];

for (let i=0;i<pronoun.length;i++){
    for (let j=0;j<adj.length;j++){
        for (let k=0;k<noun.length;k++){
            
            let a=Math.floor((Math.random()*pronoun.length));
            let b=Math.floor((Math.random()*adj.length));
            let c=Math.floor((Math.random()*noun.length));

            var domain= pronoun[a]+adj[b]+noun[c]+".com";
           // console.log(a,b,c);
            console.log(domain);

        }
    }
}