<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>EUR -> {{ rate }} :</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{ amount * conversionChange }}euros
    </ion-card-content>
  </ion-card>
</template>

<script>
    export default {
        props: {
            amount: {
                type: Number,
                required: true,
            },
            rate: {
                type: String,
                required: true,
            },
            conversionChange: {
                type: Number,
                required: true,
            }
        }
    }
</script>