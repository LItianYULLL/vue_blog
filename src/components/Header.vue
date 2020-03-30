<template>
    <el-card shadow="hover">
        <el-row :gutter="1" class="app" type="flex" justify="center">
            <el-col :span="2">
                <router-link to="/" class="logo">极课</router-link>
            </el-col>
            <el-col :span="4">
                <el-autocomplete
                    v-model="queryString"
                    clearable
                    style="{width:400px}"
                    :fetch-suggestions="search"
                    placeholder="请输入内容"
                    @select="handleSelect"
                    >
                </el-autocomplete>
            </el-col>
            <el-col :span="1">
                <el-button
                    @click="handleSearch" 
                    icon="el-icon-search" 
                    circle 
                    class="search"
                    title="搜索">
                </el-button>
            </el-col>
            <el-col :span="1">
                <el-button 
                    class="menu-item" 
                    title="写博客"
                    @click="writeBlog"  
                    circle 
                    icon="el-icon-edit">
                </el-button>           
            </el-col>
            <el-col :span="1" v-if="isSigned">
                <el-popover>        
                    <el-row>
                      <el-col>
                        <el-button @click="userInfo">我的信息</el-button>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col>
                        <el-button @click="userBlogs">我的博客</el-button>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col>
                        <el-button @click="signOut">退出登录</el-button>
                      </el-col>
                    </el-row>
                    <el-button class="menu-item" title="个人中心" circle icon="el-icon-more" slot="reference"></el-button>
                    </el-popover>
            </el-col>
            <el-col :span="1" v-if="!isSigned">
                <el-button class="menu-item" @click="signIn">登录/注册</el-button>
            </el-col>
        </el-row>
    </el-card>    
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      isSigned: false,
      queryString: "",
      isDisabled: true,
      user: {}
    };
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.user = null;
      this.isSigned = false;
      this.$store.commit("removeUser");
      this.$store.commit("removeIsSigned");
      this.$router.push("/");
    },
    signIn() {
      this.$router.push("/signIn");
    },
  },
  beforeMount() {
    this.isSigned = this.$store.getters.getIsSigned;
    this.user = this.$store.getters.getUser;
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:hover {
  color: #303133;
}
.logo {
  text-align: center;
  font-weight: bolder;
  color: #409eff;
  font-size: 30px;
}
.search:hover {
  color: #409eff;
}
.el-col {
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.menu-item {
  color: #606266;
}
a:hover {
  color: #409eff;
}
.el-input_inner {
  display: block;
}
</style>