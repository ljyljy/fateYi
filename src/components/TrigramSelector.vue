<template>
  <div class="trigram-selector ancient-card p-4">
    <div class="text-center mb-3">
      <span class="text-xs font-medium text-inkLight">{{ label }}</span>
    </div>

    <div class="flex items-center justify-center gap-3 mb-3">
      <div class="flex items-center gap-1">
        <button
          @click="decrement"
          :disabled="modelValue <= min"
          class="w-8 h-8 rounded-ancient border border-border bg-paper text-ink hover:bg-border/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          −
        </button>
        <input
          type="number"
          :value="modelValue"
          @input="handleInput"
          :min="min"
          :max="max"
          class="w-14 h-10 text-center text-xl font-bold border border-border rounded-ancient bg-paper text-ink focus:outline-none focus:border-cinnabar/50 transition-colors"
        />
        <button
          @click="increment"
          :disabled="modelValue >= max"
          class="w-8 h-8 rounded-ancient border border-border bg-paper text-ink hover:bg-border/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>

    <div v-if="trigram" class="text-center transition-all duration-300">
      <div class="text-4xl mb-1">{{ trigram.symbol }}</div>
      <div class="font-serif text-lg font-semibold text-ink">{{ trigram.name }}</div>
      <div class="text-xs text-inkLight">{{ trigram.nature }}</div>
    </div>
    <div v-else class="text-center text-inkLight text-sm py-4">
      请输入 {{ min }}-{{ max }} 的数字
    </div>

    <div v-if="showQuickSelect" class="mt-3 pt-3 border-t border-border/50">
      <div class="flex flex-wrap justify-center gap-1">
        <button
          v-for="n in quickSelectOptions"
          :key="n"
          @click="$emit('update:modelValue', n)"
          class="w-7 h-7 text-xs rounded border transition-colors"
          :class="modelValue === n
            ? 'bg-cinnabar text-white border-cinnabar'
            : 'bg-paper border-border text-inkLight hover:border-cinnabar/30'"
        >
          {{ n }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getTrigramByXianTianNumber } from '../utils/yarrowUtils.js'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  label: {
    type: String,
    default: ''
  },
  min: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 8
  },
  showQuickSelect: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const trigram = computed(() => {
  return getTrigramByXianTianNumber(props.modelValue)
})

const quickSelectOptions = computed(() => {
  const opts = []
  for (let i = props.min; i <= props.max; i++) {
    opts.push(i)
  }
  return opts
})

function handleInput(e) {
  const val = parseInt(e.target.value)
  if (!isNaN(val) && val >= props.min && val <= props.max) {
    emit('update:modelValue', val)
  }
}

function increment() {
  if (props.modelValue < props.max) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

function decrement() {
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1)
  }
}
</script>
