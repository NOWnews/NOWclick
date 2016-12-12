# Api 文件

## Baisc
### baseUrl `http:localhost:3000/api/[version]`

### Header Parameters

| 參數名稱 | 解釋 | 型態(或列舉) | 是否需要 | 範例 |
|---|---|---|---|---|
| X-NOWnews-API | 驗證是否有存取 api 權限的 token，目前為固定的值 | [`NOWnewsTaiwanNumberOne`] | √ | `request.header['X-NOWnews-API'] = 'NOWnewsTaiwanNumberOne'` |

### State Code

```
suceess: 200
faild: 400
```

### Error Response

```
{
    type: "error",
    message: "xxxx"
}

- - -

## Version: v1

### Announce（系統公告）

#### `GET` /announces

取得系統公告

##### Response Data

```
[{
    endTime: 'xxxx-xx-xx 00:00:00',
    startTime: 'xxxx-xx-xx 00:00:00',
    content: '',
    type: 'COMMON',
}]
```

### Version (設備版本)

#### `GET` /version?deviceType

將對應 deviceType 的最新版本回傳

##### Query String

- deviceType: IOS/ANDROID/BOX

##### Response Data

```
{
    result: [{
        apkUrl: '',
        publishedDate: 'xxxx-xx-xx',
        version: '',
    }]
}
```
### Channel（頻道）

#### `GET` /channels

取得頻道列表

##### Response Data

```
{
    result: [{
        未知...
    }]
}
```

### Movie（電影）

#### `GET` /movies

取得電影列表

##### Response Data

```
{
    result: [{
        未知...
    }]
}
```

### Device（設備）

#### `POST` /device

建立 Device

##### Req.body

```
{
    result: {
        identifier,
        model,
        osVersion,
        token,
        type: BOX/IOS/ANDROID,
    }
}
```
##### Response Data

```
{
    result: {
        // 完整的 Device Modal
        // id, 建立時間 ...
    }
}
```

#### `PUT` /device/:deviceId

更新設備

##### Req.body

```
{
    result: {
        // 目前傳什麼就改什麼
    }
}
```

##### Response Data

回傳 StateCode，失敗才有訊息

