---
description: Flex Utility
---

# Flex



## Flex

To set `display:flex;`  use `.flex` class&#x20;

Some properties in flex



* `.flex-item`
* `.flex-row`
* `.flex-col`
* `.flex-wrap`
* `.flex-start`
* `.flex-end`
* `.flex-center`
* `.flex-stretch`
* `.flex-space`



## Compiled as

```scss
//flex - box
.flex {
    display: flex;
    .flex-item {
        flex: 1;
    }
    .flex-row{
        flex-direction: row;
    }
    .flex-col{
        flex-direction: column;
    }
    .flex-wrap{
        flex-wrap: wrap;
    }
    .flex-start{
        justify-content: flex-start;
    }
    .flex-end{
        justify-content: flex-end;
    }
    .flex-center{
        justify-content: center;
    }
    .flex-stretch{
        justify-content: stretch;
    }
    .flex-space{
        justify-content: space-around;
    }
}

```
