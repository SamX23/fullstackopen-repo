## Excercise 0.4

```sh
  title Create notes flow

  actor A

  A->browser: Type notes on input field
  A->browser: Hit submit button

  note over browser:
  browser submits user input value 
  as POST to form actions URL 
  end note

  browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
  server->browser: Response code 302

  note over server:
  server receive the POST and 
  send a redirection to the notes list url
  end note

  browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
  server->browser: HTML code
  browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
  server->browser: main.css
  browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
  server->browser: main.js

  note over browser:
  browser starts executing js-code
  that requests JSON data from server 
  end note

  browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
  server-->browser: [{ content: "text", date: "2019-05-23" }, ...]

  note over browser:
  browser executes the event handler
  that renders notes to display
  end note

  browser->A: render a list of notes
```

-------------------------

![image](https://user-images.githubusercontent.com/44131347/126808851-2e3a2f86-5c31-4cb5-a867-29ae2db5cdb5.png)

## Excercise 0.5
```sh
title Visits web flow

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: Response code 302

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: HTML code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "text", date: "2019-05-23" }, ...]

note over browser:
browser renders a list of notes
end note
```

-------------------------

![image](https://user-images.githubusercontent.com/44131347/126811390-5b4f46b3-9881-491b-a2d0-0a429132aaaf.png)

## Excercise 0.6

```sh
title Submit notes on SPA

actor A

A->browser: typing on input field and click save

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server->browser: Response code 200

note over browser:
browser user javascript to fetch 
the notes directly from server
end note

browser->A: Fetch and update the notes from server
```

![image](https://user-images.githubusercontent.com/44131347/126856026-c1dbe11f-4fd5-422c-aeef-7b5d402efe52.png)

