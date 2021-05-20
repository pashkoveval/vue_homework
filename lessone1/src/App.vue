<template>
  <div id="app">
    <div class="calc">
      <div class="operands">
        <input v-model.number="operandOne" />
        <input v-model.number="operandTwo" />
        <span>
          =
          <span>{{result}}</span>
        </span>
      </div>
      <div class="func">
        <button
          v-for="(func,i) in functionsButton"
          :key="i"
          @click="calc(func)"
          class="func-btn"
        >{{func}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      operandOne: "",
      operandTwo: "",
      result: 0,
      functionsButton: ["+", "-", "*", "/", "^", "./."],
    };
  },
  methods: {
    calc(func) {
      switch (func) {
        case "+":
          this.result = this.operandOne + this.operandTwo;
          break;
        case "-":
          this.result = this.operandOne - this.operandTwo;
          break;
        case "*":
          this.result = this.operandOne * this.operandTwo;
          break;
        case "/":
          this.result = this.operandOne / this.operandTwo;
          break;
        case "^":
          this.result = Math.pow(this.operandOne, this.operandTwo);
          break;
        case "./.":
          this.result = parseInt(this.operandOne / this.operandTwo);
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 1.5rem;
}

.calc {
  width: 320px;
}

.operands {
  display: flex;
  justify-content: space-between;
  & input {
    width: 100px;
    font-size: inherit;
  }
  & span {
    width: 50px;
  }
}
.func {
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  &-btn {
    width: 40px;
    height: 40px;
    background: rgb(210, 226, 60);
    border: 1px solid #ccc;
    font-size: inherit;
  }
}
</style>
