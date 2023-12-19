# Peer-to-Peer File Sharing

This project is a simple peer-to-peer file sharing application. It uses Express for the server, and PeerJS for peer-to-peer networking.

The application consists of two pages:

- Page A (`http://localhost:8000/a`): This page allows a user to select a file and send it to another user. The file is encrypted before being sent and decrypted after being received. The user can also download the received file.

- Page B (`http://localhost:8000/b`): This page allows a user to receive files from another user. The user can also download the received file.

The application uses a PeerJS server (`http://localhost:9000/myapp`) to handle the peer-to-peer connections.

## Running the project

You can run the project either with Docker or with npm.

### Running with Docker

1. Build the Docker image:

```bash
docker build -t peer-to-peer-file-sharing .
```

2. Run the Docker container:

```bash
docker run -p 8000:8000 peer-to-peer-file-sharing
```

The application will be available at `http://localhost:8000`.

### Running with npm

1. Install the dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

The application will be available at `http://localhost:8000`.

## source
https://code-boxx.com/simple-webrtc-javascript-nodejs/