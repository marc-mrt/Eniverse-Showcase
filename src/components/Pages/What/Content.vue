<template>
  <div>
    <contentTitle>{{ this.brands.name }}</contentTitle>
    <div class='columns'>
      <ContentDetails v-for='item in this.brands.items' :key='item.title'>
        <i slot='icon' class="fa" :class='item.icon' style='font-size: 4rem; margin-left: -.4rem; margin-top: -.4rem;'></i>
        <span slot='title'>
          {{ item.title }}
        </span>
        <span slot='desc'>
          {{ item.subtitle }}
        </span>
      </ContentDetails>
    </div>

    <contentTitle>{{ this.orga.name }}</contentTitle>
    <div class='columns'>
      <ContentDetails v-for='item in this.orga.items' :key='item.title'>
        <i slot='icon' class="fa" :class='item.icon' style='font-size: 4rem; margin-left: -.4rem; margin-top: -.4rem;'></i>
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
        brands: {
          name: 'for brands',
          items: [
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
        },
        orga: {
          name: 'for esports organisations',
          items: [
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
        },
      };
    },
  };
</script>

<style scoped>
</style>
