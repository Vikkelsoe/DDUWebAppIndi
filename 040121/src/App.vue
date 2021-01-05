<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Vestskoven Gymnasium</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link" to="/">Nyheder</router-link>
          <router-link class="mdl-navigation__link" to="/uddannelser"
            >Uddannelser</router-link
          >
          <router-link class="mdl-navigation__link" to="/besoegos"
            >Besøg os</router-link
          >
          <router-link class="mdl-navigation__link" to="/teamdk"
            >Team Danmark</router-link
          >
          <router-link class="mdl-navigation__link" to="/kontaktos"
            >Kontakt os</router-link
          >
          <router-link id="submenu" class="mdl-navigation__link" to="#"
            >Profil</router-link
          >
        </nav>
        <ul
          class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
          for="submenu"
        >
          <li class="mdl-menu__item">
            <router-link
              id="subMenuLink"
              class="mdl-navigation__link"
              to="/login"
              >Log ind</router-link
            >
          </li>
          <li class="mdl-menu__item">
            <router-link
              id="subMenuLink"
              class="mdl-navigation__link"
              to="/skema"
              >Skema</router-link
            >
          </li>
          <li class="mdl-menu__item">
            <router-link
              id="subMenuLink"
              class="mdl-navigation__link"
              to="/afleveringer"
              >Afleveringer</router-link
            >
          </li>
        </ul>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Vestskoven Gymnasium</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/">Nyheder</router-link>
        <router-link class="mdl-navigation__link" to="/uddannelser"
          >Uddannelser</router-link
        >
        <router-link class="mdl-navigation__link" to="/besoegos"
          >Besøg os</router-link
        >
        <router-link class="mdl-navigation__link" to="/teamdk"
          >Team Danmark</router-link
        >
        <router-link class="mdl-navigation__link" to="/kontaktos"
          >Kontakt os</router-link
        >
        <router-link class="mdl-navigation__link" to="#">Profil</router-link>
        <ul>
          <li class="mdl-navigation__link">
            <router-link id="subMenuLink" to="/login">Log ind</router-link>
          </li>
          <li class="mdl-navigation__link">
            <router-link id="subMenuLink" to="/skema">Skema</router-link>
          </li>
          <li class="mdl-navigation__link">
            <router-link id="subMenuLink" to="/afleveringer"
              >Afleveringer</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view />
      </div>
    </main>
  </div>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<style>
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: black;
}

.vtmarg {
  margin-top: 30px;
  margin-left: 1%;
}

#subMenuLink {
  color: black;
  text-decoration-line: none;
}

#card {
  float: left;
  padding: 0.75%;
}

#form {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
