<script setup lang="ts">
type TechCategory = {
  name: string,
  icon: string
}
const CATEGORIES: TechCategory[] = [
  {
    name: 'Web3',
    icon: 'fa-ethereum'
  },
  {
    name: 'React',
    icon: 'io-logo-react'
  },
  {
    name: 'Vue',
    icon: 'si-vuedotjs'
  },
  {
    name: 'Next',
    icon: 'co-next-js'
  },
  {
    name: 'Nuxt',
    icon: 'si-nuxtdotjs'
  },
]
</script>

<template>
  <div class="left-side">
    <div class="side-wrapper">
      <div class="side-title">Apps</div>
      <div class="side-menu">
        <NuxtLink to="/">
          <svg viewBox="0 0 512 512">
            <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path
                d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                data-original="#bfc9d1"
              />
            </g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M192 192h128v128H192zm0 0"
              fill="currentColor"
              data-original="#82b1ff"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
              fill="currentColor"
              data-original="#bfc9d1"
            />
          </svg>
          All Apps
        </NuxtLink>
        <NuxtLink to="/updates">
          <svg viewBox="0 0 488.932 488.932" fill="currentColor">
            <path
              d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z"
            />
          </svg>
          Updates
          <span class="notification-number updates">3</span>
        </NuxtLink>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-title">Tech & Tools</div>
      <div class="side-menu">
        <NuxtLink v-for="tech in CATEGORIES" :to="`/${tech.name.toLowerCase()}`">
            <v-icon :name="tech.icon" />
          {{ tech.name }}
        </NuxtLink>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-title">Fonts</div>
      <div class="side-menu">
        <a href="#">
          <svg viewBox="0 0 332 332" fill="currentColor">
            <path
              d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z"
            />
          </svg>
          Manage Fonts
        </a>
      </div>
    </div>
    <div class="side-wrapper">
      <div class="side-title">Contact Links</div>
      <div class="side-menu">
        <a href="#">
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z"
            />
          </svg>
          Stock
        </a>
        <a href="#">
          <svg viewBox="0 0 511.441 511.441" fill="currentColor">
            <path
              d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z"
            />
            <path
              d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z"
            />
          </svg>
          Tutorials
        </a>
        <a href="#">
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M196 151h-75v90h75c24.814 0 45-20.186 45-45s-20.186-45-45-45z"
            />
            <path
              d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z"
            />
          </svg>
          Portfolio
        </a>
        <a href="#">
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0"
            />
            <path
              d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0"
            />
          </svg>
          Behance
        </a>
        <a href="#">
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z"
            />
            <path
              d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z"
            />
          </svg>
          Social Forum
        </a>
      </div>
    </div>
  </div>
</template>
