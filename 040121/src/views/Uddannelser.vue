<template>
  <section class="uddhero">
    <div class="hero-inner">
      <h1>Vores uddannelser</h1>
    </div>
  </section>

  <table class="cen mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
      <tr>
        <th class="mdl-data-table__cell--non-numeric">Uddannelse</th>
        <th class="mdl-data-table__cell--non-numeric">Studieretning</th>
        <th class="mdl-data-table__cell--non-numeric">Hovedfag</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">STX</td>
        <td class="mdl-data-table__cell--non-numeric">Idræt</td>
        <td class="mdl-data-table__cell--non-numeric">
          Samfundsfag A - Engelsk A - Idræt B
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">STX</td>
        <td class="mdl-data-table__cell--non-numeric">Naturvidenskab</td>
        <td class="mdl-data-table__cell--non-numeric">
          Matematik A - Fysik B - Kemi B el. Biologi A - Kemi B
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">STX</td>
        <td class="mdl-data-table__cell--non-numeric">Samfundsvidenskab</td>
        <td class="mdl-data-table__cell--non-numeric">
          Samfundsfag A - Engelsk A el. Samfundsfag A - Matematik A
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">STX</td>
        <td class="mdl-data-table__cell--non-numeric">Sprog</td>
        <td class="mdl-data-table__cell--non-numeric">
          Engelsk A - Spansk A - Latin C
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">STX</td>
        <td class="mdl-data-table__cell--non-numeric">Kunst</td>
        <td class="mdl-data-table__cell--non-numeric">Musik A - Engelsk A</td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HTX</td>
        <td class="mdl-data-table__cell--non-numeric">Science</td>
        <td class="mdl-data-table__cell--non-numeric">
          Matematik A - Bioteknologi A el. Matematik A - Fysik A
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HTX</td>
        <td class="mdl-data-table__cell--non-numeric">Kommunikation</td>
        <td class="mdl-data-table__cell--non-numeric">
          Kommunikation/it A - Programmering B el. Matematik A - Programmering B
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HHX</td>
        <td class="mdl-data-table__cell--non-numeric">Virksomhed</td>
        <td class="mdl-data-table__cell--non-numeric">
          Virksomhedsøkonomi A - Afsætning A
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HHX</td>
        <td class="mdl-data-table__cell--non-numeric">
          Innovation og iværksætteri
        </td>
        <td class="mdl-data-table__cell--non-numeric">
          Afsætning A - Innovation B
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HF</td>
        <td class="mdl-data-table__cell--non-numeric">Sundhedspakken</td>
        <td class="mdl-data-table__cell--non-numeric">Biologi B - Idræt B</td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HF</td>
        <td class="mdl-data-table__cell--non-numeric">Businesspakken</td>
        <td class="mdl-data-table__cell--non-numeric">
          Samfundsfag B - Erhvervsøkonomi C
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HF</td>
        <td class="mdl-data-table__cell--non-numeric">Menneskepakken</td>
        <td class="mdl-data-table__cell--non-numeric">
          Samfundsfag B - Psykologi C
        </td>
      </tr>
      <tr>
        <td class="mdl-data-table__cell--non-numeric">HF</td>
        <td class="mdl-data-table__cell--non-numeric">Heltepakken</td>
        <td class="mdl-data-table__cell--non-numeric">
          Idræt B - Psykologi C
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.uddhero {
  /* Sizing */
  width: 100vw;
  height: 70vh;

  /* Flexbox stuff */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Text styles */
  text-align: center;
  color: white;

  /* Background styles */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/74677045_4225100280834237_6769731233389540743_n.jpg?_nc_cat=106&ccb=2&_nc_sid=0debeb&_nc_ohc=sC9Aks-QYSsAX-ieN3d&_nc_ht=scontent-cph2-1.xx&oh=b8d6c21d3cd4ab03de9a721c7b9f0d47&oe=60191C66);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.cen {
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
