<script setup lang="ts">
defineProps<{
  size: string
}>();
</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size"  viewBox="0 0 250 200">
        <title>zod</title>
        <defs>
          <path d="M200.420694,0 L53.6308282,0 L0,53.3549074 L121.760272,199.97871 L131.473707,189.079838 L252,53.8556526 L200.420694,0 Z M195.058122,12.5620609 L234.89802,54.1622312 L122.097509,180.72046 L16.9997871,54.1622312 L58.8145625,12.5620609 L195.058122,12.5620609 Z" id="path-1"></path>
          <filter x="-2.2%" y="-2.8%" width="105.2%" height="106.5%" filterUnits="objectBoundingBox" id="filter-2">
            <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.36 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
        </defs>
        <g transform="translate(2.000000, 1.510645)" fill-rule="nonzero">
          <polygon fill="#18253F" points="58.8162023 12.5220497 195.093896 12.5220497 235.027464 54.2130202 122.038097 180.765999 16.9574282 54.2130202"></polygon>
          <polygon fill="#274D82" points="149.426831 150.874561 96.0134271 150.874561 71.8889656 121.341138 140.252621 121.33896 140.255033 117.149462 179.332589 117.149462"></polygon>
          <polygon fill="#274D82" points="223.55992 42.3226943 76.1782017 127.413686 56.9521852 103.361957 171.050895 37.4849931 168.955265 33.853745 199.34598 16.3076536"></polygon>
          <polygon fill="#274D82" points="144.596212 12.5642823 33.9304463 76.4571406 16.7194669 54.9715457 90.8141008 12.1929865"></polygon>
          <g>
            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            <use fill="#3068B7" xlink:href="#path-1"></use>
          </g>
        </g>
    </svg>
</template>
