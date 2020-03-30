<template>
  <div class="home">
    <Header v-on:get-query-string="handleSearch"/>
    <el-row 
      type="flex" 
      justify="space-around">
      <el-col :span="14">
        <Blog v-for="blog in blogs" :blog = "blog" :key="blog.id"/>
      </el-col>
    </el-row>  
    <el-row
      type="flex" 
      justify="space-around">
      <el-col :span="2">
        <el-button @click="getMoreBlogs">点击加载更多</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Blog from "@/components/Blog.vue";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      isSigned: false,
      user: null,
      blogs: [],
      pageNum: 1,
      pageSize: 5
    };
  },
  methods: {
    handleSearch(queryString) {
      let pageNum = this.pageNum;
      // console.log(queryString);
      // console.log("With Query String");
      axios
        .get("/BlogVue/api/blogs-condition", {
          params: {
            condition: queryString,
            pageNum: pageNum
          }
        })
        .then(response => {
          let data = response.data;
          this.$data.blogs = data.blogs;
        });
    },
    getMoreBlogs() {
      let queryString = this.$store.getters.getQueryString;
      let pageNum = this.pageNum;
      let pageSize = this.pageSize;
      let blogs = this.blogs;
      let length = blogs.length;
      if (!queryString) {
        // console.log("No Query String");
        axios
          .get("/BlogVue/api/randomBlogs", {
            params: {
              pageNum: pageNum,
              pageSize: pageSize
            }
          })
          .then(response => {
            let data = response.data;
            if (data.blogs.length >= 1) {
              for (let i = 0; i < blogs.length; i++) {
                for (let j = 0; j < data.blogs.length; j++) {
                  if (blogs[i].id === data.blogs[j].id) {
                    blogs.splice(i, 1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
                  }
                }
              }
              for (let i = 0; i < data.blogs.length; i++) {
                blogs.push(data.blogs[i]);
              }
              this.blogs = blogs;
              if (length == blogs.length) {
                this.$message({
                  type: "info",
                  message: "没有更多数据"
                });
              }
            } else {
              this.$message({
                type: "info",
                message: "没有更多数据"
              });
            }
          });
      } else {
        // console.log("With Query String");
        axios
          .get("/BlogVue/api/blogs-condition", {
            params: {
              condition: queryString,
              pageNum: pageNum
            }
          })
          .then(response => {
            let data = response.data;
            if (data.blogs.length >= 1) {
              for (let i = 0; i < blogs.length; i++) {
                for (let j = 0; j < data.blogs.length; j++) {
                  if (blogs[i].id === data.blogs[j].id) {
                    blogs.splice(i, 1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
                  }
                }
              }
              for (let i = 0; i < data.blogs.length; i++) {
                blogs.push(data.blogs[i]);
              }
              this.blogs = blogs;
              if (length == blogs.length) {
                this.$message({
                  type: "info",
                  message: "没有更多数据"
                });
              }
            } else {
              this.$message({
                type: "info",
                message: "没有更多数据"
              });
            }
          });
      }
    }
  },
  components: {
    Header,
    Blog
  },
  beforeMount() {
    let queryString = this.$store.getters.getQueryString;
    let pageNum = this.pageNum;
    let pageSize = this.pageSize;
    if (!queryString) {
      // console.log("No Query String");
      axios
        .get("/BlogVue/api/randomBlogs", {
          params: {
            pageNum: pageNum,
            pageSize: pageSize
          }
        })
        .then(response => {
          let data = response.data;
          this.$data.blogs = data.blogs;
        });
    } else {
      // console.log("With Query String");
      axios
        .get("/BlogVue/api/blogs-condition", {
          params: {
            condition: queryString,
            pageNum: pageNum
          }
        })
        .then(response => {
          let data = response.data;
          this.$data.blogs = data.blogs;
        });
    }
  }
};
</script>