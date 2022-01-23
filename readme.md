<!-- Readme skeleton -->

## LazyCons

### Introduction

This is is a small library that allows you to create ugly, lazy, but unique avatars
in react. It uses sha256 to generate the hash and multiple math operations to
generate the avatar. Each color, sizes, coorddinates for shapes are generated
by using the generated hash for the seed. They may be changed if you want to
specify some custom values.

### Usage example

React:

```js
import genIcon from "lazycons";

export default app = () => {
  const avatar = genIcon({
    seed: "myseed", // A seed is string that is used to generate the hash
    size: 100, // The size of the canvas where the avatar will be drawn
    opts: {
      // Max figures is the maximum number of figures that will be drawn. Default is 8
      maxFigures: 40, // Not greater than 40.
    },
  });
  // The result is a data64 url of the avatar
  return <img src={avatar} />;
};
```

Second example:

```js
import genIcon from "lazycons";

export default app = () => {
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    const avatar = genIcon({
      seed: "myseed", // A seed is string that is used to generate the hash
      size: 100, // The size of the canvas where the avatar will be drawn
      opts: {
        // Max figures is the maximum number of figures that will be drawn. Default is 8
        maxFigures: 40, // Not greater than 40.
      },
    });
    // The result is a data64 url of the avatar
    setAvatar(avatar);
  }, []);
  return <img src={avatar} />;
};
```

### Warning

Due to the nature of the library, if there are changes on the library, the
generated avatar will be different from the previous one. This is because the
library uses math operations that may change the result even if the seed is the
same. I will try to fix this in the future. But i recommend to save the avatar in
file in order to keep the avatar as unique as possible.
