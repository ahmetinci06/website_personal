// index.ts
/*import { Bun, Response } from "bun";
import figlet from "figlet";

const app = new Bun();

app.route("/", (req) => {
    const body = figlet.textSync("Welcome to my website!");
    return new Response(
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>My Website</title>
                <style>
                    body { 
                        font-family: monospace 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        height: 100vh; 
                        margin: 0; 
                        background-color: #282c34; 
                        color: #61dafb; 
                    }
                </style>
            </head>
            <body>
                <pre>${body}</pre>
            </body>
        </html>
        `,
        { headers: { "Content-Type": "text/html" } }
    );
});

app.listen({ port: 3000 });

console.log("Server running on http://localhost:3000");
*/

Bun.serve({
    development: true,
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Home page!");
        if (url.pathname === "/blog") return new Response("Blog!");
        return new Response("404!");
        else
        throw new Error("woops!");
    },
});


console.log(Bun.version);