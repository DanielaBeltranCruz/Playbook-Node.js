// Ejercicio 1. Modelar información con objetos simples de JS
console.log("Ejercicio 1. Modelar información con objetos simples de JS")

const user = {
    username: "innovaccionvirtual",
    name: "Innovacción virtual",
    posts: 27,
    followers: 5876,
    following: 19,

    getTotalPosts: function() {
        return this.posts
    },

    getGeneralInfo: function() {
        return `The profile of ${this.name} has ${this.followers} followers.`
    }
}

const biography = {  
    type: "Education",
    description: "Buscamos reducir la brecha entre la formación profesional y las necesidades del emrcado laboral.",
    link: "linktr.ee/innovaccionvirtual",
}

const posts = {
    type_of_post: "Image",
    likes: 363,
    comments: 0,
    date: "April 16, 2022",
    description: "¿Existe un día del Hardware Libre?",
    
    getTotalLikes: function() {
        return this.likes
    },

    getTotalComments: function(){
        return this.comments
    },

    getDate: function() {
        return `This post was posted on ${this.date}.`
    }
}


console.log("Profile of Instagram")

console.log("Username: " + user.username)
console.log("Total of posts: " + user.getTotalPosts())
console.log(user.getGeneralInfo())
console.log("About " + user.name + ": " + biography.description)
console.log("Link: " + biography.link)
console.log("Post: " + posts.description)
console.log("Total of likes: " + posts.getTotalLikes())
console.log("Total of comments: " + posts.getTotalComments())
console.log(posts.getDate())
