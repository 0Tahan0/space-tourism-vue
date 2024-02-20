<template>
  <div>
    <b-navbar
      toggleable="md"
      type="dark"
      class="container position-relative text-center nav-bar"
    >
      <b-navbar-brand>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </b-navbar-brand>
      <!-- <div class="line position-absolute z-1 d-none d-lg-block"></div> -->

      <b-navbar-toggle
        target="nav-collapse"
        class="nav-toggle bg-transparent"
        @click="navToggle = !navToggle"
      >
        <img v-if="navToggle" src="@/assets/shared/icon-close.svg" alt="" />
        <img v-else src="@/assets/shared/icon-hamburger.svg" alt="" />
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-uppercase taps-nav">
          <b-link to="/" class="text-white text-decoration-none p-4 z-1"
            >00 home</b-link
          >
          <b-link
            to="/DestinationView"
            class="text-white text-decoration-none p-4 z-1"
            >01 Destination</b-link
          >
          <b-link to="/CrewView" class="text-white text-decoration-none p-4 z-1"
            >02 Crew</b-link
          >

          <b-link
            to="/TechnologyView"
            class="text-white text-decoration-none p-4 z-1"
            >03 Technology</b-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name:"theHeader",
  data() {
    return {
      navToggle: false,
    };
  },
};
</script>
<style scoped>
@media (min-width: 768px) {
  .nav-bar {
    padding-top: 0;
  }
  .taps-nav {
    max-width: fit-content;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  .taps-nav a {
    font-size: calc(12px + 0.2vw);
  }
  .taps-nav::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100vmax;
    left: 0;
    background-color: #ffffff15;
    backdrop-filter: blur(15px);
  }
}

@media (min-width: 992px) {
  .nav-bar {
    padding-top: 1rem;
  }
  .taps-nav {
    margin-left: auto;
    margin-right: 0;
  }
  .taps-nav::before {
    left: -7rem;
  }
  .taps-nav::after {
    position: absolute;
    content: "";

    height: 1px;
    background: var(--light-gray);
    right: calc(100% + 2rem);
    top: 50%;
    width: 75%;
    /* max-width: 75%; */
  }
}

.nav-toggle {
  box-shadow: none !important;
  border: none;
}
.taps-nav {
  font-size: 13px !important;
  font-family: second-f;
  letter-spacing: 1px;
}
.taps-nav a:not(.router-link-exact-active) {
  color: #eee !important;
}
.taps-nav a:hover,
.router-link-exact-active {
  color: var(--light);
  text-shadow: 0 0 15px #fff;
}
.router-link-exact-active {
  border-bottom: 2px solid #fff;
}

/* .taps-nav a:hover {} */
</style>
