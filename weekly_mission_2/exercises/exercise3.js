// Ejercicio 3. Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.

console.log("Ejercicio 3. Convertir objetos a definiciones de clases")

class user {
    constructor(username, name, posts, followers, following) {
        this.username = username
        this.name = name
        this.posts = posts
        this.followers = followers
        this.following = following
    }

    get getTotalPosts() {
        return this.posts
    }

    get getGeneralInfo() {
        return `The profile of ${this.name} has ${this.followers} followers.`
    }
}

class biography {
    constructor(type, description, link) {
        this.type = type
        this.description = description
        this.link = link
    }
}

class posts {
    constructor(likes, comments, date, description) {
        this.likes = likes
        this.comments = comments
        this.date = date
        this.description = description
    }

    getTotalLikes() {
        return this.likes
    }

    getTotalComments() {
        return this.comments
    }

    getDate() {
        return `This post was published on ${this.date}.`
    }

    getDescription() {
        return this.description
    }

    set setTotalLikes(likes) {
        this.likes = likes
    }

    set setTotalComments(comments) {
        this.comments = comments
    }

    set setDate(date) {
        this.date = date
    }

    set setDescription(description) {
        this.description = description
    }

}

const profile = new user("innovaccionvirtual", "Innovacción virtual", 27, 5876, 19)
const bio = new biography("Education", "Buscamos reducir la brecha entre la formación profesional y las necesidades del emrcado laboral.", "linktr.ee/innovaccionvirtual")
const post = new posts(363, 0, "April 16, 2022", "¿Existe un día del Hardware Libre?")

console.log("Profile of Instagram")
console.log("Username: " + profile.username)
console.log("Total of posts: " + profile.getTotalPosts)
console.log(profile.getGeneralInfo)

console.log("About " + profile.name + ": " + bio.description)
console.log("Link: " + bio.link)

console.log("Post: " + post.getDescription())
console.log("Total of likes: " + post.getTotalLikes())
console.log("Total of comments: " + post.getTotalComments())
console.log(post.getDate())

post.likes = 199
post.comments = 0
post.setDate = "April 21, 2022"
post.description = "Hoy en el día de la creatividad y la innovación, te dejamos algunos tips para que tus ideas fluyan lo suficiente y logres llegar al punto más alto y destaques en este ámbito."

console.log("New post")
console.log("Post: " + post.description)
console.log("Total of likes: " + post.getTotalLikes())
console.log("Total of comments: " + post.getTotalComments())
console.log(post.getDate())
