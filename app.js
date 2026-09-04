const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node.js Docker App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f4f4;
          text-align: center;
          padding-top: 100px;
        }

        .container {
          background: white;
          width: 500px;
          margin: auto;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        h1 {
          color: #333;
        }

        p {
          color: #666;
          font-size: 18px;
        }

        .success {
          color: green;
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <div class="container">
        <h1>Node.js Docker Application</h1>
        <p class="success">Application is running successfully!</p>
        <p>Deployed using Node.js, Docker, Linux, GitHub and Docker Hub.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
