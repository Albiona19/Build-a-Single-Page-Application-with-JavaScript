const router = async () => {
    const routes = [
        {path: "/", view:()=> console.log('Viewing Dashboard')},
        {path: "/posts", view:()=> console.log('Viewing Posts')},
        {path: "/settings", view:()=> console.log('Viewing Settings')},


    ]

}