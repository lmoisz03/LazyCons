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
  return <img src={avatar} />;
};
```

Next.js:

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
    setAvatar(avatar);
  }, []);
  return <img src={avatar} />;
};
```

Why is it different? Well, because next.js is server side rendered. It'll not be executed
until the page is loaded. So, we couldnt access to 'document' object.

### Warning

Due to the nature of the library, if there are changes on the library, the
generated avatar will be different from the previous one. This is because the
library uses math operations that may change the result even if the seed is the
same. I will try to fix this in the future. But i recommend to save the avatar in
file in order to keep the avatar as unique as possible.

### Note:

I will make this library adaptable to environments. For example, you cant use it on node.js for now.
I want to improve the algorithm for the generation of the avatars and make them more visually beautiful.
When a new version of the library is released, it'll change the previous proccess of generating the avatar.
