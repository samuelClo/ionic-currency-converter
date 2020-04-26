<template>
  <div id="app">
    <Form
      @isSubmitted="handleSubmitted"
    />
    <Result
      v-if="amount && rate && conversionChange"
      :amount="amount"
      :rate="rate"
      :conversionChange="conversionChange"
    />
  </div>
</template>

<script>
    import Form from '@/components/structural/Form.vue'
    import Result from '@/components/structural/Result.vue'

    export default {
        name: 'App',
        data: function () {
            return {
                amount: 0,
                rate: '',
                conversionChange: 0,
            }
        },
        methods: {
            handleSubmitted({ amount, rate, conversionChange }) {
                this.amount = amount
                this.rate = rate
                this.conversionChange = conversionChange
            }
        },
        components: {
            Form,
            Result,
        }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .error {
    color: #893a3a;
  }
</style>
