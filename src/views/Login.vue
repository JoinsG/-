<template>
  <div id="login">
    <div style="margin: 20px;"></div>
    <el-form label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small" @click="login">登陆</el-button>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from "vuex";
export default {
  name: "login",
  props: [],
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: ""
      }
    };
  },
  computed: {
      ...mapGetters('User',["getUserInfo"])
  },
  created() {},
  mounted() {
    let userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
    if(userInfo){
      this.setUserInfo(userInfo)
      this.$router.push('/home')
    }
  },
  watch: {},
  methods: {
    async login() {
      let [success, err] = await this.$trycatch(
        this.$axios.post("/user/login", this.formLabelAlign)
      );
      console.log(success);
      console.log(err);
      if (success) {
        this.setUserInfo(success.success[0])
        window.localStorage.setItem("userInfo",JSON.stringify(success.success[0]))
        // this.commit("setUserInfo",success[0])
        this.$router.push('/home')
        console.log(this.getUserInfo);
      } else {
        console.log(err);
      }
    },
    ...mapMutations('User',['setUserInfo'])
  },
  components: {}
};
</script>

<style scoped>
</style>
