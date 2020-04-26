<template>
  <div>
    <div class="summary text-red" v-if="$v.form.$error">
      Form has errors
    </div>
    <form @submit.prevent="handleSubmit" novalidate>
      <Input
        v-model="form.amount"
        :empty-input="emptyInput"
        :v="$v.form.amount"
      />
      <Select
        v-model="form.selectedItem"
        :rates="rates"
        :v="$v.form.selectedItem"
      />
      <ion-button type="submit" expand="full">Convert</ion-button>
    </form>
  </div>
</template>

<script>
    import axios from 'axios'

    import { integer, required } from "vuelidate/lib/validators"

    import Input from '../unit/Input.vue'
    import Select from '../unit/Select.vue'

    const { VUE_APP_FIXER_API_KEY } = process.env

    export default {
        data: function () {
            return {
                form: {
                    amount: '',
                    selectedItem: 0,
                },
                rates: {},
                emptyInput: false,
            }
        },
        components: {
            Input,
            Select,
        },
        methods: {
            handleSubmit() {
                this.$v.form.$touch();

                if (this.$v.form.$pending || this.$v.form.$error)
                    return

                this.emptyInput = !this.emptyInput

                this.$v.form.$reset();

                this.$emit('isSubmitted', {
                    amount: parseInt(this.form.amount, 10),
                    rate: this.form.selectedItem,
                    conversionChange: this.rates[this.form.selectedItem],
                })
            }
        },
        validations: {
            form: {
                amount: {
                    required,
                    integer
                },
                selectedItem: {
                    required,
                },
            }
        },
        mounted() {
            axios
                .get(`http://data.fixer.io/api/latest?access_key=${VUE_APP_FIXER_API_KEY}`)
                .then(res => this.rates = res.data.rates)
        },
    }
</script>
