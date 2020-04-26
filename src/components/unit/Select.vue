<template>
  <div>
    <ion-item>
      <ion-label>Select Currency :</ion-label>
      <ion-select
        @ionChange="selectedItem = $event.target.value"
      >
        <ion-select-option
          v-for="(value, rate) in rates"
          :key="rate"
          :value="rate"
        >
          {{ rate }}
        </ion-select-option>
      </ion-select>
    </ion-item>
    <div class="error" v-if="!v.required">Field is required</div>
  </div>
</template>

<script>
    export default {
        data: function () {
            return {
                selectedItem: '',
            }
        },
        props: {
            v: {
                type: Object,
                required: true,
            },
            rates: {
                type: Object,
                required: true,
            },
        },
        watch: {
            selectedItem: function () {
                this.$emit('input', this.selectedItem)
            },
        }
    }
</script>