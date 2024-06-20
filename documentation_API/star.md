# Star API Spesification
## 

- Endpint : POST /api/star
- Request Body :
``` json
{
    "id_star": "xxxx",
    "star_name": "Star Wars",
    "vote_average": "1.000",
    "vote_count": "9000"
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
            "id_star": "xxxx",
            "star_name": "Star Wars",
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

## Get Star API 
- Endpint : GET /api/star
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_star": "xxxx",
            "star_name": "Star Wars",
            "genres": "Adventure, Action"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Star tidak ditemukan"],
    "message": "Get Star Gagal",
    "data": null
}
```

## Update Star API 
- Endpint : PUT /api/star
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "genres": [
        {
            "id_star": "xxx",
            "star_name": "Star Wars",
            "genres": "Adventure, Action"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Star tidak ditemukan"],
    "message": "Get Star Gagal",
    "data": null
}
```

## Delete Star API
- Endpint : DELETE /api/star/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Star berhasil",
    "data": [
        {
            "id_star": "xxxx",
            "star_name": "Star Wars",
            "vote_average": "1.000",
            "vote_count": "9000"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Star tidak ditemukan"],
    "message": "Delete Star Gagal",
    "data": null
}
```