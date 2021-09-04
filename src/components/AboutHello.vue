<template>
  <div id="About">
    <!-- <h1 :top="test()">测试</h1> -->
    <div class="wrap">
      <p id="test1" class="test_item">1</p>
      <p id="test2" ref="wrap_test2" class="test_item">2</p>
      <p class="test_item">3</p>
      <p class="test_item">4</p>
      <p class="test_item">5</p>
      <p class="test_item">6</p>
        <!-- <div class="content"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["test1", "test2"],
  data() {
    return {
      test:{
        a:1,
        b:2,
        c:{
          a:3
        }
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
      this.$nextTick(() =>{
          console.log(this.$refs['wrap_test2'].offsetTop);
          
      })
      console.log(this.test?.a);
      console.log(this.test?.c?.b);
      
  },
  watch: {},
  methods: {
    testa() {
      console.log("1");
    }
  },
  components: {}
};
</script>

<style scoped >
#About{
    display: flex;
    justify-content: center;
    padding: relative;
    background-color:#333;
}
/* #test1 {
  position: sticky;
  top: 0;
}
#test2 {
  position: sticky;
  top: 0;
} */
.test_item{
    position: sticky;
    top: 0;
    width: 100%;
    height: 400px;
}
.wrap {
  width: 200px;
  height: 600px;
  overflow: auto;
  background-color: deepskyblue;
  position: relative;
}
.wrap .content{
    height: 700px;
    width: 100%;
}
</style>
