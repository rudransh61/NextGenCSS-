
# Code Structure

SCSS is used for NextGenCSS .

The Main SCSS file is ```./src/index.scss```.

Then this SCSS file is converted in CSS file located at ```./src/final/index.css/index.css/```

And this CSS file is minified and stored it into ```./src/index.css``` file.

## Important Note

For converting SCSS into CSS 
```bash 
 $ npm run scss
```

For converting that CSS file into minified CSS
```bash
 $ npm run next-gen-css
```

Or for automating both the commands , run ```./build.sh``` only.
```bash
 $ ./build.sh
```

## SCSS code file structure

The SCSS code in in ```./src``` directory , And it is divided into different folders

 - ```./base``` : It includes all the basic styles for elements , and basic utilities like border , buttons and some optimizations for faster rendering .
 - ```./components``` : It custom components like 'box' , 'card' and etc.
 - ```./fonts``` : It includes all styles related to fonts
 - ```./form``` : It includes all styles for a form
 - ```./grid``` : It includes grid system and styles related to them.
 - ```./utilities``` : It includes all utility classes like align , display , padding , margin and etc ...
 - ```./variables``` : It includes all variables used in all styles and color variables also
  
