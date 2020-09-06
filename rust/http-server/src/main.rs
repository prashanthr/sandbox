// https://dfockler.github.io/2016/05/20/web-server.html

// In Rust we need to tell it where things are from, 
// in this case we are using the read_to_string method
// so we need to bring in the std::io::Read
// module to the party. We also need TcpListener and
// TcpStream
use std::io::{Read, Write, BufReader, BufRead};
use std::net::{TcpListener, TcpStream};

fn main() {
    // bind allows us to create a connection on the port
    // and gets it ready to accept connections.
    let listener = TcpListener::bind("127.0.0.1:5432").unwrap();
    
    // The listener's accept method waits or 'blocks' until
    // we have a connection and then returns a new TcpStream
    // that we can read and write data to.
    let stream = listener.accept().unwrap().0;
    read_request(stream);
}

// This function takes the stream we just got from the
// listener and then reads some data from it.
fn read_request(mut stream: TcpStream) {
    let mut reader = BufReader::new(stream);

    for line in reader.by_ref().lines() {
        if line.unwrap() == "" {
            break;
        }
    }

    send_response(reader.into_inner());
}

// New function to write back with!
fn send_response(mut stream: TcpStream) {
    // Write the header and the html body
    let response = "HTTP/1.1 200 OK\n\n<html><body>Hello, World!</body></html>";
    stream.write_all(response.as_bytes()).unwrap();
}