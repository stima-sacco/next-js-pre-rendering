## SCOPE

- *__getStaticProps__* runs only on the server side.
- will never run on client-side
- The code you write inside *__getStaticProps__* wont even be included in the JS bundle that is sent to the browser.
- You can write server-side code directly in *__getStaticProps__*
- Accessing the file system using the fs module or querying a database can be done inside *__getStaticProps__*
- You also dont have to worry about including API keys in *__getStaticProps__* as that wont make it to the browser.
- *__getStaticProps__* is allowed only in a page and cannot be run from a regular component file.
- It is used only for pre-rendering and not client-side data fetching.
- *__getStaticProps__* should return an object and object should contain a props key which is an object.
- *__getStaticProps__* will run at build time.
- During development, *__getStaticProps__* runs on every request