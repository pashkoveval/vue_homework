<template>
  <v-container>
    <v-row justify="center" align="center" class="pt-10">
      <v-btn color="cyan lighten-4 en-1" @click.stop="modal = true">Add New Cost +</v-btn>
      <div class="ml-5 cyan--text">Total {{TOTAL_COSTS}} $</div>
      <v-dialog v-model="modal" max-width="900">
        <v-card>
          <v-card-title class="text-h5">Enter Costs</v-card-title>

          <v-card-actions>
            <v-form>
              <v-container>
                <v-row class="d-md-flex justify-center flex-column flex-sm-row">
                  <v-col>
                    <v-date-picker full-width v-model="date"></v-date-picker>
                  </v-col>
                  <v-col>
                    <v-text-field type="number" v-model="value" prefix="$" label="Value"></v-text-field>

                    <v-select v-model="categories" :items="CATEGORIES" label="Categories">
                      <template v-slot:item="{ item, attrs, on }">
                        <v-list-item v-bind="attrs" v-on="on">
                          <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                        </v-list-item>
                      </template>
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-actions>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red en-1" text @click="closeModal">Close</v-btn>

            <v-btn color="green en-1" text @click="sendNewCost">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row class="pt-10 d-flex justify-center flex-sm-wrap flex-md-nowrap flex-lg-nowrap">
      <CostList />
      <canvas class="canvas" ref="canvas"></canvas>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import CostList from "../components/CostList.vue";
import { Pie } from "vue-chartjs";

export default {
  name: "Dashboard",
  extends: Pie,
  components: { CostList },
  data() {
    return {
      date: "",
      value: null,
      categories: null,
      modal: false,
      valid: false,
      picker: new Date().toISOString().substr(0, 10),
      categoriesArr: [],
      quantityArr: [],
    };
  },

  computed: {
    ...mapGetters(["CATEGORIES", "POPULAR_COSTS", "TOTAL_COSTS", "COSTS"]),
  },

  mounted() {
    this.getChartData();
    this.renderChart({
      labels: [...this.CATEGORIES],
      datasets: [
        {
          label: "# of Votes",
          data: [...this.quantityArr],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(225, 119, 54, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(225, 119, 54, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(225, 119, 54, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(225, 119, 54, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  },

  methods: {
    ...mapActions(["SET_NEW_COST_IN_COSTS_ACTION"]),
    sendNewCost() {
      const { date, categories, value } = this;
      if ((date, categories, value)) {
        this.SET_NEW_COST_IN_COSTS_ACTION({ date, categories, price: +value });
      }
      this.date = "";
      this.categories = "";
      this.value = null;
      this.modal = false;
    },
    closeModal() {
      this.date = "";
      this.categories = "";
      this.value = null;
      this.modal = false;
    },
    getChartData() {
      this.CATEGORIES.forEach((el) => {
        let quantity = this.COSTS.filter((item) => item.categories === el);
        this.quantityArr.push(quantity.length);
      });
    },
  },

  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler() {
        if (this.$route.params.id != "list") {
          this.modal = true;
          this.date = this.picker;
          this.categories = this.$route.params.id;
          this.value = this.$route.query.value;
          if (this.$route.query.value) {
            this.sendNewCost();
          }
        }
      },
    },
  },
};
</script>

<style lang="scss">
.canvas {
  max-width: 60%;
  width: 100%;
  height: auto;
}
</style>