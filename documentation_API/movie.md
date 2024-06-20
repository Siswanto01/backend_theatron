# Movie API Spesification
## 

- Endpint : POST /api/movie
- Request Body :
``` json
{
    "id_movie": "xxxx",
    "movie_name": "Star Wars",
    "poster_path": "xxxx",
    "backdrop_path": "xxxxxx"
}
```

- Response Sucess :
- http code : 201
``` json
{
    "errors": null,
    "message": "Pencarian Berhasil",
    "data": [
        {
            "id_movie": "xxxx",
            "movie_name": "Star Wars"
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Film tidak ditemukan"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Get Movie API 
- Endpint : GET /api/movie
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_movie": "xxxx",
            "movie_name": "Star Wars"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Movie tidak ditemukan"],
    "message": "Get Movie Gagal",
    "data": null
}
```
## Update Movie API 
- Endpint : PUT /api/movie
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "genres": [
        {
            "id": "xxx",
            "name": "Adventure",
            "movie_name": "Star Wars"
        },
        {
            "id": "xxx",
            "name": "Action",
            "movie_name": "Star Wars"
        },
        {
            "id": "xxx",
            "name": "Science Fiction",
            "movie_name": "Star Wars"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Movie tidak ditemukan"],
    "message": "Get Movie Gagal",
    "data": null
}
```
## Delete Movie API
- Endpint : DELETE /api/movie/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Movie berhasil",
    "data": [
        {
            "id_movie": "xxxx",
            "movie_name": "Star Wars",
            "poster_path": "xxxx",
            "backdrop_path": "xxxxxx"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Movie tidak ditemukan"],
    "message": "Delete Movie Gagal",
    "data": null
}
```