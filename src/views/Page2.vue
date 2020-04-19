<template>
  <section class="Page2">
    <P2TopSection />
    <C6RunDistributionPerTeam />
  </section>
</template>

<script>
import P2TopSection from '@/components/C4TotalSixesFoursPerSeason.vue'
import C6RunDistributionPerTeam from '@/components/C6RunDistributionPerTeam.vue'


export default {
  name: 'Page2',
  components: {
    P2TopSection,
    C6RunDistributionPerTeam,
  }
}
</script>

<style></style>
