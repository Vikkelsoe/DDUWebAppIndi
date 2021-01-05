<template>
  <section class="hero">
    <div class="hero-inner">
      <h2>Velkommen til</h2>
      <h1>Vestskoven Gymnasium</h1>
      <router-link class="btn" to="/login">Log ind</router-link>
    </div>
  </section>

  <section class="vtmarg">
    <h2>Nyheder</h2>
    <p>
      Velkommen til Vestskoven Gymnasium. Herunder findes de seneste nyheder.
    </p>
    <div id="card">
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">Nyt bordfodboldbord i kantinen</h2>
        </div>
        <div class="mdl-card__media">
          <img
            src="https://fodboldborde.dk/wp-content/uploads/2019/03/custom-B90-Rustic.png"
            width="250"
            height="180"
            border="0"
            alt=""
            style="padding: 10px"
          />
        </div>
        <div class="mdl-card__supporting-text">
          Så er der blevet indkøbt et nyt og lækkert bordfodboldbord til
          kantinen. Pas godt på det. Peace out motherfuckers.
        </div>
      </div>
    </div>

    <div id="card">
      <div class="mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
          <h2 class="mdl-card__title-text">God juleferie!</h2>
        </div>
        <div class="mdl-card__media">
          <img
            src="https://www.thai-property-group.com/wp-content/uploads/2020/12/SpecialEvents_XmasFest_EH.jpg"
            width="300"
            height="180"
            border="0"
            alt=""
            style="padding: 10px"
          />
        </div>
        <div class="mdl-card__supporting-text">
          Skønne elever, I må have en god og velfortjent juleferie. Vi ses i det
          nye år mandag d. 4. januar. Peace out motherfuckers.
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  /* Sizing */
  width: 100vw;
  height: 100vh;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white;

  /* Background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://cubo.dk/wp-content/uploads/2020/08/BD-BD2002518-10.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero .btn {
  /* Positioning and sizing */
  display: block;
  width: 200px;

  /* Padding and margins */
  padding: 1em;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  /* Text styles */
  color: white;
  text-decoration: none;
  font-size: 1.5em;

  /* Border styles */
  border: 3px solid white;
  border-radius: 20px;

  /* Background styles */
  background-color: rgba(255, 166, 0, 0.658);
}
</style>
