# Author API Spesification
## 

- Endpint : POST /api/author
- Request Body :
``` json
{
    "id_author": "xxxx",
    "author_name": "Max Borenstein",
    "movie_name": "Godzilla X Kong",
    "contribution": "Penulis Film Sebelumnya"
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
            "id_author": "xxxx",
            "author_name": "Godzilla X Kong"
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Author tidak ditemukan"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Get Author API 
- Endpint : GET /api/author
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_author": "xxxx",
            "author_name": "Godzilla X Kong"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["author tidak ditemukan"],
    "message": "Get author Gagal",
    "data": null
}
```

## Update Author API 
- Endpint : PUT /api/author
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "genres": [
        {
            "id_author": "xxxx",
            "author_name": "Max Borenstein",
            "movie_name": "Godzilla X Kong",
            "contribution": "Penulis Film Sebelumnya"
        },
        {
            "id_author": "xxxx",
            "author_name": "Michael Dougherty",
            "movie_name": "Godzilla X Kong",
            "contribution": "Sutradara dan Penulis Film"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Author tidak ditemukan"],
    "message": "Get Author Gagal",
    "data": null
}
```

## Delete Author API
- Endpint : DELETE /api/author/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Author berhasil",
    "data": [
        {
            "id_author": "xxxx",
            "author_name": "Max Borenstein",
            "movie_name": "Godzilla X Kong",
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Author tidak ditemukan"],
    "message": "Delete Author Gagal",
    "data": null
}
```