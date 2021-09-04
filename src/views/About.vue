<template>
  <div id>
    <div class="about">
      <h1>This is an about page</h1>
      <h2>测试第三次提交</h2>
      <AboutHelper></AboutHelper>
    </div>
  </div>
</template>

<script>
import AboutHelper from "@/components/AboutHello"
export default {
  name: "",
  props: [],
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log(...AboutHelper.props);
    
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {AboutHelper}
};
</script>

<style scoped >

</style>
