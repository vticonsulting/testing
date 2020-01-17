
## Standards

- No scoped styles, if you need specificity, give the component a class and use the class instead.


```html
<style scoped>
.visually-hidden {
 
}
</style>
```

```html
<template>
  <div class="component">
  
  </div>
</template>

<style>
.component { }
</style>
```