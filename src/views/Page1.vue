<template>
  <section class="Page1">
    <P1TopSection />
    <C3WinVLoss />
  </section>
</template>

<script>

import P1TopSection from '@/components/C1TotalMatchPerSeason.vue'
import C3WinVLoss from '@/components/C3winVslooses.vue'


export default {
  name: 'Page1',
  components: {
    P1TopSection,
    C3WinVLoss
  }
}
</script>

<style> </style>
