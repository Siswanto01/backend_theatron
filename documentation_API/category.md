# Category API Spesification
## 

- Endpint : POST /api/category
- Request Body :
``` json
{
    "id_category": "xxxx",
    "genres": "Action, Anventure, Fantasy",
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
            "id_category": "xxxx",
            "genres": "Action, Anventure, Fantasy"
        }
    ]
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Category tidak ditemukan"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Get Category API 
- Endpint : GET /api/category
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "data": [
        {
            "id_category": "xxxx",
            "genres": "Action, Anventure, Fantasy"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["category tidak ditemukan"],
    "message": "Get category Gagal",
    "data": null
}
```

## Update Category API 
- Endpint : PUT /api/category
- Header : Authorization : Bearer <acess_token>
- Request Body :
- http code : 201

``` json
{
    "Error": null,
    "genres": [
        {
            "id_category": "xxxx",
            "genres": "Action"
        },
        {
            "id_category": "xxxx",
            "genres": "Adventure"
        },
        {
            "id_category": "xxxx",
            "genres": "Fantasy"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Category tidak ditemukan"],
    "message": "Get Category Gagal",
    "data": null
}
```

## Delete Movie API
- Endpint : DELETE /api/category/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "message": "Delete Category berhasil",
    "data": [
        {
            "id_category": "xxxx",
            "genres": "Action, Anventure, Fantasy",
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Category tidak ditemukan"],
    "message": "Delete Category Gagal",
    "data": null
}
```