This is just a demonstration of the grid system. For real projects avoid using the predefined `.col` and `.row` classes—they are just for illustrative purposes. Instead use the `row` and `span-cols(n)` mixins to define a semantic grid.

For example, with this HTML:

```
<main>
  <aside></aside>
  <article></article>
</main>
```

You can do this:

```
main { @include row; }
aside { @include span-cols(3); }
article { @include span-cols(9); }
```

You can then change the number of columns elements span at different breakpoints.
