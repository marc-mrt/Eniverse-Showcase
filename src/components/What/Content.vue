<template>
  <div>
    <contentTitle>for brands</contentTitle>
    <div class='columns'>
      <ContentDetails v-for='item in this.brands' :key='item.title'>
        <i slot='icon' class="fa" :class='item.icon' style='font-size: 4.5rem; margin-left: -.75rem; margin-top: -1rem;'></i>
        <span slot='title'>
          {{ item.title }}
        </span>
        <span slot='desc'>
          {{ item.subtitle }}
        </span>
      </ContentDetails>
    </div>

    <contentTitle>for esports organisations</contentTitle>
    <div class='columns'>
      <ContentDetails v-for='item in this.orga' :key='item.title'>
        <i slot='icon' class="fa" :class='item.icon' style='font-size: 4.5rem; margin-left: -.75rem; margin-top: -1rem;'></i>
        <span slot='title'>
          {{ item.title }}
        </span>
        <span slot='desc'>
          {{ item.subtitle }}
        </span>
      </ContentDetails>
    </div>
  </div>
</template>

<script>
  import ContentDetails from './ContentDetails';
  import ContentTitle from './ContentTitle';

  export default {
    name: 'content',
    components: {
      ContentDetails,
      ContentTitle,
    },
    data() {
      return {
        brands: [
          {
            title: 'Brand Consulting',
            subtitle: 'We can advise on how to best position yourself in the eSports industry thanks to our expertise and first-hand insights.',
            icon: 'fa-bullhorn',
          },
          {
            title: 'Sponsorship',
            subtitle: 'Get in front of your audience. Partner with the best organisations, events and players to access their community.',
            icon: 'fa-suitcase',
          },
          {
            title: 'Events Creation',
            subtitle: 'Want to become a leading actor in the industry by creating your own eSports events? We can make this happen.',
            icon: 'fa-trophy',
          },
        ],
        orga: [
          {
            title: 'Relationship Management',
            subtitle: 'We will assist you in all communication and interaction with your stakeholders to foster solid and long-lasting relationships.',
            icon: 'fa-users',
          },
          {
            title: 'Fundraising',
            subtitle: 'We bring top-quality sponsors to the table to get your projects and events to the next level.',
            icon: 'fa-money',
          },
          {
            title: 'Business Development',
            subtitle: 'We will create new strategic opportunities for you by leveraging our network and putting our experience at your service.',
            icon: 'fa-line-chart',
          },
        ],
      };
    },
  };
</script>

<style scoped>
</style>
