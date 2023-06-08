<template>
  <div class="w-100">
    <el-form :model="request" :rules="rules" ref="request">
      <el-form-item label="Loginni kiriting">
        <el-input v-model="request.login"></el-input>
      </el-form-item>
      <el-form-item label="Parolni kiriitng">
        <el-input v-model="request.password"></el-input>
      </el-form-item>
      <el-form-item>
        <AppButton
          theme="secondary"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class=""
          height="50"
        >
          Tizimga kirish
        </AppButton>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
export default {
  name: "AppLogin",
  components: { AppButton },
  data() {
    return {
      request: {
        login: "",
        password: "",
        client_id: 1,
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
