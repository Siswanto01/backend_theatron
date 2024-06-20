# Users API Spesification
## Register Body

- Endpint : POST /api/users
- Request Body :
``` json
{
    "name": "Wanto",
    "email": "wanto10@gmail.com",
    "confirmation": "password",
    "password": "123456"
}
```

- Response Sucess :
- http code : 201
``` json
{
    "error": null,
    "message": "Register akun berhasil",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ]
}
```

- Response Error :
- http code : 401

``` json
{
    "error": ["Email harus diisi", "Password harus diisi"],
    "message": "Prosess Gagal",
    "data": null
}
```
- Response Error :
- http code : 501

``` json
{
    "error": ["Email harus diisi", "Password harus diisi"],
    "message": "Prosess Gagal",
    "data": null
}
```
## Email Activation Akun

- Endpint : GET /api/users/:uuid link di kirimkan ke email untuk di klik activation
- Response Sucess :
- http code : 201
``` json
{
    "error": null,
    "message": "Akun anda telah aktif",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ]
}  

- Response Error :
- http code : 401
``` json
{
    "error": ["Activasi sudah expired"],
    "message": "Prosess Gagal",
    "data": null
}
```

## Login users API

- Endpint : POST /api/userss/login
- Request Body : 

``` json
{
    "email": "wanto10@gmail.com",
    "password": "123456"
} 
```
- Response Sucess :
- http code : 201
``` json
{
    "Error": null,
    "message": "Login Sucess",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ],
    "acess_token": "xxxxxxxxxxxxxxxxxx",
    "refresh_token": "xxxxxxxxxxxxxxxxxx"
}
```

- Response Error :
- http code : 401
``` json
{
    "error": ["Email atau Password salah"],
    "message": "Prosess Gagal",
    "data": null
}
```
## Refresh Token 
- Endpint : POST /api/users/refresh
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json
{
    "Error": null,
    "message": "Refresh token berhasil",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ],
    "acess_token": "xxxxxxxxxxxxxxxxxx",
    "refresh_token": "xxxxxxxxxxxxxxxxxx"
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["Token tidak valid"],
    "message": "Prosess Gagal",
    "data": null
}
```
## Get users API
- Endpint : GET /api/users/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201

``` json 
{
    "Error": null,
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["users tidak ditemukan"],
    "message": "Get users Gagal",
    "data": null
}
```

## Update users API
- Endpint : PUT /api/v1/users/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
``` json
{
    "name": "Wanto",
    "email": "wanto10@gmail.com",
    "password": "123456"
}
```
- Response Sucess :
- http code : 201
``` json 
{
    "Error": null,
    "message": "Update users berhasil",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["users tidak ditemukan"],
    "message": "Update users Gagal",
    "data": null
}
```
## Delete users API
- Endpint : DELETE /api/users/:id
- Header : Authorization : Bearer <acess_token>
- Request Body :
- Response Sucess :
- http code : 201
``` json 
{
    "Error": null,
    "message": "Delete users berhasil",
    "data": [
        {
            "id": "xxxx",
            "name": "Wanto",
            "email": "wanto10@gmail.com"
        }
    ]
}
```
- Response Error :
- http code : 401
``` json
{
    "error": ["users tidak ditemukan"],
    "message": "Delete users Gagal",
    "data": null
}
```