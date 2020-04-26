<template>
  <div>
    <ion-item>
      <ion-label position="floating">Amount</ion-label>
      <ion-input
        :value=amount
        @ionInput="amount = $event.target.value"
        type="number"
        placeholder="EUR"
      />
    </ion-item>

    <div class="error" v-if="!v.required">Field is required</div>
    <div class="error" v-if="!v.integer">Number is required</div>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
                amount: '',
            }
        },
        props: {
            v: {
                type: Object,
                required: true,
            },
            emptyInput: {
                type: Boolean,
                required: true,
            }
        },
        watch: {
            amount(value) {
                this.$emit('input', this.amount)
            },
            emptyInput: function (newValue, oldValue) {
                if (newValue === oldValue)
                    return
                this.amount = ''
            },
        },
    }
</script>