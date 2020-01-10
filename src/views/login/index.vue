<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- /导航栏 -->

    <!-- 登陆表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="user.code"
        label="验证码"
        placeholder="请输入验证码"
        required
      >
        <van-button slot="button" size="small" type="primary">
          发送验证码
        </van-button>
      </van-field>
    </van-cell-group>

    <div class="btn-wrap">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
    <!-- /登陆表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // 1.获取表单数据
      const user = this.user
      // 2.表单验证

      // 表单验证通过,开始 loading 动画
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      // 3.请求提交
      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登录失败')
      }
      // 4.根据接口返回结果执行后续处理
    }
  }
}
</script>

<style lang="less" scoped>
  .btn-wrap {
    padding: 27px 16px;
    .van-button {
      width: 100%;
      background: #6db4fb;
      border-radius: 5px;
    }
  }
</style>
