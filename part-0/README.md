## Excercise 0.4

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

-------------------------

![image](https://user-images.githubusercontent.com/44131347/126808851-2e3a2f86-5c31-4cb5-a867-29ae2db5cdb5.png)

## Excercise 0.5

## Excercise 0.6
