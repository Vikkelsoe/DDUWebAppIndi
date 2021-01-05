<template>
  <section class="besoeghero">
    <div class="hero-inner">
      <h1>Besøg os</h1>
    </div>
  </section>

  <p class="vtmarg">
    Kom til orienteringsaften og hør om STX, HTX, HHX og HF på Vestkoven
    Gymnasium. Vi glæder os til at se dig mandag d. 11. januar kl. 19.00.
    <br />
    Kunne du tænke dig at være elev på Vestkoven for en dag? Udfyld formularen
    herunder, og så kontaker vi dig.
  </p>

  <div id="form" class="mdl-card mdl-shadow--6dp">
    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
      <h2 class="mdl-card__title-text">Prøv en dag som elev!</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="name" />
          <label class="mdl-textfield__label" for="name">Navn</label>
        </div>

        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="password" id="email" />
          <label class="mdl-textfield__label" for="email">Email</label>
        </div>

        <div
          class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
          <select
            class="mdl-textfield__input"
            id="currentClass"
            name="currenClass"
          >
            <option></option>
            <option value="10">10. klasse</option>
            <option value="9">9. klasse</option>
            <option value="8">8. klasse</option>
            <option value="other">Andet</option>
          </select>
          <label class="mdl-textfield__label" for="currentClass"
            >Nuværende klasse</label
          >
        </div>

        <div
          class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
        >
          <select class="mdl-textfield__input" id="wish" name="wish">
            <option></option>
            <option value="na">Ved ikke</option>
            <option value="stx">STX</option>
            <option value="htx">HTX</option>
            <option value="hhx">HHX</option>
            <option value="hf">HF</option>
          </select>
          <label class="mdl-textfield__label" for="wish"
            >Hvilken uddannelse vil du besøge?</label
          >
        </div>
      </form>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button
        class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
      >
        Send
      </button>
    </div>
  </div>

  <div id="card">
    <div class="pic1 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
  <div id="card">
    <div class="pic2 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
  <div id="card">
    <div class="pic3 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>

  <div id="card">
    <div class="pic4 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
  <div id="card">
    <div class="pic5 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
  <div id="card">
    <div class="pic6 mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand"></div>
    </div>
  </div>
</template>

<style>
.besoeghero {
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
    url(https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/117688852_4440116019332661_257928918648658402_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=diCw4RlDh-8AX-ms1JA&_nc_ht=scontent-cph2-1.xx&oh=413249ef48dbf8897ebbd0bf89893545&oe=601BEF5C);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.pic1.mdl-card {
  width: 39vw;
  height: 23vw;
  background: url("media/besog1.jpg") center / cover;
}
.pic2.mdl-card {
  width: 31vw;
  height: 23vw;
  background: url("media/besog2.jpg") center / cover;
}
.pic3.mdl-card {
  width: 24vw;
  height: 23vw;
  background: url("media/besog3.jpg") center / cover;
}

.pic4.mdl-card {
  width: 29vw;
  height: 23vw;
  background: url("media/besog4.jpg") center / cover;
}
.pic5.mdl-card {
  width: 25vw;
  height: 23vw;
  background: url("media/besog5.jpg") center / cover;
}
.pic6.mdl-card {
  width: 40vw;
  height: 23vw;
  background: url("media/besog6.jpg") center / cover;
}
</style>
