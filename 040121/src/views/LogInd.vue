<template>
  <div class="mdl-layout mdl-js-layout">
    <main class="mdl-layout__content">
      <h1>Log ind</h1>
      <div class="mdl-tabs mdl-js-tabs">
        <div class="mdl-tabs__tab-bar">
          <a id="navyTekst" href="#tab1-panel" class="mdl-tabs__tab is-active"
            >Log ind</a
          >
          <a id="navyTekst" href="#tab2-panel" class="mdl-tabs__tab"
            >Registrer ny bruger</a
          >
        </div>

        <!--Tab 1-->

        <div class="mdl-tabs__panel is-active" id="tab1-panel">
          <div id="form" class="mdl-card mdl-shadow--6dp">
            <div
              class="mdl-card__title mdl-color--primary mdl-color-text--white"
            >
              <h2 class="mdl-card__title-text">Log ind</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <form v-on:submit.prevent="sendForm1">
                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    id="username"
                    v-model="username"
                  />
                  <label class="mdl-textfield__label" for="username"
                    >Brugernavn</label
                  >
                </div>
                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="password"
                    id="userpass"
                    v-model="userpass"
                  />
                  <label class="mdl-textfield__label" for="userpass"
                    >Adgangskode</label
                  >
                </div>

                <div class="mdl-card__actions mdl-card--border">
                  <button
                    class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  >
                    Log ind
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!--Tab 2-->
        <div class="mdl-tabs__panel" id="tab2-panel">
          <div id="form" class="mdl-card mdl-shadow--6dp">
            <div
              class="mdl-card__title mdl-color--primary mdl-color-text--white"
            >
              <h2 class="mdl-card__title-text">Ny bruger</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <form v-on:submit.prevent="sendForm2">
                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    id="firstname"
                    v-model="firstname"
                  />
                  <label class="mdl-textfield__label" for="firstname"
                    >Fornavn</label
                  >
                </div>

                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    id="surname"
                    v-model="surname"
                  />
                  <label class="mdl-textfield__label" for="surname"
                    >Efternavn</label
                  >
                </div>

                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <select
                    class="mdl-textfield__input"
                    id="schoolClass"
                    name="schoolClass"
                    v-model="schoolClass"
                  >
                    <option></option>
                    <option value="1v">1.v</option>
                    <option value="1z">1.z</option>
                    <option value="2v">2.v</option>
                    <option value="2z">2.z</option>
                    <option value="3v">3.v</option>
                    <option value="3z">3.z</option>
                    <option value="tea">Lærer</option>
                  </select>
                  <label class="mdl-textfield__label" for="schoolClass"
                    >Klasse</label
                  >
                </div>

                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="text"
                    id="username"
                    v-model="username"
                  />
                  <label class="mdl-textfield__label" for="username"
                    >Uni-login brugernavn</label
                  >
                </div>

                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="password"
                    id="userpass"
                    v-model="userpass"
                  />
                  <label class="mdl-textfield__label" for="userpass"
                    >Lav en adgangskode</label
                  >
                </div>

                <div class="mdl-textfield mdl-js-textfield">
                  <input
                    class="mdl-textfield__input"
                    type="password"
                    id="repass"
                    v-model="repass"
                  />
                  <label class="mdl-textfield__label" for="repass"
                    >Gentag adgangskode</label
                  >
                </div>
                <div class="mdl-card__actions mdl-card--border">
                  <button
                    class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  >
                    Opret bruger
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p>{{ message }}</p>
    </main>
  </div>
</template>

<style>
h1 {
  text-align: center;
}
</style>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      userpass: "",
      message: "",
      firstname: "",
      surname: "",
      schoolClass: "",
      repass: "",
    };
  },
  methods: {
    sendForm1() {
      this.message =
        "Du har indtastet: " + this.username + " og " + this.userpass;
    },
    sendForm2() {
      this.message =
        "Du har indtastet: " +
        this.firstname +
        ", " +
        this.surname +
        ", " +
        this.schoolClass +
        ", " +
        this.username +
        ", " +
        this.userpass +
        " og " +
        this.repass;
    },
  },
};
</script>
