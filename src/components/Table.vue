<template>
  <div>
    <v-data-table
      :headers="headers"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :items="COSTS"
      hide-default-footer
      sort-by="calories"
      class="elevation-1 grey lighten-3"
      @page-count="pageCount = $event"
    >
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="900px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-date-picker full-width v-model="editedItem.date"></v-date-picker>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      v-model="editedItem.categories"
                      :items="CATEGORIES"
                      label="Categories"
                    >
                      <template v-slot:item="{ item, attrs, on }">
                        <v-list-item v-bind="attrs" v-on="on">
                          <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                        </v-list-item>
                      </template>
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field type="number" prefix="$" v-model="editedItem.price" label="Value"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <v-pagination class="grey lighten-3" v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    itemsPerPage: 10,
    page: 1,
    pageCount: 0,
    editedItem: {
      date: "",
      categories: "",
      Value: null,
    },
  }),

  computed: {
    ...mapGetters(["COSTS", "CATEGORIES"]),
    headers() {
      return [
        {
          text: "#",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Date", value: "date" },
        {
          text: "Categories",
          value: "categories",
        },
        { text: "Value", value: "price" },
        { text: "Actions", value: "actions" },
      ];
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    ...mapActions(["DELETE_COST_FROM_COSTS", "CHANGE_DATA_IN_COSTS"]),
    editItem(item) {
      this.editedIndex = this.COSTS.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.COSTS.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.DELETE_COST_FROM_COSTS(this.editedIndex);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.CHANGE_DATA_IN_COSTS(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>