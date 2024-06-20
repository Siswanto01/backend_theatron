# Director API Spesification
## 

- Endpint : POST /api/director
- Request Body :
``` json
{
    "id_director": "xxxx",
    "director_name": "Wes Ball",
    "movie_name": "Kerajaan Planet Kera"
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
            "id_director": "xxxx",
            "director_name": "Wes Ball"
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Director tidak ditemukan"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Get Director API 
- Endpint : GET /api/director
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_director": "xxxx",
            "director_name": "Wes Ball"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["director tidak ditemukan"],
    "message": "Get director Gagal",
    "data": null
}
```

## Update Director API 
- Endpint : PUT /api/director
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "genres": [
        {
            "id_director": "xxxx",
            "director_name": "Wes Ball",
            "movie_name": "Kerajaan Planet Kera"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Director tidak ditemukan"],
    "message": "Get Director Gagal",
    "data": null
}
```

## Delete Director API
- Endpint : DELETE /api/director/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Director berhasil",
    "data": [
        {
            "id_director": "xxxx",
            "director_name": "Wes Ball",
            "movie_name": "Kerajaan Planet Kera"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Director tidak ditemukan"],
    "message": "Delete Director Gagal",
    "data": null
}
```