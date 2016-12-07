# Api 文件

## Baisc
### baseUrl `http:localhost:3000/api/[version]`

### Header Parameters

| 參數名稱 | 解釋 | 型態(或列舉) | 是否需要 | 範例 |
|---|---|---|---|---|
| X-NOWnews-API | 驗證是否有存取 api 權限的 token，目前為固定的值 | [`NOWnewsTaiwanNumberOne`] | √ | `request.header['X-NOWnews-API'] = 'NOWnewsTaiwanNumberOne'` |

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
    willShutdownServer: true,
}]
```
