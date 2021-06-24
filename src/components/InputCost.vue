<template>
  <div>
    <v-btn color="cyan lighten-4 en-1" @click.stop="modal = true">Add New Cost +</v-btn>

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

          <v-btn color="red en-1" text @click="_closeModal">Close</v-btn>

          <v-btn color="green en-1" text @click="sendNewCost">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      modal: false,
      date: "",
      value: null,
      categories: null,
      picker: new Date().toISOString().substr(0, 10),
    };
  },
  computed: {
    ...mapGetters(["CATEGORIES", "POPULAR_COSTS", "TOTAL_COSTS"]),
  },

  methods: {
    ...mapActions(["SET_NEW_COST_IN_COSTS_ACTION"]),

    _closeModal() {
      this.date = "";
      this.categories = "";
      this.value = null;
      this.modal = false;
    },

    sendNewCost() {
      const { date, categories, value } = this;
      if ((date, categories, value)) {
        this.SET_NEW_COST_IN_COSTS_ACTION({ date, categories, price: +value });
      }
      this._closeModal();
    },
  },

  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler() {
        if (this.$route.params.id != "list") {
          this.date = this.picker;
          this.categories = this.$route.params.id;
          this.value = this.$route.query.value;
          this.sendNewCost();
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>