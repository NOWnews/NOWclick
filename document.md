# Api 文件

baseUrl = http:localhost:3000/api/[version]

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
