<template>
  <div class="hello">
    <div class="inputs">
      <label>
        Число 1
        <input type="number" v-model.number="num1" />
      </label>
      <span class="fs">{{funcSymbol}}</span>
      <label>
        Число 2
        <input type="number" v-model.number="num2" />
      </label>
      <span class="fs">
        <span v-if="resalt">=</span>
        {{resalt}}
      </span>
    </div>
    <div class="checkbox">
      <label>
        <span v-if="showKeyboard">Скрыть клавиатуру</span>
        <span v-else>Открыть клавиатуру</span>
        <input type="checkbox" @click="showKeyboard = !showKeyboard" />
      </label>
    </div>
    <div class="keyboard" v-if="showKeyboard">
      <div class="operand">
        <label>
          Операнд 1
          <input type="radio" @click="operandChoese(1)" :checked="inputOneFocus" />
        </label>
        <label>
          Операнд 2
          <input type="radio" @click="operandChoese(2)" :checked="inputTwoFocus" />
        </label>
      </div>
      <button
        class="key"
        @click="inputNumbers(keyNum)"
        v-for="(keyNum,i) in keyboard"
        :key="i+7"
        :v-model="keyNumb"
      >{{keyNum}}</button>
      <button
        class="func"
        @click="inputfuncSymbol(func)"
        v-for="(func,i) in funcBtn"
        :key="i"
      >{{func}}</button>
      <button class="red del" @click="deletNumber">&lt;</button>
      <button class="red reset" @click="reset">C</button>
      <button class="resalt" @click="resaltFunc">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num1: "",
      num2: "",
      keyNumb: "",
      keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      funcBtn: ["+", "-", "*", "/"],
      funcSymbol: null,
      resalt: "",
      inputOneFocus: true,
      inputTwoFocus: false,
      showKeyboard: false,
    };
  },
  methods: {
    reset() {
      this.num1 = "";
      this.num2 = "";
      this.funcSymbol = "";
      this.resalt = "";
    },
    inputfuncSymbol(value) {
      this.funcSymbol = value;
      if (this.num1.length) {
        this.operandChoese(2);
      }
    },
    inputNumbers(value) {
      if (this.inputOneFocus) {
        this.num1 += value;
      } else {
        this.num2 += value;
      }
    },
    deletNumber() {
      if (this.inputOneFocus) {
        this.num1 = this.num1.substring(0, this.num1.length - 1);
      } else {
        this.num2 = this.num2.substring(0, this.num2.length - 1);
      }
    },
    operandChoese(e) {
      switch (e) {
        case 1:
          this.inputOneFocus = true;
          this.inputTwoFocus = false;
          break;
        case 2:
          this.inputOneFocus = false;
          this.inputTwoFocus = true;
          break;

        default:
          break;
      }
    },
    resaltFunc() {
      this.resalt = eval(this.num1 + this.funcSymbol + this.num2);
    },
  },
};
</script>

<style>
.operand {
  width: 100%;
}
.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 0 auto;
}

.inputs label,
.inputs input {
  width: 100px;
}

.keyboard {
  width: 300px;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
}

.keyboard button {
  width: 70px;
  height: 70px;
  border: none;
  font-size: 2rem;
}

.keyboard button:active {
  transform: scale(0.95);
}

.fs {
  min-width: 30px;
  height: 30px;
  font-size: 2rem;
}

.key {
  background: rgb(219, 194, 48);
}

.func {
  background: rgb(145, 219, 48);
}

.red {
  background: rgb(219, 48, 48);
}

.resalt {
  width: 94% !important;
  background: rgb(0, 255, 157);
}
</style>
