# react-native-avatar-group

a component to display a group of avatars

## Installation

```sh
npm install react-native-fast-image
install via link github
```

## Usage

```js
import { HorizontalGroupAvatar } from "react-native-avatar-group";

// ...


```
## Screenshot

<table>
  <tr>
    <td><p align="center"><img src="/docs/notnumface.png" height="500"></p></td>
 <td><p align="center"><img src="/docs/numface1.png" height="500"></p></td>
  <td><p align="center"><img src="/docs/numface2.png" height="500"></p></td>
   <td><p align="center"><img src="/docs/numface3.png" height="500"></p></td>
  </tr>
</table>

## Example
```js
import { HorizontalGroupAvatar } from "react-native-avatar-group";

// ...
const FACES = [
    {
      id: 0,
      imageUrl: 'http://www.yojackets.com/wp-content/uploads/2016/04/Civil-War-Scarlet-Witch-Red-Coat-1.jpg',
      fullName: 'Kobe Pham'
    },
    {
      id: 1,
      imageUrl: 'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-2.jpg',
      fullName: 'Kobe',
    },
    {
      id: 2,
      imageUrl: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
      fullName: 'Jayne cran'
    },
    {
      id: 3,
      imageUrl: '',//'https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-fb-dep-chat-1.jpg',
      fullName: 'Jenifer Nguyen'
    },
  ];
// ...
  <HorizontalGroupAvatar
        faces={FACES}
        type={showType.horizontal}
        containerStyle={{
          marginBottom: 20
        }}
  />

  <HorizontalGroupAvatar
        faces={FACES}
        type={showType.circle}
  />

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
