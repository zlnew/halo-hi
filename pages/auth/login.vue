<template>
  <div class="bg-white/0">
    <div class="py-16 xl:py-32 px-4 md:px-8 2xl:px-0 max-w-screen-xl mx-auto">
      <h2 class="mb-12 font-serif text-3xl md:text-5xl text-accent">Login</h2>
      <div class="max-w-sm">
        <div class="mb-4">
          <label for="email" class="mb-2 block text-accent">Email</label>
          <input type="text" name="email" id="email" class="form-control" placeholder="Email Address">
        </div>
        <div class="mb-8">
          <label for="password" class="mb-2 block text-accent">Password</label>
          <input type="password" name="password" id="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" class="w-full btn-primary">Login</button>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center">
    <div class="absolute bg-accent w-[8rem] h-[8rem] lg:w-[16rem] lg:h-[16rem] 2xl:w-[24rem] 2xl:h-[24rem] rounded-full opacity-10 -z-10"></div>
    <div class="absolute bg-accent w-[14rem] h-[14rem] lg:w-[24rem] lg:h-[24rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full opacity-10 -z-10"></div>
    <div class="absolute bg-accent w-[20rem] h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[32rem] lg:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem] rounded-full opacity-10 -z-10"></div>
    <div class="absolute bg-accent md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] 2xl:w-[48rem] 2xl:h-[48rem] rounded-full opacity-10 -z-10"></div>
    <div class="absolute bg-accent 2xl:w-[56rem] 2xl:h-[56rem] rounded-full opacity-10 -z-10"></div>
    <div class="absolute bg-accent 2xl:w-[64rem] 2xl:h-[64rem] rounded-full opacity-10 -z-10"></div>
  </div>
</template>