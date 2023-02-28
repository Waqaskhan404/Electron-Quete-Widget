const request=require("request")

// request(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${randomNumber}`,function(err,res,body){
//     let bodyJson=JSON.parse(body);
//     let randomQuote=bodyJson[0]["content"];
//     document.getElementById("quote").innerHTML=randomQuote.rendered
// });

setInterval(function(){
const randomNumber=Math.floor(Math.random() *1000)+1

    request(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${randomNumber}`,function(err,res,body){
    let bodyJson=JSON.parse(body);
    let randomQuote=bodyJson[0]["content"];
    document.getElementById("quote").innerHTML=randomQuote.rendered
});
},5000)