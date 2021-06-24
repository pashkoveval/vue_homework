<template>
  <v-col class="canvas">
    <canvas ref="canvas" width="200" height="200"></canvas>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data() {
    return {
      categoriesArr: [],
      quantityArr: [],
      details: [],
    };
  },
  computed: {
    ...mapGetters(["CATEGORIES", "COSTS"]),
  },
  methods: {
    getChartData() {
      this.CATEGORIES.forEach((el) => {
        let quantity = this.COSTS.filter((item) => item.categories === el);
        this.quantityArr.push(quantity.length);
        this.details.push({ quantity: quantity.length, name: el });
      });
    },
  },
  mounted() {
    this.getChartData();
    this.renderChart(
      {
        labels: [...this.CATEGORIES],
        datasets: [
          {
            label: "# of Votes",
            data: [...this.quantityArr],
            backgroundColor: [
              "#EF9A9A",
              "#F48FB1",
              "#303F9F",
              "#B39DDB",
              "#26A69A",
              "#01579B",
              "#00E5FF",
              "#C0CA33",
              "#AED581",
              "#76FF03",
              "#C6FF00",
              "#FF6F00",
              "#90A4AE",
              "#FF7043",
              "#BF360C",
              "#18FFFF",
              "#01574B",
              "#BBDEFB",
              "#004D40",
              "#A7FFEB",
              "#E65100",
              "#B388FF",
            ],
            borderColor: [
              "#EF9A9A",
              "#F48FB1",
              "#303F9F",
              "#B39DDB",
              "#26A69A",
              "#01579B",
              "#00E5FF",
              "#C0CA33",
              "#AED581",
              "#76FF03",
              "#C6FF00",
              "#FF6F00",
              "#90A4AE",
              "#FF7043",
              "#BF360C",
              "#18FFFF",
              "#01574B",
              "#BBDEFB",
              "#004D40",
              "#A7FFEB",
              "#E65100",
              "#B388FF",
            ],
            borderWidth: 1,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style lang="scss">
.canvas {
  width: 40vw !important;
  min-height: 400px !important;

  @media (max-width: 960px) {
    width: 100%;
  }
}
</style>