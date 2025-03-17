// Required methods: 
// fetchPosts() - fetches the data and stores it internally. Returns a promise to let the consumer code know the operation is done. (Data - https://jsonplaceholder.typicode.com/posts)
// listPosts() - returns the whole set of posts sorted alphabetically by titles
// getPost(id) - returns the post object with given id
// clearPosts() - deletes all the stored posts

// Optionally: use Map for storing the posts.
class DataHandler {
    constructor() {
        this.dataMap = new Map();
    }
    async fetchPosts() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const userData = await response.json()
            this.dataMap = new Map(userData.map(item => [item.id, item]))
            console.log("The operation is done");
            return "Data fetched successfully";
        }
        catch (error) {
            console.error("The operation is failed", error);
            throw new Error("Failed to fetch posts");
        }
    }
    listPosts() {
        const mapSort = [...this.dataMap.values()].sort((a, b) =>
            a.title.localeCompare(b.title));
        mapSort.forEach((posts) => {
            console.log(`userId: ${posts.userId} id: ${posts.id}, title: ${posts.title}, body: ${posts.body}`);
        });


    }
    getPost(id) {
        return this.dataMap.get(id)
    }

    clearPosts() {
        this.dataMap.clear()
    }


}
const f = new DataHandler()
f.fetchPosts().then(() => {
    f.listPosts();
    console.log(f.getPost(4))
}).catch(error => {
    console.error(error);
});







