# Detail_Movie API Spesification
## 

- Endpint : POST /api/detail_movie
- Request Body :
``` json
{
    "id_movie": "xxxx",
    "movie_name": "Star Wars",
    "poster_path": "xxxx",
    "backdrop_path": "xxxxxx",
    "budget": "Rp 100.000",
    "genres": "Adventure, Action",
    "release_date": "01-06-2024",
    "video": false,
    "vote_average": "1.000",
    "vote_count": "9000",
    "production_companies": "US",
    "original_language": "en"
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
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "genres": "Adventure, Action",
            "vote_average": "1.000",
            "vote_count": "9000",
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Detail Film tidak ditemukan"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Get Detail_Movie API 
- Endpint : GET /api/detail_movie
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_movie": "xxxx",
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "genres": "Adventure, Action",
            "vote_average": "1.000",
            "vote_count": "9000",
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Detail_Movie tidak ditemukan"],
    "message": "Get Detail_Movie Gagal",
    "data": null
}
```

## Update Detail_Movie API 
- Endpint : PUT /api/detail_movie
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
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "release_date": "01-06-2024",
            "production_companies": "US"
        },
        {
            "id": "xxx",
            "name": "Action",
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "release_date": "01-06-2024",
            "production_companies": "US"
        },
        {
            "id": "xxx",
            "name": "Science Fiction",
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "release_date": "01-06-2024",
            "production_companies": "US"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Detail_Movie tidak ditemukan"],
    "message": "Get Detail_Movie Gagal",
    "data": null
}
```
## Delete Detail_Movie API
- Endpint : DELETE /api/detail_movie/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Detail_Movie berhasil",
    "data": [
        {
            "id_movie": "xxxx",
            "movie_name": "Star Wars",
            "budget": "Rp 100.000",
            "genres": "Adventure, Action",
            "vote_average": "1.000",
            "vote_count": "9000",
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Detail_Movie tidak ditemukan"],
    "message": "Delete Detail_Movie Gagal",
    "data": null
}
```