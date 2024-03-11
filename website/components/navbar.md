---
description: NavBar in your webpage made easy with NxetGenCSS
---

# NavBar



## NavBar

* <mark style="color:yellow;background-color:yellow;">⚠Note:- There are still some bugs in NavBar , So use it on your own risk .</mark>

```html
<nav class="navbar bg-leaf mg-b-2">
    <div class="logo">Blog Name</div>
        <!-- NAVIGATION MENU -->
        <ul class="nav-links">
            <!-- USING CHECKBOX HACK -->
            <input type="checkbox" id="checkbox_toggle" />
            <!--Hamburger for navbar-->
            <label for="checkbox_toggle" class="hamburger">&#9776;</label> 
            <!-- NAVIGATION MENUS -->
            <div class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </div>
        </ul>
    </div>
</nav>
```

<figure><img src="../.gitbook/assets/Screenshot 2024-01-17 163817.png" alt=""><figcaption><p>On Monitors or big devices</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2024-01-17 163850.png" alt=""><figcaption><p>On small devices like smart phones etc.</p></figcaption></figure>
