<script lang="ts" setup>
import { Icon } from '@iconify/vue'

</script>

<template>
  <div class="p-8">
    <!-- profile -->
    <div class="pb-6">
      <p class="text-xl font-bold flex items-center">
        <Icon width="24" height="24" class="mr-4" icon="ic:baseline-person" />
        自我介绍</p>
      <span class="text-base py-4 opacity-80">
        <p>
          GIS专业硕士研究生毕业，两年开发工作经验。由于专业的原因，从事过WebGIS方面的前后端开发，擅长地图和数据可视化领域（ArcGIS API，Leaflet，MapboxGL，There.js等），目前开始将技术栈集中在前端方面（学习Next.js，Nuxt.js和Nest.js中）。
        </p>
        <p>
          熟悉TypeScript，熟悉SASS/LESS等预处理器，熟悉Tailwind等原子化CSS框架，熟悉Vue2，Vue3及其生态（ElementUI，NaiveUI等），熟悉React及其生态，熟悉Nest.js等Node.js框架及其生态（TypeORM等），熟悉Next.js等SSR框架。
        </p>
        <p>
          熟悉Git，Docker，Nginx，Linux等，了解Travis，Github Actions等CI/CD工具，了解NPM CLI，NPX等工具链的开发。有Python等其他编程语言开发经验，了解PostgreSQL等数据库。
        </p>
        <p>
          业余喜欢尝试新技术，有VSCode插件，微信小程序开发能力等。英语水平良好。
        </p>
      </span>
    </div>

    <!-- employment -->
    <div class="pb-6">
      <p class="text-xl font-bold flex items-center">
        <Icon width="24" height="24" class="mr-4" icon="ic:outline-work" />
        工作经历</p>
      <div>
        <p class="py-2">
          上海杰狮信息技术有限公司
        </p>
        <p class="text-sm opacity-80 flex justify-between">
          <span>软件开发工程师</span>
          <span>2020.7 - 2022.5</span>
        </p>
        <span class="opacity-80">
          <p>任职期间，前期主要在业务部门为政府国土资源部门开发地理数据分析管理和可视化系统，后期调往研发部门负责部分产品的前端开发工作。</p>
          <p>
            公司主要技术栈：SpringBoot，Dojo，Vue2, ElementUI, Echarts, Arcgis Api, OpenLayers, Leaflet等。
          </p>
          <p>
            项目经历：参与“深圳粤港澳智慧湾区”项目时，作为主要开发，实现了地理数据分析算法的后端接口，和前端可视化展示。
            参与“浙江国土空间信息迭代深化”项目时，作为主要前端，重构了部分代码，提取封装公共组件和逻辑，实现和优化大文件上传功能等。
            参与过公司内部地图框架库的封装开发，主要技术为TypeScrit和Rollup等。
          </p>
        </span>
      </div>
    </div>

    <!-- education -->
    <div class="pb-6">
      <p class="text-xl font-bold flex items-center">
        <Icon width="24" height="24" class="mr-4" icon="ic:baseline-menu-book" />
        教育经历</p>
      <div class="pb-6">
        <p class="py-2">
          辽宁师范大学
        </p>
        <p class="text-sm opacity-80 flex justify-between">
          <span>硕士 地理信息系统</span>
          <span>2017.9 - 2020.6</span>
        </p>
      </div>
      <div class="pb-6">
        <p class="py-2">
          安庆师范大学
        </p>
        <p class="text-sm opacity-80 flex justify-between">
          <span>本科 地理科学</span>
          <span>2012.9 - 2016.6</span>
        </p>
      </div>
    </div>

    <!-- project -->
    <div class="pb-6">
      <p class="text-xl font-bold flex items-center">
        <Icon width="24" height="24" class="mr-4" icon="ic:baseline-code" />
        部分个人项目</p>
      <div class="pb-6">
        <p class="py-2">GeoJSON.IO for VSCode</p>
        <p class="text-sm opacity-80 flex flex-col justify-between">
          <p>vscode extension</p>
          <p>链接：https://marketplace.visualstudio.com/items?itemName=swallow.geojson-io-for-vscode</p>
        </p>
        <span>
          <p>在VSCode中用地图可视化形式预览，创建和编辑GeoJSON格式数据的一个插件。页面端通过React搭建，使用postMessage api实现VSCode端和Webview端通信。</p>
          <img class="pt-10" src="../assets/1.png" alt="">
        </span>
      </div>
      <div class="pb-6">
        <p class="py-2">SpaceX Tracker X</p>
        <p class="text-sm opacity-80 flex flex-col justify-between">
          <p>website</p>
          <p>链接：https://spacex-tracker-x.vercel.app</p>
        </p>
        <span>
          <p>基于Next.js，TailwindCSS和r/SpaceX api搭建的一个网站，追踪spacex公司的火箭发射任务和国际太空站实时位置。支持移动端自适应，国际化，主题切换等特性。</p>
        </span>
      </div>
      <div class="pb-6">
        <p class="py-2">谷歌涂鸦微信小程序</p>
        <p class="text-sm opacity-80 flex flex-col justify-between">
          <p>miniapp</p>
          <p>链接：https://github.com/REND42/google-doodles-mini-app</p>
        </p>
        <span>
          <p>展示谷歌发布的所有涂鸦信息，后端基于Nest.js，每天实时爬取谷歌官网数据并存储在数据库中，前端基于TypeScript和VantUI。</p>
        </span>
      </div>
    </div>
  </div>

</template>