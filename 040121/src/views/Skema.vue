<template>
  <h1>Skema</h1>
  <table class="ugeskema">
    <tr>
      <td>
        <button class="mdl-button mdl-js-button mdl-button--icon goleft">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
      </td>
      <td colspan="4"><h3>[klasse] - uge x, 20xx</h3></td>
      <td align="right">
        <button class="mdl-button mdl-js-button mdl-button--icon goright">
          <i class="material-icons">keyboard_arrow_right</i>
        </button>
      </td>
    </tr>
    <tr>
      <th>Tid</th>
      <th>Mandag (x/x)</th>
      <th>Tirsdag (x/x)</th>
      <th>Onsdag (x/x)</th>
      <th>Torsdag (x/x)</th>
      <th>Fredag (x/x)</th>
    </tr>
    <tr>
      <td>
        1. modul <br />
        8:00 - 8:45
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        2. modul <br />
        8:45 - 9:30
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        3. modul <br />
        9:45 - 10:30
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        4. modul <br />
        10:30 - 11:15
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        5. modul <br />
        12:00 - 12:45
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        6. modul <br />
        12:45 - 13:30
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        7. modul <br />
        13:45 - 14:30
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        8. modul <br />
        14:30 - 15:15
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>
        9. modul <br />
        15:15 - 16:00
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<style scoped>
h1 {
  text-align: center;
}

table.ugeskema {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
}

.ugeskema td {
  border: 1px solid #000000;
  text-align: left;
  padding: 8px;
}

.ugeskema th {
  background-color: #dddddd;
  border: 1px solid #000000;
  text-align: left;
  padding: 8px;
}

.ugeskema h3 {
  text-align: center;
  font-size: 30px;
}

.ugeskema tr:first-child {
  border: 1px solid #000000;
}

.ugeskema tr:first-child td {
  border: none;
}

.goleft {
  float: left;
}

.goright {
  float: right;
}
</style>
