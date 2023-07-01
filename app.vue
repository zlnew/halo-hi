<template>
  <NuxtLayout name="guest">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Halo Hi - Be true, be you',
    description: '[description]',
    ogTitle: '[og:title]',
    ogDescription: '[og:description]',
    ogImage: '[og:image]',
    ogUrl: '[og:url]',
    twitterTitle: '[twitter:title]',
    twitterDescription: '[twitter:description]',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary'
  });

  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'bg-primary text-white'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches'
      },
      {
        rel:'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Spline+Sans+Mono'
      }
    ]
  });
</script>