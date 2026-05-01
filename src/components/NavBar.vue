<template>
  <nav class="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center gap-2 group">
          <span class="text-2xl">🔮</span>
          <h1 class="font-serif text-xl font-bold text-ink group-hover:text-cinnabar transition-colors">
            高岛易断
          </h1>
        </router-link>

        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 rounded-ancient text-sm font-medium transition-all duration-200"
            :class="$route.path === link.to
              ? 'bg-cinnabar/10 text-cinnabar'
              : 'text-inkLight hover:text-ink hover:bg-border/30'"
          >
            {{ link.label }}
          </router-link>
        </div>

        <div class="flex items-center gap-3">
          <input
            v-model="usernameInput"
            type="text"
            placeholder="输入用户名"
            class="hidden sm:block w-32 lg:w-40 px-3 py-1.5 text-sm border border-border rounded-ancient bg-paper focus:outline-none focus:border-cinnabar/50 transition-colors"
            @keyup.enter="updateUser"
          />
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-ancient hover:bg-border/30 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        v-if="showMobileMenu"
        class="md:hidden pb-4 border-t border-border mt-2 pt-3"
      >
        <input
          v-model="usernameInput"
          type="text"
          placeholder="输入用户名"
          class="sm:hidden w-full mb-3 px-3 py-2 text-sm border border-border rounded-ancient bg-paper focus:outline-none focus:border-cinnabar/50"
          @keyup.enter="updateUser"
        />
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-4 py-2.5 rounded-ancient text-sm font-medium transition-colors mb-1"
          :class="$route.path === link.to
            ? 'bg-cinnabar/10 text-cinnabar'
            : 'text-inkLight hover:bg-border/20'"
          @click="showMobileMenu = false"
        >
          {{ link.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCurrentUser, setCurrentUser } from '../utils/storage.js'

const route = useRoute()
const showMobileMenu = ref(false)
const usernameInput = ref('')

const navLinks = [
  { to: '/', label: '占卜' },
  { to: '/yarrow', label: '蓍草起卦' },
  { to: '/hexagrams', label: '卦象' },
  { to: '/history', label: '历史' }
]

onMounted(() => {
  usernameInput.value = getCurrentUser()
})

function updateUser() {
  if (usernameInput.value.trim()) {
    setCurrentUser(usernameInput.value.trim())
  }
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
</script>
