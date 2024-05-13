<script setup>
import CarouselComponent from '@/components/about/CarouselComponent.vue'
const skills = [
  {
    title: 'Programming Languages',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Libraries & Frameworks',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Tools & Platforms',
    image: 'certificate_frontend.png'
  },
];

const certificates = [
  {
    title: 'Meta Front-End Developer Certificate',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Meta Back-End Developer Certificate',
    image: 'certificate_frontend.png'
  },
  {
    title: 'Programming Languages Certificate',
    image: 'certificate_frontend.png'
  },
];
</script>

<template>
  <section id="summary">
    <div class="summary-container container">
      <div class="about-me bg-filter bg-image">
        <h1>Jack Arana Ramos</h1>
      </div>
      <div class="profile bg-filter">
        <h1>{{$t('about.main.profile')}}</h1>
        <p>{{$t('about.main.profileDescription')}}</p>
      </div>
      <div class="meta bg-image">
        <img src="/meta-front-end-developer-certificate.png" alt="meta">
      </div>
      <div class="ibm bg-image">
        <img src="/meta-front-end-developer-certificate.png" alt="ibm">
      </div>

      <div class="education bg-filter bg-image">
        <h1>{{$t('about.main.education')}}</h1>
        <h3>{{$t('about.main.educationUniversity')}}</h3>
        <p>{{$t('about.main.educationEgress')}}</p>
        <h4>{{$t('about.main.educationCareer')}}</h4>
      </div>
      <div class="skills">
        <CarouselComponent :value="skills"/>
      </div>
      <div class="certificates">
        <CarouselComponent :value="certificates"/>
      </div>
      <div class="projects bg-filter bg-image">
        <h1>{{$t('about.main.projects')}}</h1>
        <p>{{$t('about.main.projectsDescription')}}</p>
      </div>
    </div>
  </section>
</template>


<style>
.summary-container {
  width: 100%;
  overflow: hidden;
  display: grid !important;
  place-items: center;
  gap: 2rem;
  grid-template-areas:
    "about-me about-me about-me profile profile"
    "about-me about-me about-me meta ibm"
    "education education skills skills skills"
    "certificates certificates certificates projects projects";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  div {
    width: 100%;
    height: 100%;
  }
  .about-me {
    grid-area: about-me;
    background: url('/arack.jpeg');
    display: grid;
    height: 100%;
    h1 {
      font-size: 4.5em;
      color: white;
      font-weight: bold;
      margin-top: auto;
    }
  }
  .profile {
    grid-area: profile;
  }
  .meta {
    grid-area: meta;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ibm {
    grid-area: ibm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .education {
    grid-area: education;
    background: url('/upc.jpeg') no-repeat center right;
    padding-right: 5rem;
  }
  .skills {
    grid-area: skills;
    padding-inline: .5rem;
  }

  .certificates {
    grid-area: certificates;
    padding-inline: .5rem;
  }
  .projects {
    grid-area: projects;
    background: url('https://media.giphy.com/media/4rZA5D22301iMgrUNd/giphy.gif') no-repeat center right;
  }
  .bg-filter {

    h1 {
      padding-bottom: 1rem;
    }
  }
  .bg-image {
    background-size: cover;

    &:before {
      content: '';
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }
}
@media (max-width: 1024px) {
  .summary-container {
    gap: 1rem;
  }
}
@media (max-width: 768px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me about-me"
      "profile profile meta"
      "ibm education education"
      "skills skills skills"
      "certificates certificates certificates"
      "projects projects projects";
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 425px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me"
      "profile profile"
      "meta ibm"
      "education education"
      "skills skills"
      "certificates certificates"
      "projects projects";
    grid-template-columns: 1fr 1fr;
  }
}
</style>