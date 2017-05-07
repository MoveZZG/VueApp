<template lang="html">
  <div class="app">
    <section>
        <router-view></router-view>
    </section>
    <nav>
      <ul>
        <router-link tag='li' to='/board'active-class='active' class="yo-ico" >&#xe60e;<b>首页</b></router-link>
        <router-link tag='li' to='/search'active-class='active' class="yo-ico">&#xe674;<b>搜索</b></router-link>
        <router-link tag='li' to='/enternote'active-class='active' class="yo-ico">&#xe50d;<b>我的</b></router-link>
        <router-link tag='li' to='/myinfo'active-class='active' class="yo-ico" >&#xe618;<b>我的</b></router-link>
      </ul>
    </nav>
  </div>
</template>
<script>

</script>
