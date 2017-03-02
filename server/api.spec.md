###API Specification
* prefix /api

##Category resource
* Sample Request
    * GET /categories
    * POST /categories
    ```
    {
        "name": "Goi massage",
        "slug": "Goi-massage",
    }
    ```
    * POST /categories/:categoryId
    ```
    {
        "name": "Goi massage",
        "slug": "Goi-massage",
        "parentId": "43298742qsaAdJ"
    }
    ```
* Sample Response
    * GET /categories
    ```
    [
        {
            "name": "Goi massage"
        }, 
        {
            "name": "Quan sip" 
        }
    ]
    ```