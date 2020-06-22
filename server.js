const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get('/', function(req, res){
    const about = {
        name: "Company Lorem Ipsum",
        url:"https://cdn.pixabay.com/photo/2017/01/13/01/22/rocket-1976107_960_720.png",
        description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed cursus porttitor dapibus. Praesent nec mauris tincidunt,
                    dignissim risus a, sodales massa. Phasellus eget mauris in sapien
                    lacinia aliquam vitae ut dui. Maecenas tristique mattis eros et fringilla.
                    Donec pharetra, ligula at pharetra efficitur, libero lacus faucibus dui,
                    sed finibus nunc nisi sit amet nunc. Suspendisse potenti.
                    Nullam fermentum finibus ligula condimentum porta. Proin ac diam sapien.`,
        stacks: [
            {name: "Html"},
            {name: "CSS"},
            {name: "JavaScript"}
        ] ,                   
        links :[
            {name: "GitHub", url_link: "https://github.com/GaberRB"},
            {name: "Instagram", url_link: "https://www.instagram.com/gabrielriosb/"},
            {name: "Linkedin", url_link: "https://www.linkedin.com/in/gabriel-riosb/"}
        ]
    }

    return res.render('about', {about})
})

server.get('/courses', function(req, res){
    return res.render('courses', {items: pages})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;
  
     //return res.send(`O id fornecido na rota é: ${id}`);

    const page = pages.find(function(page){
        if ( page.id == id){
            return true
        }
    })

    if (!page) {
       return res.status(404).render("not-found")
    }
    return res.render('/courses/:id', {items: pages.id})
    // return res.redirect(`https://rocketseat.com.br/${page.id}`)

  });

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log('server is running')
})