<script setup lang="ts">
import { Button } from '@idelivery/components';
</script>

<template>
  <div>
    <UContainer class="Idelivery-layout">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Home</a></li>
              <li><a>Menu</a></li>
              <li><a>Service</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a
            class="btn btn-ghost text-2xl md:text-3xl gap-0 p-0 tracking-[1px] font-bold"
            >F<span class="text-cinnabar-500">OO</span>D</a
          >
        </div>
        <div class="navbar-center hidden lg:flex items-center">
          <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Menu</a></li>
            <li><a>Service</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div class="navbar-end flex gap-5">
          <a class="hidden md:flex">
            <UIcon name="i-mdi-magnify" class="icon-large" />
          </a>
          <a class="hidden md:flex">
            <UIcon name="i-ri-shopping-basket-line" class="icon-large" />
          </a>
          <Button
            type="primary"
            rounded="rounded-full"
            class="btn px-3 text-base md:px-6 md:text-lg font-normal"
            >Sign in <UIcon name="i-ri-arrow-right-line" class="text-xl"
          /></Button>
        </div>
      </div>
    </UContainer>
    <slot />
  </div>
</template>

<style lang="postcss">
.Idelivery-layout {
  .navbar-center {
    li:hover {
      @apply text-cinnabar-500;
    }
  }
  .navbar-end {
    a {
      @apply justify-center items-center cursor-pointer;
    }
    .icon-large {
      @apply text-2xl;
    }
  }
}
</style>
