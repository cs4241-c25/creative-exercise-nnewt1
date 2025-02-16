const http = require( "node:http" ),
    fs = require( "node:fs" ),
    port = 3000

const server = http.createServer( function( request,response ) {
    if( request.method === "GET" ) {
        handleGet( request, response )
    }else if( request.method === "POST" ){
        handlePost( request, response )
    }

    fullURL = `http://${request.headers.host}${request.url}`
    console.log( fullURL );
})

const handleGet = function( request, response ) {
    let filename = request.url.slice(1)

    if( request.url === "/" ) {
        sendFile( response, "index.html" )
    }else{
        sendFile( response, filename )
    }
}

handlePost = function( request, response ) {
    let dataString = ""

    request.on( "data", function( data ) {
        dataString += data
    })

    request.on( "end", function() {
        response.end( JSON.stringify( dataString ) )
    })
}

const sendFile = function( response, filename ) {
    fs.readFile( filename, function( err, content ) {
        response.end( content )
    })
}

server.listen( process.env.PORT || port)