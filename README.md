# URL Shortener Project

This is a simple URL shortener project built with Express.js and MongoDB. It allows users to shorten long URLs into shorter, more manageable links. Users are provided with a stateful authentication system, but if they reload the page then they will be logged out and also their session cookie has to be cleared manually.

## Installation

Before running the application, make sure you have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com/) installed on your system.

1. Clone this repository to your local machine:

```bash
    git clone https://github.com/your-username/url-shortener.git
```

2. Navigate to the project directory:

```bash
    cd url-shortener
```

3. Install the dependencies:

```bash
    npm install
```

## Dependencies
1. Express.js: Fast, unopinionated, minimalist web framework for Node.js.
2. Mongoose: Elegant MongoDB object modeling for Node.js.
3. Shortid: Short id generator. Perfect for generating short IDs for MongoDB documents.