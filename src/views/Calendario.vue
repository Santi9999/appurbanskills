<template>
  <v-container>
    <v-layout>
      <div class="text-xs-center">
        <v-chip color="primary" text-color="white">Urban Post</v-chip>

        <v-chip color="orange" text-color="white">Articulos</v-chip>

        <v-chip color="red" text-color="white">Eventos</v-chip>

        <v-chip color="green" text-color="white">Videoclips</v-chip>

        <v-chip color="purple" text-color="white">Entrevistas</v-chip>
      </div>
    </v-layout>
    <v-flex xs12 class="fecha">{{month}}</v-flex>
    <v-layout wrap>
      <v-flex xs12 class="mb-3">
        <v-sheet height="350">
          <v-calendar
            :show-month-on-first="false"
            class="calendar"
            :now="today"
            :value="today"
            v-model="today2"
            end="2019-01-02"
            color="primary"
            ref="calendar"
            :type="type"
          >
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      :class="'ev ' + event.event"
                      v-on="on"
                      v-html="event.title"
                    ></div>
                  </template>
                  <v-card color="white" min-width="350px" flat>
                    <v-toolbar :class="event.event" dark>
                      <v-btn icon>
                        <!-- <v-icon>edit</v-icon> -->
                      </v-btn>
                      <v-toolbar-title v-html="event.title"></v-toolbar-title>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-title primary-title>
                      <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                      <!-- <v-btn flat color="secondary">Cancel</v-btn> -->
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>

      <v-layout justify-space-between>
        <v-flex sm4 class="text-sm-left text-xs-center">
          <v-btn @click="$refs.calendar.prev()">
            <v-icon dark left>keyboard_arrow_left</v-icon>Prev
          </v-btn>
        </v-flex>

        <v-flex sm4 class="text-sm-right text-xs-center">
          <v-btn @click="$refs.calendar.next()">
            Next
            <v-icon right dark>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    type: "month",
    month: "",
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    today2: "2019-05-17",
    links: ["Contacto", "¿Quien Somos?"],
    events: [
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-05-26",
        open: false,
        event: "evento"
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2018-12-31",
        open: false,
        event: "urbanpost"
      },
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2019-06-01",
        open: false,
        event: "articulos"
      },
      {
        title: "Meeting",
        details: "Spending time on how we do not have enough time",
        date: "2019-10-07",
        open: false,
        event: "entrevistas"
      },
      {
        title: "30th Birthday",
        details: "Celebrate responsibly",
        date: "2019-01-03",
        open: false,
        event: "videoclips"
      },
      {
        title: "New Year",
        details: "Eat chocolate until you pass out",
        date: "2019-01-01",
        open: false,
        event: "evento"
      },
      {
        title: "Conference",
        details: "Mute myself the whole time and wonder why I am on this call",
        date: "2019-01-21",
        open: false,
        event: "evento"
      },
      {
        title: "Hackathon",
        details: "Code like there is no tommorrow",
        date: "2019-02-01",
        open: false,
        event: "entrevistas"
      }
    ]
  }),

  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    },
    today() {
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    },
    next() {
      this.$refs.calendar.next();
    },
    mes() {
      switch (this.$refs.calendar.parsedValue.month) {
        case 1:
          this.month = "Enero";
          break;
        case 2:
          this.month = "Febrero";

          break;
        case 3:
          this.month = "Marzo";
          break;
        case 4:
          this.month = "Abril";
          break;
        case 5:
          this.month = "Mayo";
          break;
        case 6:
          this.month = "Junio";
          break;
        case 7:
          this.month = "Julio";
          break;
        case 8:
          this.month = "Agosto";
          break;
        case 9:
          this.month = "Septiembre";
          break;
        case 10:
          this.month = "Octubre";
          break;
        case 11:
          this.month = "Noviembre";
          break;
        case 12:
          this.month = "Diciembre";
          break;
      }
    }
  },
  updated() {
    this.mes();
  },
  created() {
    this.month = this.months[new Date().getMonth()];
  }
};
</script>
<style>
.px-0 {
  display: flex;
  justify-content: center;
}

.xs6 {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.ev {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
.entrevistas {
  background-color: purple !important;
  color: white;
  border: 1px solid purple;
}

.evento {
  background-color: red !important;
  color: white;
  border: 1px solid red;
}
.urbanpost {
  background-color: blue !important;
  color: white;
  border: 1px solid blue;
}

.articulos {
  background-color: orange !important;
  color: white;
  border: 1px solid orange;
}
.videoclips {
  background-color: green !important;
  color: white;
  border: 1px solid green;
}

.calendar {
  width: 100%;
}

.theme--light.v-sheet {
  color: black;
}

.v-sheet.theme--light {
  margin: 0;
}

.fecha {
  background-color: rgb(255, 208, 0);
  height: 40px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 25px;
}
</style>