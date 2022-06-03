<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { h, reactive, ref } from 'vue';
import SkillBar from './SkillBar.vue';

type Skill = {
  label: string
  proficiency: number
  icons: string[]
}

type SkillType = {
  type: string
  skills: Skill[]
}

const skillList = ref<SkillType[]>([
  {
    type: '前端',
    skills: [
      { label: 'html/css', proficiency: 78, icons: ['vscode-icons:file-type-html', 'vscode-icons:file-type-css'] },
      { label: 'JavaScript', proficiency: 83, icons: ['vscode-icons:file-type-js-official'] },
      { label: 'TypeScript', proficiency: 64, icons: ['vscode-icons:file-type-typescript-official'] },
    ]
  },
  {
    type: '框架',
    skills: [
      { label: 'Vue', proficiency: 85, icons: ['vscode-icons:file-type-vue'] },
      { label: 'React', proficiency: 73, icons: ['vscode-icons:file-type-reactts'] },
      { label: 'Nuxt.js', proficiency: 29, icons: ['vscode-icons:file-type-nuxt'] },
      { label: 'Next.js', proficiency: 78, icons: ['vscode-icons:file-type-light-next'] },
      { label: 'Nest.js', proficiency: 65, icons: ['vscode-icons:file-type-nestjs'] },
      { label: 'Sass/Less', proficiency: 78, icons: ['vscode-icons:file-type-sass', 'vscode-icons:file-type-less'] },
      { label: 'TailwindCSS', proficiency: 85, icons: ['vscode-icons:file-type-tailwind'] },
      { label: 'Build Tools', proficiency: 70, icons: ['vscode-icons:file-type-webpack', 'vscode-icons:file-type-vite', 'vscode-icons:file-type-rollup', 'vscode-icons:file-type-npm'] },
    ]
  },
  {
    type: 'DevOps/CI/CD',
    skills: [
      { label: 'Docker/Nginx', proficiency: 50, icons: ['vscode-icons:file-type-docker2', 'vscode-icons:file-type-nginx'] },
      { label: 'Git', proficiency: 75, icons: ['vscode-icons:file-type-git'] },
      { label: 'Linux', proficiency: 35, icons: ['flat-color-icons:linux'] },
    ]
  },
  {
    type: '其他',
    skills: [
      { label: 'Python', proficiency: 55, icons: ['vscode-icons:file-type-python'] },
      { label: 'Database', proficiency: 47, icons: ['vscode-icons:file-type-mongo', 'vscode-icons:file-type-pgsql', 'vscode-icons:file-type-mysql'] },
    ]
  }

])

</script>

<template>
  <div class="p-8 h-full">
    <div class="mb-6">
      <img class="h-16 w-16 rounded-full" src="../assets/a.jpg"/>
      <p class="text-2xl">
        任丹
      </p>
      <p class="opacity-60">
        Web开发工程师
      </p>
      <p class="opacity-60">
        1994.10.05 男
      </p>
    </div>

    <!-- contact -->
    <div class="mb-6">
      <p class="text-xl">
        联系
      </p>
      <div class="opacity-60">
        <p class="flex items-center">
          <Icon class="w-4 h-4" icon="fa:phone" />
          <span class="pl-8">
            15542335787
          </span>
        </p>
        <p class="flex items-center">
          <Icon class="w-4 h-4" icon="fa:envelope-o"/>
          <span class="pl-8">
            rend42@163.com
          </span>
        </p>
        <p class="flex items-center break-all">
          <Icon class="w-4 h-4" icon="fa:home" />
          <span class="pl-8">
            mainissues.cc
          </span>
        </p>
        <p class="flex items-center break-all">
          <Icon class="w-4 h-4" icon="fa:github" />
          <span class="pl-8">
            github.com/rend42
          </span>
        </p>
        <p class="flex items-center break-all">
          <Icon class="w-4 h-4" icon="fa:train"/>
          <span class="pl-8">
            来自安徽，现处上海
          </span>
        </p>
      </div>

    </div>

    <!-- skills -->
    <div>
      <p class="text-xl">
        技能
      </p>
      <div class="mb-4" v-for="(skillType, index) in skillList" key="index">
        <!-- <p>{{ skillType.type }}</p> -->
        <div class="mb-4" v-for="(skill, index) in skillType.skills" key="index">
          <p class="flex items-center">
            <Icon v-for="(icon, idx) in skill.icons" key="idx" class="w-6 h-6 mr-1" :icon="icon"/>
            {{ skill.label }}
          </p>
          <SkillBar :proficiency="skill.proficiency"/>
        </div>
      </div>
    </div>

    <a class=" text-zinc-100 absolute underline cursor-pointer bottom-2" href="/cv.pdf">
      下载
    </a>
  </div>

</template>