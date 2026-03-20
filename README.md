# rest-example

This project is a REST API example for managing music tracks. It is built with Java using Jersey for REST services, Grizzly as the HTTP server, and Swagger for API documentation.

## High-Level Server Structure

```mermaid
graph TD
    A[HTTP Client] --> B[Grizzly Server]
    B --> C[Static Content Handler<br/>/public]
    C --> D[Public Files<br/>index.html]
    C --> E[Swagger UI<br/>/public/swagger]
    B --> F[REST API Handler<br/>/dsaApp]
    F --> G[TracksService<br/>TextService]
```

## Main Architecture

```mermaid
graph TD
    subgraph Servicios
        B[TracksService]
        C[TextService]
    end
    subgraph Domain
        B
        I[TracksManager]
        D[TracksManagerImpl]
        E[Track]
        Dummy1[ ]
        Dummy2[ ]
        Dummy3[ ]
    end
    A[HTTP Client] --> B
    A --> C
    B --> I
    I --> D
    D --> E
    F[Main] --> G[Grizzly Server]
    G --> B
    G --> C
    H[MyExceptionMapper] --> G
```

### Main Components:
- **Main**: Main class that serves as the entry point. Internally, it configures a ResourceConfig to scan for JAX-RS resources in the "edu.upc.dsa.services" package, registers Swagger resources (ApiListingResource and SwaggerSerializers), sets up BeanConfig for API documentation with host, base path, and scanning enabled, creates and starts a Grizzly HTTP server at "http://localhost:8080/dsaApp/", and adds a StaticHttpHandler to serve static content from the "./public/" directory.
- **TracksService**: REST service that exposes endpoints to manage tracks (GET, POST, etc.).
- **TextService**: Simple REST service for text responses.
- **TracksManager**: Interface and implementation for the business logic of track management.
- **Track**: Data model representing a music track.
- **MyExceptionMapper**: Exception mapper to handle API errors.
- **TrackNotFoundException**: Custom exception for tracks not found.
