require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitHUBData = {
    "login": "Balaji19970912",
    "id": 36842756,
    "node_id": "MDQ6VXNlcjM2ODQyNzU2",
    "avatar_url": "https://avatars.githubusercontent.com/u/36842756?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Balaji19970912",
    "html_url": "https://github.com/Balaji19970912",
    "followers_url": "https://api.github.com/users/Balaji19970912/followers",
    "following_url": "https://api.github.com/users/Balaji19970912/following{/other_user}",
    "gists_url": "https://api.github.com/users/Balaji19970912/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Balaji19970912/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Balaji19970912/subscriptions",
    "organizations_url": "https://api.github.com/users/Balaji19970912/orgs",
    "repos_url": "https://api.github.com/users/Balaji19970912/repos",
    "events_url": "https://api.github.com/users/Balaji19970912/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Balaji19970912/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Balaji S Tanganoor",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 39,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2018-02-26T09:42:19Z",
    "updated_at": "2023-09-30T07:40:13Z"
  }  

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('twitter is there')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Login Balaji</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<a href="www.youtube.com" target="_blank">YOUTUBE</a>')
})

app.get('/github',(req,res)=>{
    res.json(gitHUBData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})